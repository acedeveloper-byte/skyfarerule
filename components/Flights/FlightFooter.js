import React from "react";

const FlightFooter = () => {
  return (
    <div>
      <footer>
        <div className="footer-upper">
          <div className="container">
            <div className="footer-links pt-9">
              <div className="row gx-0 gx-md-5 gy-5">
                <div className="col-lg-3">
                  <div className="footer-about footer-margin">
                    <div className="about-logo">
                      {/* <img src="images/Yatra-white.png" alt="Image" /> */}
                      <h2>SkyfareRule</h2>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                    <div className="about-location">
                      <ul>
                        <li className="mb-2">
                          <i
                            className="flaticon-maps-and-flags"
                            aria-hidden="true"
                          ></i>{" "}
                          Location
                        </li>
                        <li className="mb-2">
                          <i className="flaticon-phone-call"></i> (012)-345-6789
                        </li>
                        <li>
                          <i className="flaticon-mail"></i>{" "}
                          <a href="mailto:support@example.com">
                            support@example.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-social-links">
                      <ul>
                        <li className="social-icon me-2">
                          <a href="#">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="social-icon me-2">
                          <a href="#">
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="social-icon me-2">
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="social-icon me-2">
                          <a href="#">
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="social-icon">
                          <a href="#">
                            <i className="fa fa-google" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 d-flex justify-content-lg-center justify-content-start">
                  <div className="footer-links-list footer-margin">
                    <h3 className="mb-4">Browse Tour</h3>
                    <ul>
                      <li className="mb-2">
                        <a href="#">
                          Cyclades{" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#">
                          North Ionian{" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#">
                          Sporades{" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#">
                          View all Destinations{" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#">
                          View all Yatchs{" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          View all Cruises{" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 d-flex justify-content-lg-center justify-content-start">
                  <div className="footer-recent-post footer-margin">
                    <h3 className="mb-4">Recent Posts</h3>
                    <ul>
                      <li className="mb-4">
                        <div className="recent-post-item">
                          <div className="recent-post-content">
                            <h4>
                              <a href="#">
                                Ullamco est amet quis tullam cursus, metus.
                              </a>
                            </h4>
                            <p>June 17, 2024</p>
                          </div>
                        </div>
                      </li>
                      <li className="mb-4">
                        <div className="recent-post-item">
                          <div className="recent-post-content">
                            <h4>
                              <a href="#">Diving in Atlantic</a>
                            </h4>
                            <p>June 17, 2024</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="recent-post-item">
                          <div className="recent-post-content">
                            <h4>
                              <a href="#">Travellers History</a>
                            </h4>
                            <p>June 17, 2024</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4">
                  <div className="footer-links-list">
                    <div className="footer-instagram">
                      <h3 className="mb-4">Instagram</h3>
                      <ul>
                        {[...Array(9)].map((_, i) => (
                          <li className="mb-1" key={i}>
                            <img src={`images/insta${i + 1}.jpg`} alt="Image" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-content py-1">
                  <p>
                    2024 <i className="fa fa-copyright" aria-hidden="true"></i>{" "}
                    Yatra by{" "}
                    <a
                      href="https://www.cyclonethemes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cyclone Themes
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="payment-content py-1">
                  <ul>
                    <li>We Accept</li>
                    {[...Array(4)].map((_, i) => (
                      <li className="ms-2" key={i}>
                        <img
                          src={`images/payment${i + 1}.png`}
                          alt="Payment Option"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlightFooter;
