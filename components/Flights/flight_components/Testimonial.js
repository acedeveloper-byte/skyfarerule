'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Andrew",
    location: "New York, United States",
    review: "Dream Tours is the only way to go. We had the time of our life on our trip to the Ark. The customer service was wonderful, and the staff was very helpful.",
    image: "/img/users/user-01.jpg",
    rating: 5,
    title: "A Dream Vacation Come True!"
  },
  {
    name: "Bryan",
    location: "South Africa",
    review: "We had a fantastic time as a family. There were activities for every age group, and the kids loved the onboard kids’ club. The cruise gave us the perfect relaxation & fun.",
    image: "/img/users/user-02.jpg",
    rating: 5,
    title: "Perfect Family Getaway!"
  },
  {
    name: "Prajakta",
    location: "France",
    review: "I was blown away by the variety of dining options and live shows every night. It felt like I was in a five-star hotel on the sea! I’m already planning my next cruise.",
    image: "/img/users/user-03.jpg",
    rating: 5,
    title: "Amazing Food and Entertainment!"
  },

  {
    name: "Prajakta",
    location: "France",
    review: "I was blown away by the variety of dining options and live shows every night. It felt like I was in a five-star hotel on the sea! I’m already planning my next cruise.",
    image: "/img/users/user-03.jpg",
    rating: 5,
    title: "Amazing Food and Entertainment!"
  },

  {
    name: "Prajakta",
    location: "France",
    review: "I was blown away by the variety of dining options and live shows every night. It felt like I was in a five-star hotel on the sea! I’m already planning my next cruise.",
    image: "/img/users/user-03.jpg",
    rating: 5,
    title: "Amazing Food and Entertainment!"
  }
];

const Testimonial = () => {
  return (
    <section className="section bgwhite">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10 text-center">
            <div className="section-header text-center wow fadeInUp">
              <h2 className="mb-2 fw-bold">What’s Our <span className="text-primary text-decoration-none text-dark ">User</span> Says</h2>
              <p className="sub-title">Explore heartfelt stories from our satisfied travelers, showcasing unforgettable journeys and remarkable memories</p>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          modules={[Pagination]}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="card border-white wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-center text-center flex-column">
                    <div className="rating d-flex align-items-center me-2 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FontAwesomeIcon icon={faStar} key={i}/>
                      ))}
                      <span className="text-gray-9 fs-14 ms-1">5.0</span>
                    </div>
                    <h6 className="mb-2 fw-bold">{testimonial.title}</h6>
                    <p className="mb-3">{testimonial.review}</p>
                    <div className="d-flex align-items-center">
                      <a href="#" className="avatar avatar-md flex-shrink-0">
                        <img src={testimonial.image} className="rounded-circle" alt={testimonial.name} />
                      </a>
                      <div className="ms-2 d-flex align-items-center">
                        <h6 className="fs-16 fw-medium"><a href="#" className='text-decoration-none text-dark'>{testimonial.name}</a></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;