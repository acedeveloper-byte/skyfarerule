import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const KnowAbout = () => {
  return (
    <div>

<section className="section adavantages-sec bg-light-200">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div>
                        <div className="section-right-img-two wow fadeInUp" data-wow-delay="1.5">
                            <img src="/images/about/about-us.png" alt="Img" />
                            <div className="card review-rate-top border-0 mb-0">
                                <div className="card-body d-flex align-items-center">
                                    <div className="avatar-list-stacked avatar-group-md me-2">
                                        <span className="avatar avatar-rounded">
											<img className="border border-white" src="/img/users/user-01.jpg" alt="img" />
										</span>
                                        <span className="avatar avatar-rounded">
											<img className="border border-white" src="/img/users/user-04.jpg" alt="img" />
										</span>
                                        <span className="avatar avatar-rounded">
											<img className="border border-white" src="/img/users/user-06.jpg" alt="img" />
										</span>
                                        <span className="avatar avatar-rounded">
											<img className="border border-white" src="/img/users/user-07.jpg" alt="img" />
										</span>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center fs-12">
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <p className="fs-14 text-gray-9">5.0</p>
                                        </div>
                                        <p className="fs-14">2K+ Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div>
                        <div className="section-header-six mb-4 wow fadeInUp" data-wow-delay="1.5">
                            <span className="badge badge-soft-primary rounded-pill mb-1">Get to know about Us</span>
                            <h2 className="mb-2">Provide high-quality Accommodations & service make journeys seamless & enjoyable.</h2>
                            <p>We offer a diverse range of Tours, from compact cars ideal for city driving to spacious SUVs for family trips and luxurious models for special events.</p>
                        </div>
                        <div className="row g-2 mb-4">
                            <div className="col-md-6">
                                <span className="d-block mb-2">
									<i className="isax isax-tick-circle5 text-teal fs-24"></i>
								</span>
                                <h6 className="mb-1">Convenient Locations</h6>
                                <p>Multiple pick-up and drop-off locations to suit your travel plans.</p>
                            </div>
                            <div className="col-md-6">
                                <span className="d-block mb-2">
									<i className="isax isax-tick-circle5 text-orange fs-24"></i>
								</span>
                                <h6 className="mb-1">Customer-Centric Service</h6>
                                <p>Our team is always ready to assist you with any inquiries or needs.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <a href="/about-us" className="btn btn-dark me-3">Get Started<i className="isax isax-arrow-right-3 ms-2"></i></a>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4 d-flex">
                                <div className="counter-item card shadow-none flex-fill mb-0">
                                    <div className="card-body">
                                        <h3 className="display-6 text-primary mb-2"><span className="counter text-dark">57</span>+</h3>
                                        <p>Destinations Worldwide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="counter-item card shadow-none flex-fill mb-0">
                                    <div className="card-body">
                                        <h3 className="display-6 text-primary mb-2"><span className="counter text-dark">7098</span>+</h3>
                                        <p>Booking Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="counter-item card shadow-none flex-fill mb-0">
                                    <div className="card-body">
                                        <h3 className="display-6 text-primary mb-2"><span className="counter text-dark">67</span>+</h3>
                                        <p>Client Globally</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default KnowAbout
