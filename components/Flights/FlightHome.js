import React from "react";

const FlightHome = () => {
  return (
    <>
      {/* <!-- Amazing Tours --> */}
      <section class="amazing-tours">
        <div class="container">
          <div class="section-title text-center">
            <h2>Amazing Tours</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis
              aute irure dolor in reprehenderit..
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="at-item box-item">
                <div class="at-image">
                  <img src="images/at2.jpg" alt="Image" />
                  <div class="at-overlay"></div>
                </div>
                <div class="at-content">
                  <h3>
                    <a href="#">Italy</a>
                  </h3>
                  <span>The colosseum</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="at-item box-item">
                <div class="at-image">
                  <img src="images/at1.jpg" alt="Image" />
                  <div class="at-overlay"></div>
                </div>
                <div class="at-content">
                  <h3>
                    <a href="#">Brazil</a>
                  </h3>
                  <span>The colosseum</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="at-item box-item">
                <div class="at-image">
                  <img src="images/at3.jpg" alt="Image" />
                  <div class="at-overlay"></div>
                </div>
                <div class="at-content">
                  <h3>
                    <a href="#">Venezuela</a>
                  </h3>
                  <span>The colosseum</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="at-item box-item">
                <div class="at-image">
                  <img src="images/at1.jpg" alt="Image" />
                  <div class="at-overlay"></div>
                </div>
                <div class="at-content">
                  <h3>
                    <a href="#">Kenya</a>
                  </h3>
                  <span>The colosseum</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="at-item box-item">
                <div class="at-image">
                  <img src="images/at3.jpg" alt="Image" />
                  <div class="at-overlay"></div>
                </div>
                <div class="at-content">
                  <h3>
                    <a href="#">Greece</a>
                  </h3>
                  <span>The colosseum</span>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="at-item box-item">
                <div class="at-image">
                  <img src="images/at2.jpg" alt="Image" />
                  <div class="at-overlay"></div>
                </div>
                <div class="at-content">
                  <h3>
                    <a href="#">Iceland</a>
                  </h3>
                  <span>The colosseum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Amazing Tours Ends --> */}

      {/* About Us Section Start */}
      <section className="about-us bg-white">
        <div className="container">
          <div className="about-us-inner text-center text-md-start">
            <div className="row gx-lg-5 align-items-center gy-5">
              <div className="col-lg-6">
                <div className="about-us-left">
                  <div className="section-title mb-4 text-center text-lg-start p-0">
                    <h5 className="mb-1 pink fst-italic text-uppercase">
                      About Us
                    </h5>
                    <h2 className="text-uppercase">
                      Get to know about the journey of SkyFare!
                    </h2>
                  </div>

                  <div className="about-us-body mb-3 text-center text-md-start">
                    <ul
                      className="nav nav-tabs border-0 justify-content-center justify-content-md-start"
                      id="myTab1"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active bg-transparent border-0 grey h4 ps-0 me-6"
                          id="vision-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#vision-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="vision-tab-pane"
                          aria-selected="true"
                        >
                          <i
                            className="fa fa-bullseye me-2"
                            aria-hidden="true"
                          ></i>{" "}
                          Mission and Vision
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link bg-transparent border-0 grey h4 ps-0 me-6"
                          id="customer-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#customer-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="customer-tab-pane"
                          aria-selected="false"
                        >
                          <i
                            className="fa fa-users me-2"
                            aria-hidden="true"
                          ></i>{" "}
                          Customer Focus
                        </button>
                      </li>
                    </ul>

                    <div className="tab-content py-4" id="myTabContent1">
                      <div
                        className="tab-pane fade show active"
                        id="vision-tab-pane"
                        role="tabpanel"
                        aria-labelledby="vision-tab"
                        tabIndex="0"
                      >
                        Etiam ac tortor id purus commodo vulputate. Vestibulum
                        porttitor erat felis and sed vehicula tortor malesuada
                        gravida. Mauris volutpat enim quis pulv gont congue.
                        Suspendisse ullamcorper, enim vitae tristique blandit,
                        eratot augue torel tempo libero, non porta lectus tortor
                        et elit. Quisque finibusot enim et eratourgt gravida, eu
                        elementum turpis lacinia. Integer female go tellus
                        ligula, attendora and condimentum.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="customer-tab-pane"
                        role="tabpanel"
                        aria-labelledby="customer-tab"
                        tabIndex="0"
                      >
                        Etiam ac tortor id purus commodo vulputate. Vestibulum
                        porttitor erat felis and sed vehicula tortor malesuada
                        gravida. Mauris volutpat enim quis pulv gont congue.
                        Suspendisse ullamcorper, enim vitae tristique blandit,
                        eratot augue torel tempo libero, non porta lectus tortor
                        et elit. Quisque finibusot enim et eratourgt gravida, eu
                        elementum turpis lacinia. Integer female go tellus
                        ligula, attendora and condimentum.
                      </div>
                    </div>
                  </div>

                  <div className="about-us-button d-md-flex justify-content-between align-items-center">
                    <a
                      href="aboutus.html"
                      className="btn-blue btn-red rounded my-4 text-decoration-none"
                    >
                      More About Us
                    </a>
                    <div className="costumer-counter d-flex justify-content-center justify-content-md-start">
                      <ul className="d-flex me-2">
                        <li>
                          <img
                            src="images/testemonial1.jpg"
                            alt="customer"
                            className="rounded-circle m-0 border border-3 border-grey"
                          />
                        </li>
                        <li>
                          <img
                            src="images/testemonial2.jpg"
                            alt="customer"
                            className="rounded-circle border border-3 border-grey"
                          />
                        </li>
                        <li>
                          <img
                            src="images/testemonial3.jpg"
                            alt="customer"
                            className="rounded-circle border border-3 border-grey"
                          />
                        </li>
                        <li>
                          <img
                            src="images/testemonial4.jpg"
                            alt="customer"
                            className="rounded-circle border border-3 border-grey"
                          />
                        </li>
                      </ul>
                      <div className="customer-content">
                        <span className="num black fw-bold">105</span>+ <br />
                        Customers
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-us-right">
                  <div className="row gy-4">
                    <div className="col-lg-6 col-md-6">
                      <div className="about-image1">
                        <div className="about-us-image mb-2">
                          <img
                            src="images/detailslider1.jpg"
                            alt="about-us"
                            className="w-100 rounded"
                          />
                        </div>
                        <div className="about-us-image text-end">
                          <img
                            src="images/detailslider4.jpg"
                            alt="about-us"
                            className="w-lg-80 w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="about-us-image-2">
                        <div className="about-us-image mb-2">
                          <img
                            src="images/list1.jpg"
                            alt="about-us"
                            className="w-100 rounded"
                          />
                        </div>
                        <div className="about-us-image text-end">
                          <img
                            src="images/deal5.jpg"
                            alt="about-us"
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section Ends */}

      {/* <!-- Why US --> */}
      <section className="why-us pt-0 bg-white">
        <div className="container">
          <div className="why-us-inner">
            <div className="section-title text-center mb-6">
              <h5
                className=" pink fst-italic text-uppercase"
                style={{ marginTop: "26px" }}
              >
                What defines us
              </h5>
              <h2 className="text-uppercase ">Why book with yatra?</h2>
            </div>
            <div className="why-us-body">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3  rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i
                        className="fa fa-flag-o bg-light-grey blue text-center rounded-circle"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Ultimate Flexibility</h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet ametsro sit amt cimus
                        voluptaab.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3  rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i
                        className="fa fa-globe bg-light-grey blue text-center rounded-circle"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Worldwide Coverage</h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet ametsro sit amt cimus
                        voluptaab.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3  rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i
                        className="fa fa-bolt bg-light-grey blue text-center rounded-circle"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Compitative Pricing</h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet ametsro sit amt cimus
                        voluptaab.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3  rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i
                        className="fa fa-calendar-o bg-light-grey blue text-center rounded-circle"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Fast Booking</h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet ametsro sit amt cimus
                        voluptaab.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3  rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i
                        className="fa fa-comments-o bg-light-grey blue text-center rounded-circle"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Best Support 24/7</h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet ametsro sit amt cimus
                        voluptaab.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3  rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i
                        className="fa fa-star-o bg-light-grey blue text-center rounded-circle"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Expert Guides</h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet ametsro sit amt cimus
                        voluptaab.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Why US Ends --> */}

      {/* <!-- Blog Section Starts --> */}
      <section className="blog py-10">
        <div className="container">
          <div className="blog-inner">
            <div className="section-title p-0 w-lg-60 text-center m-auto mb-6">
              <h5 className="pink fst-italic text-uppercase mb-1">
                Travel Blogs
              </h5>
              <h2 className="text-uppercase">
                Upto Date with our blogs & News
              </h2>
            </div>
            <div className="blog-body">
              <div className="row gy-4 align-items-stretch">
                <div className="col-lg-5">
                  <div className="blog-body-left position-relative h-100">
                    <div className="blog-image position-relative h-100">
                      <a href="blog-detail.html">
                        <img
                          src="images/destination1.jpg"
                          alt="blog-image"
                          className="w-100 rounded h-100"
                        />
                      </a>
                    </div>
                    <div className="blog-box-body py-7 px-6 position-absolute bottom-0">
                      <div className="blog-box-top-content mb-1">
                        <ul className="m-0 p-0 d-flex flex-wrap">
                          <li className="small white my-1">
                            By{" "}
                            <a
                              href="#"
                              className="white text-decoration-underline"
                            >
                              Adam Gedes
                            </a>
                          </li>
                          <li className="mx-6 position-relative small white my-1">
                            Sept 20 2024
                          </li>
                          <li className="position-relative small white my-1">
                            5 Comments
                          </li>
                        </ul>
                      </div>
                      <h3 className="mb-4">
                        <a href="blog-detail.html" className="white">
                          Journey Through Hidden Gems: Off the Beaten Path
                          Adventures
                        </a>
                      </h3>
                      <div className="blog-box-bottom-content d-flex justify-content-between align-items-center">
                        <a
                          href="blog-detail.html"
                          className="btn-blue btn-red rounded px-3"
                        >
                          View Post
                        </a>
                        <ul className="m-0 p-0 d-flex">
                          <li className="me-6 position-static">
                            <a href="#" className="white">
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="me-6 position-relative">
                            <a href="#" className="white">
                              <i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="me-6 position-relative">
                            <a href="#" className="white">
                              <i
                                className="fa fa-pinterest-p"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="position-relative">
                            <a href="#" className="white">
                              <i
                                className="fa fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="blog-body-right">
                    <div className="blog-right-top">
                      <div className="row gy-4">
                        <div className="col-lg-12">
                          <div className="blog-box-top d-md-flex align-items-center rounded overflow-hidden box-shadow ">
                            <div className="blog-image">
                              <a href="blog-detail.html">
                                <img
                                  src="images/list7.jpg"
                                  alt="blog-image"
                                  className=""
                                />
                              </a>
                            </div>
                            <div className="blog-box-body p-4">
                              <div className="blog-box-top-content mb-3">
                                <ul className="m-0 p-0 d-flex">
                                  <li className="small">
                                    By{" "}
                                    <a
                                      href="#"
                                      className="text-decoration-underline black"
                                    >
                                      John Oliver
                                    </a>
                                  </li>
                                  <li className="mx-6 position-relative small">
                                    Adventure
                                  </li>
                                </ul>
                              </div>
                              <h3 className="mb-5">
                                <a href="blog-detail.html" className="black">
                                  Chasing Sunsets: The Best Spots to Watch the
                                  Sun Go Down in Nepal
                                </a>
                              </h3>
                              <div className="blog-box-bottom-content d-flex justify-content-between">
                                <a
                                  href="blog-detail.html"
                                  className="btn-blue btn-red rounded px-3 text-decoration-none"
                                >
                                  View Post
                                </a>
                                <p className="mb-0 small">
                                  <i
                                    className="fa fa-book"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  3 Min read
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="blog-box-bottom rounded overflow-hidden box-shadow">
                            <div className="blog-image">
                              <a href="#">
                                <img
                                  src="images/slider-blog/slider1.jpg"
                                  alt="blog-image"
                                  className="w-100"
                                />
                              </a>
                            </div>
                            <div className="blog-box-body p-4">
                              <div className="blog-box-top-content mb-3">
                                <ul className="m-0 p-0 d-flex">
                                  <li className="small">
                                    By{" "}
                                    <a
                                      href="#"
                                      className="text-decoration-underline black"
                                    >
                                      Lisa Gives
                                    </a>
                                  </li>
                                  <li className="mx-6 position-relative small">
                                    Athelic
                                  </li>
                                </ul>
                              </div>
                              <h3 className="mb-4">
                                <a href="blog-detail.html" className="black">
                                  Pedal Power: The Quest for the Champion's
                                  Jersey
                                </a>
                              </h3>
                              <div className="blog-box-bottom-content d-flex justify-content-between">
                                <a
                                  href="blog-detail.html"
                                  className="btn-blue btn-red rounded px-3 text-decoration-none"
                                >
                                  View Post
                                </a>
                                <p className="mb-0 small">
                                  <i
                                    className="fa fa-book"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  5 Min read
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="blog-box-bottom box-shadow rounded overflow-hidden box-shadow">
                            <div className="blog-image">
                              <a href="#">
                                <img
                                  src="images/slider-blog/slider2.jpg"
                                  alt="blog-image"
                                  className="w-100"
                                />
                              </a>
                            </div>
                            <div className="blog-box-body p-4">
                              <div className="blog-box-top-content mb-3">
                                <ul className="m-0 p-0 d-flex">
                                  <li className="small">
                                    By{" "}
                                    <a
                                      href="#"
                                      className="text-decoration-underline black"
                                    >
                                      Charles White
                                    </a>
                                  </li>
                                  <li className="mx-6 position-relative small">
                                    Dance
                                  </li>
                                </ul>
                              </div>
                              <h3 className="mb-4">
                                <a href="blog-detail.html" className="black">
                                  Rhythm Rebels: Boundaries on the Dance Floor
                                </a>
                              </h3>
                              <div className="blog-box-bottom-content d-flex justify-content-between">
                                <a
                                  href="blog-detail.html"
                                  className="btn-blue btn-red rounded px-3 text-decoration-none"
                                >
                                  View Post
                                </a>
                                <p className="mb-0 small">
                                  <i
                                    className="fa fa-book"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  5 Min read
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog Section Ends --> */}
    </>
  );
};

export default FlightHome;
