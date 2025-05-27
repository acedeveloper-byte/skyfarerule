import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FlightHeader from "@/components/Flights/FlightHeader";
import FlightFooter from "@/components/Flights/FlightFooter";
import { HOST, SITE_ID, URL_IMAGE } from '@/utils/static';
import { FaArrowRight, FaHome } from 'react-icons/fa';
import Link from "next/link";


const getData = async () => {
  const res = await fetch(`${HOST}/articulos/get-articulos-by-siteId/${SITE_ID}`, {
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
              <h1 className="breadcrumb-title mb-2">Articulos</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  
                    <Link href="/" className='text-white text-decoration-none mx-2'><FaHome /></Link>
                
                  <li className="breadcrumb-item">Home</li>
                  <li className="text-white mx-2 " ><FaArrowRight /> Articulos</li>
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
<a className="text-decoration-none " href={`/articulos/${item.articulos_url}`}>

                <div className="blog-item mb-4 wow fadeInUp" data-wow-delay="0.2s">
                  <a href={`/articulos/${item.articulos_url}`} className="blog-img">
                    <img src={`${URL_IMAGE}articulos/${item.articulos_images}`} alt={item.articulos_image_tag} />
                  </a>
                  <span className="badge fs-13 fw-medium" style={{ backgroundColor: '#6D3E97' }}>Articulos</span>
                  <div className="blog-info text-center">
                    
                    <h6><a href={`/articulos/${item.articulos_url}`} className="text-decoration-none ">{item.title_tag_h1}</a></h6>
                  </div>
                </div>
                </a>
              </div>
            ))}

            
          </div>
        </div>
      </div>

      <FlightFooter />
    </div>
  );
};

export default Page;
