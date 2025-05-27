import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HOST, SITE_ID, URL_IMAGE } from '@/utils/static';
import FlightHeader from '@/components/Flights/FlightHeader';
import FlightFooter from '@/components/Flights/FlightFooter';

export async function generateMetadata({ params }) {
    const { slug } = params;

    try {
        const res = await fetch(`${HOST}/blog/get-blog-by-urland-site/${SITE_ID}/${slug}`, {
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
    const res = await fetch(`${HOST}/blog/get-blog-by-urland-site/${SITE_ID}/${slug}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error('Failed to fetch post');
    return res.json();
};

const getRecentPosts = async () => {
    const res = await fetch(`${HOST}/blog/get-blogs-by-siteId/${SITE_ID}`, {
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

    return (
        <>
        <FlightHeader/>
         <div className="content" style={{}}>
        <div className="container" style={{}}>

         
            <div className="row" style={{}}>
                <div className="col-lg-8 col-md-12">
                    <div className="card blog-details mb-4 mb-lg-0">
                        <div className="card-body">
                            <div className="blog-content">
                                <div className="blog-image mb-3">
                                    <img src={`${URL_IMAGE}${post.blog_images}`} alt="image" className="img-fluid rounded" />
                                </div>
                                <div className="p-4">
                            <h1 className="mb-4 text-dark">{post.title_tag_h1}</h1>
                            <div
                                className="prose prose-lg text-dark"
                                dangerouslySetInnerHTML={{ __html: post.blog_description }}
                            />
                        </div>
                                
                              
                              
                              
                              
         
                              
                            </div>
                        </div>
                    </div>
                </div>
               
                  </div>
            </div>
          
        </div>
        </>
    );
}
