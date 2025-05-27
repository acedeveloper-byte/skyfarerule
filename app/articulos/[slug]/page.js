import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HOST, SITE_ID, URL_IMAGE } from '@/utils/static';
import FlightHeader from '@/components/Flights/FlightHeader';
import FlightFooter from '@/components/Flights/FlightFooter';

export async function generateMetadata({ params }) {
    const { slug } = params;

    try {
        const res = await fetch(`${HOST}/articulos/get-articulos-by-urland-site/${SITE_ID}/${slug}`, {
            cache: 'no-store',
        });

        if (!res.ok) throw new Error('Failed to fetch metadata');

        const matchedPost = await res.json();

        if (!matchedPost || !matchedPost.response) {
            return {
                title: 'Page Not Found',
                description: 'The blog you are looking for does not exist.',
            };
        }

        return {
            title: matchedPost.response.meta_title || 'Articulos',
            description: matchedPost.response.meta_description || 'Read this articulos post.',
        };
    } catch (error) {
        console.error('Metadata fetch error:', error);
        return {
            title: 'Error Loading Page',
            description: 'There was an error loading this page.',
        };
    }
}

const getPostData = async (slug) => {
    const res = await fetch(`${HOST}/articulos/get-articulos-by-urland-site/${SITE_ID}/${slug}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error('Failed to fetch post');
    return res.json();
};

const getRecentPosts = async () => {
    const res = await fetch(`${HOST}/articulos/get-articulos-by-siteId/${SITE_ID}`, {
        cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch recent posts');
    return res.json();
};

export default async function Page({ params }) {
    const { slug } = params;

    const [postRes, recentRes] = await Promise.all([getPostData(slug), getRecentPosts()]);

    const post = postRes?.response || {};
    const recentPosts = recentRes?.response || [];

    // Debug: Check image path
    // console.log('Image Path:', post.articulos_images);

    return (
        <>
            <FlightHeader />
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="card blog-details mb-4 mb-lg-0">
                                <div className="card-body">
                                    <div className="blog-content">
                                        <div className="blog-image mb-3">
                                            {post.articulos_images ? (
                                                <img
                                                    src={`${URL_IMAGE}articulos/${post.articulos_images}`}
                                                    alt={post.articulos_image_tag || 'Blog image'}
                                                    className="img-fluid rounded"
                                                />
                                            ) : (
                                                <div className="bg-light text-muted text-center py-5">
                                                    No image available
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h1 className="mb-4 text-dark">{post.title_tag_h1}</h1>
                                            <div
                                                className="prose prose-lg text-dark"
                                                dangerouslySetInnerHTML={{ __html: post.articulos_description }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar or recent posts can go here */}
                    </div>
                </div>
            </div>
            <FlightFooter />
        </>
    );
}
