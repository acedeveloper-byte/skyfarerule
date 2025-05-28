import { HOST, SITE_ID, URL_IMAGE } from '@/utils/static';
import React from 'react';

const getData = async () => {
  const res = await fetch(`${HOST}/blog/get-blogs-by-siteId/${SITE_ID}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

const RecentArticles = async () => {
  const posts = await getData();

  return (
    <section className="section blog-section blog-sec-six">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-between align-items-center mb-4">
          <div className="col-md-8 wow fadeInUp" data-wow-delay="0.2s">
            <div className="section-header-six">
              <span className="badge badge-soft-primary rounded-pill mb-2">Recent Blog</span>
              <h2>
                Checkout our Recent Articles<span className="text-primary"></span>
              </h2>
            </div>
          </div>
          <div className="col-md-4 text-md-end">
            <a href="/blog" className="btn btn-dark sec-head-btn">
              View All Blogs <i className="isax isax-arrow-right-3 ms-2"></i>
            </a>
          </div>
        </div>

        {/* Blog Cards - 3 Columns */}
        <div className="row">
          {posts.response.slice(0, 6).map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card blog-grid-six h-100 shadow-sm border-0">
                <div className="card-img overflow-hidden rounded-top position-relative">
                  <a href={`/blog-details/${item.blog_url}`}>
                    <img
                      src={`${URL_IMAGE}${item.blog_images}`}
                      className="img-fluid w-100"
                      style={{ objectFit: 'cover', height: '220px' }}
                      alt={item.blog_image_tag || 'Blog image'}
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
                    <a href={`/blog/${item.blog_url}`} className="text-decoration-none text-dark">
                      {item.meta_title || 'Untitled'}
                    </a>
                  </h5>
                  <p className="text-muted mb-3">
                    {item.meta_description?.slice(0, 80) || 'No description available...'}
                  </p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
