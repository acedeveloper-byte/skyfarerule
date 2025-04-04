'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const destinations = [
  {
    name: 'Travel to New York',
    image: '/images/destinations/new-york.webp',
    reviews: 452,
   },
  {
    name: 'Travel to Rome',
    image: '/images/destinations/rome.webp',
    reviews: 400,
   },
  {
    name: 'Travel to Paris',
    image: '/images/destinations/paris.webp',
    reviews: 400,
   },

   {
    name: 'Travel to Miami',
    image: '/images/destinations/miami.webp',
    reviews: 400,
   },
];

const FlightDestination = () => {
  return (
    <div>
      <section className="section destination-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10 text-center wow fadeInUp" data-wow-delay="0.2s">
              <div className="section-header text-center">
                <h2 className="mb-2 fw-bold">
                  Trending  <span className="text-primary text-decoration-none text-dark ">Destinations</span>
                </h2>
                <p className="sub-title">
                  Embark on unforgettable journeys to the world's most sought-after cruise ports
                </p>
              </div>
            </div>
          </div>

          <Swiper 
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="destination-slider ">
            {destinations.map((dest, index) => (
              <SwiperSlide key={index}>
                <div className="destination-item mb-4 wow fadeInUp" data-wow-delay="0.2s">
                  <img src={dest.image} alt="img" />
                  <div className="destination-info text-center">
                    <div className="destination-content">
                      <h5 className="mb-1 text-white">{dest.name}</h5>
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="rating d-flex align-items-center me-2">
                          <i className="fa-solid fa-star filled me-1"></i>
                          <i className="fa-solid fa-star filled me-1"></i>
                          <i className="fa-solid fa-star filled me-1"></i>
                          <i className="fa-solid fa-star filled me-1"></i>
                          <i className="fa-solid fa-star filled"></i>
                        </div>
                      </div>
                    </div>
                    <div className=" destination-overlay bg-white mt-2 btn btn-sm" >
                      <p><a href='tel: +1 (855) 838-5939' className='text-decoration-none text-dark fw-bold'>Book Now</a></p>
                    
                    </div>



                  </div>
                
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>
    </div>
  );
};

export default FlightDestination;
