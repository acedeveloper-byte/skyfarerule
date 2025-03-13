import React from "react";


const FlightHome = () => {
  return (
    <div>
      {/* Preloader  */}

      {/* <!-- Preloader Ends */}
      <section className="banner p-0 bg-white">
        <div className="banner-wrapper px-7">
          <div className="swiper position-relative z-1 slider">
            {/* Additional required wrapper */}
            <div className="swiper-wrapper">
              {/* Slides */}
              <div className="swiper-slide position-relative slide-1">
                <div className="slide-body pb-8 z-1">
                  <div className="banner-content-inner swiper-content text-center w-50 m-auto">
                    <h1 className="white fadeInDown text-uppercase">
                      Find the Perfect Vacation Place.
                    </h1>
                    <p className="fadeInDown mb-4 white w-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium nobis commodi reprehenderit corporis eaque
                      accusamus, dolorem atque!
                    </p>
                    <div className="banner-button1 fadeInDown me-4">
                      <a
                        href="tour-detail.html"
                        className="btn-blue btn-red rounded"
                      >
                        Book a Trip
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide position-relative slide-2">
                <div className="slide-body pb-8 z-1">
                  <div className="banner-content-inner swiper-content text-center w-50 m-auto">
                    <h1 className="white fadeInDown text-uppercase">
                      We Offer you better deals.
                    </h1>
                    <p className="fadeInDown mb-4 white w-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium nobis commodi reprehenderit corporis eaque
                      accusamus, dolorem atque!
                    </p>
                    <div className="banner-button1 fadeInDown me-4">
                      <a
                        href="tour-detail.html"
                        className="btn-blue btn-red rounded"
                      >
                        Book a Trip
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide position-relative slide-3">
                <div className="slide-body pb-8 z-1">
                  <div className="banner-content-inner swiper-content text-center w-50 m-auto">
                    <h1 className="white fadeInDown text-uppercase">
                      Amazing Santorini 7 days tour.
                    </h1>
                    <p className="fadeInDown mb-4 white w-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium nobis commodi reprehenderit corporis eaque
                      accusamus, dolorem atque!
                    </p>
                    <div className="banner-button1 fadeInDown me-4">
                      <a
                        href="tour-detail.html"
                        className="btn-blue btn-red rounded"
                      >
                        Book a Trip
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightHome;
