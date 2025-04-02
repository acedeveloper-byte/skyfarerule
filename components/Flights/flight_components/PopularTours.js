'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


const PopularTours = () => {
  const swiperRef = useRef(null);
  
  const tours = [
    {
      id: 1,
      title: "Rainbow Mountain Valley",
      location: "Ciutat Vella, Barcelona",
      price: 500,
      oldPrice: 789,
      duration: "4 Day, 3 Night",
      guests: 14,
      image: "/img/tours/tours-09.jpg",
      rating: 5.0,
      reviews: 105,
    },
    {
      id: 2,
      title: "Rainbow Mountain Valley",
      location: "Ciutat Vella, Barcelona",
      price: 500,
      oldPrice: 789,
      duration: "4 Day, 3 Night",
      guests: 14,
      image: "/img/tours/tours-09.jpg",
      rating: 5.0,
      reviews: 105,
    },
    {
      id: 3,
      title: "Rainbow Mountain Valley",
      location: "Ciutat Vella, Barcelona",
      price: 500,
      oldPrice: 789,
      duration: "4 Day, 3 Night",
      guests: 14,
      image: "/img/tours/tours-09.jpg",
      rating: 5.0,
      reviews: 105,
    },
    {
      id: 4,
      title: "Rainbow Mountain Valley",
      location: "Ciutat Vella, Barcelona",
      price: 500,
      oldPrice: 789,
      duration: "4 Day, 3 Night",
      guests: 14,
      image: "/img/tours/tours-09.jpg",
      rating: 5.0,
      reviews: 105,
    },
  ];

  return (
    <section className="section position-relative">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8">
            <div className="section-header-six">
              <span className="badge badge-soft-primary rounded-pill mb-1">
                Top Rated Tours
              </span>
              <h2>
                Popular Tours Around the World
                <span className="text-primary">.</span>
              </h2>
            </div>
          </div>
          <div className="col-md-4 text-end">
            <a href="tour-grid" className="btn btn-dark sec-head-btn">
              View All Categories
              <i className="isax isax-arrow-right-3 ms-2"></i>
            </a>
          </div>
        </div>

        <div className="position-relative">
          <button
            className="btn btn-dark position-absolute top-50 start-0 translate-middle-y z-index-10"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            &#10094;
          </button>
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {tours.map((tour) => (
              <SwiperSlide key={tour.id}>
                <div className="place-item mb-4 flex-fill">
                  <div className="place-img">
                    <a href="tour-details">
                      <img src={tour.image} className="img-fluid" alt="Tour" />
                    </a>
                    <div className="fav-item">
                      <a href="" className="fav-icon selected">
                      <FontAwesomeIcon icon={faHeart} className="text-red-500" />
                      </a>
                      <span className="badge bg-info d-inline-flex align-items-center">
                        <i className="isax isax-ranking me-1"></i>Trending
                      </span>
                    </div>
                  </div>
                  <div className="place-content">
                    <h5>
                      <a href="tour-details" className="text-dark text-decoration-none fw-bold">{tour.title}</a>
                    </h5>
                    <p>
                      <i className="isax isax-location5 me-2"></i>
                      {tour.location}
                    </p>
                    <h6>
                      Starts From <span className="text-primary">${tour.price}</span>
                      <span className="text-gray-3 text-decoration-line-through ms-1">
                        ${tour.oldPrice}
                      </span>
                    </h6>
                    <p>
                      <i className="isax isax-calendar-tick me-1"></i>
                      {tour.duration}
                    </p>
                    <p>
                      <i className="isax isax-profile-2user me-1"></i>
                      {tour.guests} Guests
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="btn btn-dark position-absolute top-50 end-0 translate-middle-y z-index-10"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
