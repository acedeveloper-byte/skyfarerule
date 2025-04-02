import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import FlightHeader from "@/components/Flights/FlightHeader";
import FlightFooter from "@/components/Flights/FlightFooter";
import ChooseUs from "@/components/AboutSection/ChooseUs";
import OurTeam from "@/components/AboutSection/OurTeam";
import Testimonial from "@/components/Flights/flight_components/Testimonial";
const page = () => {
  return (
    <div style={{ overflow: "visible" }}>
      <FlightHeader />
     
  
    <div className="breadcrumb-bar breadcrumb-bg-01 text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-12">
                    <h2 className="breadcrumb-title mb-2">About Us</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="index.html"><i className="isax isax-home5"></i></a></li>
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  
  
    <section className="section about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-image mb-4 mb-lg-0">
                        <div className="about-listing">
                            <i className="isax isax-calendar-add text-white mb-2"></i>
                            <h6 className="fs-16 mb-3 text-white">All Listings</h6>
                            <div className="listing-img">
                                <div>
                                    <img src="/img/icons/listing.svg" alt="icon" />
                                </div>
                                <a href="add-hotel.html" className="btn btn-warning text-gray-9">Add You Listings</a>
                            </div>
                        </div>
                        <div className="about-img">
                            <img src="/img/about.png" alt="about" />
                        </div>
                        <div className="about-progress d-inline-flex align-items-center">
                            <img src="/img/icons/progress-icon.svg" alt="icon" />
                            <div className="ms-2">
                                <p className="fs-10 mb-1">Today’s Earnings</p>
                                <h6 className="fs-13">$2500</h6>
                            </div>
                            <a href="wallet.html" className="btn btn-teal btn-sm fw-normal ms-4">Withdraw</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content mb-4">
                        <h6 className="text-primary fs-14 fw-medium mb-2">About DreamsTour</h6>
                        <h2 className="display-6 mb-2">All-in-one platform for unforgettable travel experiences!</h2>
                        <p className="mb-4">At DreamsTour, we believe that travel should be simple, seamless, and tailored to your needs. Whether you're dreaming of an exotic beach getaway, a cultural city tour, or a luxury cruise, we are here to turn your travel dreams
                            into reality.​</p>
                        <div className="d-flex align-items-center mb-4">
                            <span className="avatar avatar-xl bg-primary rounded-circle flex-shrink-0 me-3">
								<i className="isax isax-map5 fs-24"></i>
							</span>
                            <p>Clients navigate their journeys, whether for travel or educational purposes, primarily in Canada, the U.S., and the U.K</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="avatar avatar-xl bg-secondary rounded-circle flex-shrink-0 me-3">
								<i className="isax isax-trade5 fs-24 text-gray-9"></i>
							</span>
                            <p>Provides a range of services from immigration advice to study-abroad support and vacation planning.</p>
                        </div>
                    </div>
                    <div className="about-mission">
                        <h6 className="text-primary fs-14 fw-medium mb-3">Our Mission</h6>
                        <p className="fs-16 text-gray-6">Our mission is to make travel more accessible, enjoyable, and hassle-free for everyone. With our range of services</p>
                    </div>
                </div>
            </div>
            <div className="about-bg d-none d-md-block">
                <img src="/img/bg/about-bg.png" alt="img" className="about-bg-01" />
            </div>
            <div className="about-bg-1 d-none d-md-block">
                <img src="/img/bg/about-arrow.png" alt="img" className="about-bg-01" />
            </div>
        </div>
    </section>
    
<ChooseUs/>

<OurTeam/>

     <Testimonial/>


      <FlightFooter />
    </div>
  );
};

export default page;
