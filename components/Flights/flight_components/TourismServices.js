import React from 'react'

const TourismServices = () => {
  return (
    <>
    <section className="section bg-light-200 faq-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="tourism-text-info">
                        <div className="text-header">
                            <h2>Trusted Solution Of Your <span className="text-primary"> <img src="/img/tours/tour-img.jpg" alt="Img" /> Tourism</span> Services</h2>
                        </div>
                        <div className="card border-secondary shadow-none bg-secondary-transparent">
                            <div className="card-body d-flex align-items-center">
                                <span className="avatar bg-secondary rounded-circle flex-shrink-0">
									<i className="isax isax-lock-1 text-gray-9 fs-20"></i>
								</span>
                                <div className="ms-3">
                                    <h5 className="mb-1">VIP Packages</h5>
                                    <p>Include premium seating, meet-and-greet experiences, backstage tours.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card border-purple shadow-none bg-purple-transparent">
                            <div className="card-body d-flex align-items-center">
                                <span className="avatar bg-purple rounded-circle flex-shrink-0">
									<i className="isax isax-receipt-add fs-20"></i>
								</span>
                                <div className="ms-3">
                                    <h5 className="mb-1">Travel Packages</h5>
                                    <p>Bundles that include concert tickets, accommodations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card border-teal shadow-none bg-teal-transparent">
                            <div className="card-body d-flex align-items-center">
                                <span className="avatar bg-teal rounded-circle flex-shrink-0">
									<i className="isax isax-location-tick fs-20"></i>
								</span>
                                <div className="ms-3">
                                    <h5 className="mb-1">Best Price Guarantee</h5>
                                    <p>Such as private rehearsals, soundcheck access.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-cards-six">
                        <div className="section-header-six mb-4">
                            <span className="badge badge-soft-primary rounded-pill mb-1">Most Popular Providers</span>
                            <h2>Try Relaxing Accomodations.</h2>
                        </div>
                        <div className="accordion accordion-flush" id="accordionFaq">
                            <div className="accordion-item show wow fadeInUp" data-wow-delay="0.2s">
                                <h2 className="accordion-header">
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseOne" aria-expanded="false" aria-controls="faq-collapseOne">
										What types of tours do you offer?
									</button>
								</h2>
                                <div id="faq-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq">
                                    <div className="accordion-body">
                                        <p className="mb-0">We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries.</p>
                                        <p>Popular destinations include Europe, Africa (e.g., Morocco), </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                <h2 className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapsetwo" aria-expanded="false" aria-controls="faq-collapsetwo">
										Are the tours customizable?
								</button>
								</h2>
                                <div id="faq-collapsetwo" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                    <div className="accordion-body">
                                        <p>We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                <h2 className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapsthree" aria-expanded="false" aria-controls="faq-collapsthree">
										What safety measures do you follow?
									</button>
								</h2>
                                <div id="faq-collapsthree" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                    <div className="accordion-body">
                                        <p>We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                <h2 className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapsefour" aria-expanded="false" aria-controls="faq-collapsefour">
										How far in advance should I book?
									</button>
								</h2>
                                <div id="faq-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                    <div className="accordion-body">
                                        <p>We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp" data-wow-delay="1.0s">
                                <h2 className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapsefive" aria-expanded="false" aria-controls="faq-collapsefive">
										What is your cancellation policy?
									</button>
								</h2>
                                <div id="faq-collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                    <div className="accordion-body">
                                        <p>We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default TourismServices
