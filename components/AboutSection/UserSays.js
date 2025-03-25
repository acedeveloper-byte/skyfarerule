'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; 

const UserSays = () => {
  return (
    <div>
      <section className="section user-section pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10 text-center wow fadeInUp" data-wow-delay="0.2s">
              <div className="section-header text-center">
                <h2 className="mb-2">
                  What’s Our <span className="text-primary text-decoration-underline">User</span> Says
                </h2>
                <p className="sub-title">
                  DreamsTour, a tour operator specializing in dream destinations, offers a variety of benefits for travelers.
                </p>
              </div>
            </div>
          </div>

          {/* Swiper Component */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="testimonial-slider"
          >
            <SwiperSlide>
              <div className="card border-white wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-body">
                  <h6 className="mb-4">Great Hospitalization</h6>
                  <p className="mb-4">
                    Dream Tours is the only way to go. We had the time of our life on our trip to the Ark. The customer
                    service was wonderful & the staff was very helpful.
                  </p>
                  <div className="border-top pt-4 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar avatar-md flex-shrink-0">
                        <img src="/img/users/user-01.jpg" className="rounded-circle" alt="img" />
                      </a>
                      <div className="ms-2">
                        <h6 className="fs-16 fw-medium">
                          <a href="javascript:void(0);">Andrew Fetcher</a>
                        </h6>
                        <p>Newyork, United States</p>
                      </div>
                    </div>
                    <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium me-2">5.0</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card border-white wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-body">
                  <h6 className="mb-4">Hidden Treasure</h6>
                  <p className="mb-4">
                    I went on the Gone with the Wind tour, and it was my first multi-day bus tour. The experience was
                    terrific, thanks to the friendly tour guides.
                  </p>
                  <div className="border-top pt-4 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar avatar-md flex-shrink-0">
                        <img src="/img/users/user-02.jpg" className="rounded-circle" alt="img" />
                      </a>
                      <div className="ms-2">
                        <h6 className="fs-16 fw-medium">
                          <a href="javascript:void(0);">Bryan Bradfield</a>
                        </h6>
                        <p>Cape Town, South Africa</p>
                      </div>
                    </div>
                    <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium me-2">5.0</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card border-white wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-body">
                  <h6 className="mb-4">Easy to Find your Leisure Place</h6>
                  <p className="mb-4">
                    Thanks for arranging a smooth travel experience for us. Our cab driver was polite, timely, and
                    helpful. The team ensured making it a stress-free trip.
                  </p>
                  <div className="border-top pt-4 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <a href="javascript:void(0);" className="avatar avatar-md flex-shrink-0">
                        <img src="/img/users/user-03.jpg" className="rounded-circle" alt="img" />
                      </a>
                      <div className="ms-2">
                        <h6 className="fs-16 fw-medium">
                          <a href="javascript:void(0);">Prajakta Sasane</a>
                        </h6>
                        <p>Paris, France</p>
                      </div>
                    </div>
                    <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium me-2">5.0</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card border-white wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-body">
                  <h6 className="mb-4">Great Hospitalization</h6>
                  <p className="mb-4">
                    Dream Tours is the only way to go. We had the time of our life on our trip to the Ark. The customer
                    service was wonderful & the staff was very helpful.
                  </p>
                  <div className="border-top pt-4 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-md flex-shrink-0">
                        <img src="/img/users/user-01.jpg" className="rounded-circle" alt="img" />
                      </span>
                      <div className="ms-2">
                        <h6 className="fs-16 fw-medium">Andrew Fetcher</h6>
                        <p>Newyork, United States</p>
                      </div>
                    </div>
                    <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium me-2">5.0</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="testimonial-bg">
          <img src="/img/bg/testimonial-bg-01.svg" alt="img" />
        </div>
      </section>
    </div>
  );
};

export default UserSays;
