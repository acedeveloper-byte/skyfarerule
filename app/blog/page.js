import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import FlightHeader from "@/components/Flights/FlightHeader";
import FlightFooter from "@/components/Flights/FlightFooter";
import { HOST, SITE_ID, URL_IMAGE } from '@/utils/static';

const getData = async () => {
  const res = await fetch(`${HOST}/blog/get-blogs-by-siteId/${SITE_ID}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

const Page = async () => {
  const posts = await getData();

  return (
    <div style={{ overflow: "visible" }}>
      <FlightHeader />
      <div className="breadcrumb-bar breadcrumb-bg-02 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title mb-2">Blog</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item"><a href="/"><i className="isax isax-home5"></i></a></li>
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">Blog</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            {posts.response.map((item, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
<a className="text-decoration-none " href={`/blog/${item.blog_url}`}>

                <div className="blog-item mb-4 wow fadeInUp" data-wow-delay="0.2s">
                  <a href="" className="blog-img">
                    <img src={`${URL_IMAGE}${item.blog_images}`} alt={item.articulos_image_tag} />
                  </a>
                  <span className="badge fs-13 fw-medium" style={{ backgroundColor: '#6D3E97' }}>Travel</span>
                  <div className="blog-info text-center">
                    <div className="d-inline-flex align-items-center justify-content-center">
                      <div className="d-inline-flex align-items-center border-end pe-3 me-3 mb-2">
                        <a href={`articulos/${item.articulos_url}`} className="d-flex align-items-center text-decoration-none">
                          <span className="avatar avatar-sm me-2">
                            <img src="/img/users/user-01.jpg" className="rounded-circle border border-white text-decoration-none" alt="img" />
                          </span>
                          <p>Bryan Bradfield</p>
                        </a>
                      </div>
                      <p className="text-white mb-2"><i className="isax isax-calendar-2 me-2"></i>14 May 2025</p>
                    </div>
                    <h5><a href="" className="text-decoration-none fs-5">Top 10 Hidden Gems places in Central Europe in 2025</a></h5>
                  </div>
                </div>
                </a>
              </div>
            ))}

            <nav className="pagination-nav">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="" aria-label="Previous">
                    <span aria-hidden="true"><i className="fa-solid fa-chevron-left"></i></span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="">1</a></li>
                <li className="page-item"><a className="page-link" href="">2</a></li>
                <li className="page-item"><a className="page-link" href="">3</a></li>
                <li className="page-item active"><a className="page-link" href="">4</a></li>
                <li className="page-item"><a className="page-link" href="">5</a></li>
                <li className="page-item">
                  <a className="page-link" href="" aria-label="Next">
                    <span aria-hidden="true"><i className="fa-solid fa-chevron-right"></i></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <FlightFooter />
    </div>
  );
};

export default Page;
