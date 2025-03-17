import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import AboutTream from "@/components/AboutSection/AboutTream";
import FlightHeader from "@/components/Flights/FlightHeader";
import FlightFooter from "@/components/Flights/FlightFooter";
const page = () => {
  return (
    <div style={{ overflow: "visible" }}>
      <FlightHeader />
      {/* <!-- Breadcrumb --> */}
      <section class="breadcrumb-outer text-center">
        <div class="container">
          <div class="breadcrumb-content">
            <h2>About Us</h2>
            <nav aria-label="breadcrumb">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="section-overlay"></div>
      </section>
      {/* <!-- BreadCrumb Ends --> */}

      <section className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2>Why Choose Us?</h2>
                <div className="section-icon section-icon-white">
                  <i className="flaticon-diamond"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="about-item">
                <div className="about-icon">
                  <i className="fa fa-superpowers" aria-hidden="true"></i>
                </div>
                <div className="about-content">
                  <h3>Perfect Planning</h3>
                  <p>
                    Plan your perfect vacation with our travel agency. Choose
                    among hundreds of all-inclusive offers!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-item">
                <div className="about-icon">
                  <i className="fa fa-paw" aria-hidden="true"></i>
                </div>
                <div className="about-content">
                  <h3>Secure Venues</h3>
                  <p>
                    We work hard to secure the best hotel rates in the most
                    popular destinations. Search and book adventure tours now!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-item">
                <div className="about-icon">
                  <i className="fa fa-fire" aria-hidden="true"></i>
                </div>
                <div className="about-content">
                  <h3>Beautiful Memories</h3>
                  <p>
                    Book international vacation packages with us and create
                    memories that will last a lifetime! Create History !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutTream />


      <FlightFooter />
    </div>
  );
};

export default page;
