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
    name: "Jame Goldon",
    location: "New York, United States",
    review: "Sky Fare Rules helps me find the best Delta flight deals with ease. Their responsive customer service swiftly handled my reservation change, ensuring affordable travel with excellent support. Always reliable for budget-friendly flights!",
    image: "/img/users/user-01.jpg",
    rating: 5,
  },
  {
    name: "Kelly Clarkson",
    location: "South Africa",
    review: "Sky Fare Rules is my go-to for United flights, always offering competitive prices. Their exceptional customer service ensures prompt, friendly support, making travel planning seamless. A reliable choice for budget-friendly and hassle-free bookings!",
    image: "/img/users/user-02.jpg",
    rating: 5,
  },
  {
    name: "Tyler Micheal",
    location: "France",
    review: "Sky Fare Rules provides unbeatable deals on Frontier flights, ensuring budget-friendly travel. Their platform makes finding the lowest fares easy, and their exceptional customer service guarantees a smooth booking process. I always rely on them for affordable and hassle-free flights.",
    image: "/img/users/user-03.jpg",
    rating: 5,
  },

  {
    name: "John Travolta",
    location: "France",
    review: "Sky Fare Rules helps me find the best Southwest flight deals with ease. Their unbeatable prices and exceptional customer service make booking hassle-free. I trust them for affordable travel and quick, courteous support whenever needed.",
    image: "/img/users/user-03.jpg",
    rating: 5,
  },

 
];

const Testimonial = () => {
  return (
    <section className="section bgwhite">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10 text-center">
            <div className="section-header text-center wow fadeInUp">
              <h2 className="mb-2 fw-bold">What <span className="text-primary text-decoration-none text-dark ">Passengers Say?</span> </h2>
              <p className="sub-title">Nothing can prove our expertise in the airline industry more than the global passengers who use our facilities to find the cheapest flight tickets for their desired airlines.</p>
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
                        <FontAwesomeIcon icon={faStar} key={i} style={{color: '#ffb74d'}}/>
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
                        <h6 className="  text-dark fw-bold">{testimonial.name}</h6>
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
