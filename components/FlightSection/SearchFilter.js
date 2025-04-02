import React from 'react'

const SearchFilter = () => {
  return (
    <div className="container">
      <div className="row">

               
                <div className="col-xl-3 col-lg-3 theiaStickySidebar">
                    <div className="card filter-sidebar mb-4 mb-lg-0">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5>Filters</h5>
                            <a href="" className="fs-14 link-primary">Reset</a>
                        </div>
                        <div className="card-body p-0">
                            <form action="https://dreamstour.dreamstechnologies.com/search">
                                <div className="p-3 border-bottom">
                                    <label className="form-label fs-16">Search by Airline Names</label>
                                    <div className="input-icon">
                                        <span className="input-icon-addon">
											<i className="isax isax-search-normal"></i>
										</span>
                                        <input type="text" className="form-control" placeholder="Search by Airline Names" />
                                    </div>
                                </div>
                                <div className="accordion accordion-list">
                                    <div className="accordion-item border-bottom p-3">
                                        <div className="accordion-header">
                                            <div className="accordion-button p-0" data-bs-toggle="collapse" data-bs-target="#accordion-populars" aria-expanded="true" aria-controls="accordion-populars" role="button">
                                                <i className="isax isax-ranking me-2 text-primary"></i>Popular
                                            </div>
                                        </div>
                                        <div id="accordion-populars" className="accordion-collapse collapse show">
                                            <div className="accordion-body pt-2">
                                                <div className="form-checkbox form-check form-check-inline d-inline-flex align-items-center mt-2 me-2">
                                                    <input className="form-check-input ms-0 mt-0" name="popular1" type="checkbox" id="popular1"  checked />
                                                    <label className="form-check-label ms-2" for="popular1">
                                                        Breakfast Included
                                                    </label>
                                                </div>
                                                <div className="form-checkbox form-check form-check-inline d-inline-flex align-items-center mt-2 me-2">
                                                    <input className="form-check-input ms-0 mt-0" name="popular2" type="checkbox" id="popular2" />
                                                    <label className="form-check-label ms-2" for="popular2">
                                                        Budget
                                                    </label>
                                                </div>
                                                <div className="form-checkbox form-check form-check-inline d-inline-flex align-items-center mt-2 me-2">
                                                    <input className="form-check-input ms-0 mt-0" name="popular3" type="checkbox" id="popular3" />
                                                    <label className="form-check-label ms-2" for="popular3">
                                                        4 Star Hotels
                                                    </label>
                                                </div>
                                                <div className="form-checkbox form-check form-check-inline d-inline-flex align-items-center mt-2 me-2">
                                                    <input className="form-check-input ms-0 mt-0" name="popular4" type="checkbox" id="popular4" />
                                                    <label className="form-check-label ms-2" for="popular4">
                                                        5 Star Hotels
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom p-3">
                                        <div className="accordion-header">
                                            <div className="accordion-button p-0" data-bs-toggle="collapse" data-bs-target="#accordion-popular" aria-expanded="true" aria-controls="accordion-popular" role="button">
                                                <i className="isax isax-coin me-2 text-primary"></i>Price Per Night
                                            </div>
                                        </div>
                                        <div id="accordion-popular" className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                <div className="filter-range">
                                                    <input type="text" id="range_03" />
                                                </div>
                                                <div className="filter-range-amount">
                                                    <p className="fs-14">Range : <span className="text-gray-9 fw-medium">$200 - $5695</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom p-3">
                                        <div className="accordion-header">
                                            <div className="accordion-button p-0" data-bs-toggle="collapse" data-bs-target="#accordion-flight" aria-expanded="true" aria-controls="accordion-flight" role="button">
                                                <i className="isax isax-airplane4 me-2 text-primary"></i>Airline Names
                                            </div>
                                        </div>
                                        <div id="accordion-flight" className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                <div className="more-content">
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="flight1" type="checkbox" id="flight1" />
                                                        <label className="form-check-label ms-2" for="flight1">
                                                            American Airlines
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="flight2" type="checkbox" id="flight2" />
                                                        <label className="form-check-label ms-2" for="flight2">
                                                            Delta Air Lines
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="flight3" type="checkbox" id="flight3" />
                                                        <label className="form-check-label ms-2" for="flight3">
                                                            Emirates
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="flight4" type="checkbox" id="flight4" />
                                                        <label className="form-check-label ms-2" for="flight4">
                                                            Air France
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="flight5" type="checkbox" id="flight5" />
                                                        <label className="form-check-label ms-2" for="flight5">
                                                            Japan Airlines
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="flight6" type="checkbox" id="flight6" />
                                                        <label className="form-check-label ms-2" for="flight6">
                                                            Qatar Airways
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="flight7" type="checkbox" id="flight7" />
                                                        <label className="form-check-label ms-2" for="flight7">
                                                            Air Canada
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="flight8" type="checkbox" id="flight8" />
                                                        <label className="form-check-label ms-2" for="flight8">
                                                            United Airlines
                                                        </label>
                                                    </div>
                                                </div>
                                                <a href="" className="more-view fw-medium fs-14">Show More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom p-3">
                                        <div className="accordion-header">
                                            <div className="accordion-button p-0" data-bs-toggle="collapse" data-bs-target="#accordion-amenity" aria-expanded="true" aria-controls="accordion-amenity" role="button">
                                                <i className="isax isax-candle me-2 text-primary"></i>Amenities
                                            </div>
                                        </div>
                                        <div id="accordion-amenity" className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                <div className="more-content">
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="amenity1" type="checkbox" id="amenity1" />
                                                        <label className="form-check-label ms-2" for="amenity1">
                                                            Free Wifi
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="amenity2" type="checkbox" id="amenity2" />
                                                        <label className="form-check-label ms-2" for="amenity2">
                                                            Charging Ports
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="amenity3" type="checkbox" id="amenity3" />
                                                        <label className="form-check-label ms-2" for="amenity3">
                                                            Entertainment
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="amenity4" type="checkbox" id="amenity4" />
                                                        <label className="form-check-label ms-2" for="amenity4">
                                                            Blankets & Pillows
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="amenity5" type="checkbox" id="amenity5" />
                                                        <label className="form-check-label ms-2" for="amenity5">
                                                            Adjustable headrests
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="amenity6" type="checkbox" id="amenity6" />
                                                        <label className="form-check-label ms-2" for="amenity6">
                                                            Complimentary meals
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="amenity7" type="checkbox" id="amenity7" />
                                                        <label className="form-check-label ms-2" for="amenity7">
                                                            Privacy dividers
                                                        </label>
                                                    </div>
                                                </div>
                                                <a href="" className="more-view fw-medium fs-14">Show More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom p-3">
                                        <div className="accordion-header">
                                            <div className="accordion-button p-0" data-bs-toggle="collapse" data-bs-target="#accordion-cabin" aria-expanded="true" aria-controls="accordion-cabin" role="button">
                                                <i className="isax isax-home-2 me-2 text-primary"></i>Cabin className
                                            </div>
                                        </div>
                                        <div id="accordion-cabin" className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                <div className="more-content">
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="cabin1" type="checkbox" id="cabin1" />
                                                        <label className="form-check-label ms-2" for="cabin1">
                                                            Economy
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="cabin2" type="checkbox" id="cabin2" />
                                                        <label className="form-check-label ms-2" for="cabin2">
                                                            Premium Economy
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="cabin3" type="checkbox" id="cabin3" />
                                                        <label className="form-check-label ms-2" for="cabin3">
                                                            Business className
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="cabin4" type="checkbox" id="cabin4" />
                                                        <label className="form-check-label ms-2" for="cabin4">
                                                            First className
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="cabin5" type="checkbox" id="cabin5" />
                                                        <label className="form-check-label ms-2" for="cabin5">
                                                            Basic Economy
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                        <input className="form-check-input ms-0 mt-0" name="cabin6" type="checkbox" id="cabin6" />
                                                        <label className="form-check-label ms-2" for="cabin6">
                                                            Suite className
                                                        </label>
                                                    </div>
                                                </div>
                                                <a href="" className="more-view fw-medium fs-14">Show More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom p-3">
                                        <div className="accordion-header">
                                            <div className="accordion-button p-0" data-bs-toggle="collapse" data-bs-target="#accordion-meal" aria-expanded="true" aria-controls="accordion-meal" role="button">
                                                <i className="isax isax-reserve me-2 text-primary"></i>Meal plans available
                                            </div>
                                        </div>
                                        <div id="accordion-meal" className="accordion-collapse collapse show">
                                            <div className="accordion-body pt-2">
                                                <div className="form-checkbox form-check form-check-inline d-inline-flex align-items-center mt-2 me-2">
                                                    <input className="form-check-input ms-0 mt-0" name="meals1" type="checkbox" id="meals1" />
                                                    <label className="form-check-label ms-2" for="meals1">
                                                        All inclusive
                                                    </label>
                                                </div>
                                                <div className="form-checkbox form-check form-check-inline d-inline-flex align-items-center mt-2 me-2">
                                                    <input className="form-check-input ms-0 mt-0" name="meals2" type="checkbox" id="meals2" />
                                                    <label className="form-check-label ms-2" for="meals2">
                                                        Breakfast
                                                    </label>
                                                </div>
                                                <div className="form-checkbox form-check form-check-inline d-inline-flex align-items-center mt-2 me-2">
                                                    <input className="form-check-input ms-0 mt-0" name="meals3" type="checkbox" id="meals3" />
                                                    <label className="form-check-label ms-2" for="meals3">
                                                        Lunch
                                                    </label>
                                                </div>
                                                <div className="form-checkbox form-check form-check-inline d-inline-flex align-items-center mt-2 me-2">
                                                    <input className="form-check-input ms-0 mt-0" name="meals4" type="checkbox" id="meals4" />
                                                    <label className="form-check-label ms-2" for="meals4">
                                                        Dinner
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom p-3">
                                        <div className="accordion-header">
                                            <div className="accordion-button p-0" data-bs-toggle="collapse" data-bs-target="#accordion-brand" aria-expanded="true" aria-controls="accordion-brand" role="button">
                                                <i className="isax isax-discount-shape me-2 text-primary"></i>Reviews
                                            </div>
                                        </div>
                                        <div id="accordion-brand" className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                    <input className="form-check-input ms-0 mt-0" name="review1" type="checkbox" id="review1" />
                                                    <label className="form-check-label ms-2" for="review1">
                                                        <span className="rating d-flex align-items-center">
                                                            <i className="fas fa-star filled text-primary me-1"></i>
                                                            <i className="fas fa-star filled text-primary me-1"></i>
                                                            <i className="fas fa-star filled text-primary me-1"></i>
                                                            <i className="fas fa-star filled text-primary me-1"></i>
                                                            <i className="fas fa-star filled text-primary"></i>
                                                            <span className="ms-2">5 Star</span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                    <input className="form-check-input ms-0 mt-0" name="review2" type="checkbox" id="review2" />
                                                    <label className="form-check-label ms-2" for="review2">
                                                        <span className="rating d-flex align-items-center">
                                                            <i className="fas fa-star filled text-primary me-1"></i>
                                                            <i className="fas fa-star filled text-primary me-1"></i>
                                                            <i className="fas fa-star filled text-primary me-1"></i>
                                                            <i className="fas fa-star filled text-primary"></i>
                                                            <span className="ms-2">4 Star</span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                    <input className="form-check-input ms-0 mt-0" name="review3" type="checkbox" id="review3" />
                                                    <label className="form-check-label ms-2" for="review3">
                                                        <span className="rating d-flex align-items-center">
                                                            <i className="fas fa-star filled text-primary me-1"></i>
                                                            <i className="fas fa-star filled text-primary me-1"></i>
                                                            <i className="fas fa-star filled text-primary"></i>
                                                            <span className="ms-2">3 Star</span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="form-check d-flex align-items-center ps-0 mb-2">
                                                    <input className="form-check-input ms-0 mt-0" name="review4" type="checkbox" id="review4" />
                                                    <label className="form-check-label ms-2" for="review4">
                                                        <span className="rating d-flex align-items-center">
                                                            <i className="fas fa-star filled text-primary me-1"></i>
                                                            <i className="fas fa-star filled text-primary"></i>
                                                            <span className="ms-2">2 Star</span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="form-check d-flex align-items-center ps-0 mb-0">
                                                    <input className="form-check-input ms-0 mt-0" name="review5" type="checkbox" id="review5" />
                                                    <label className="form-check-label ms-2" for="review5">
                                                        <span className="rating d-flex align-items-center">
                                                            <i className="fas fa-star filled text-primary"></i>
                                                            <span className="ms-2">1 Star</span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
             

                <div className="col-xl-9 col-lg-9">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <h6 className="mb-3">1920 Flights Found on Your Search</h6>
                        <div className="d-flex align-items-center flex-wrap">
                            <div className="list-item d-flex align-items-center mb-3">
                                <a href="flight-grid" className="list-icon me-2"><i className="isax isax-grid-1"></i></a>
                                <a href="flight-list" className="list-icon active me-2"><i className="isax isax-firstline"></i></a>
                            </div>
                            <div className="dropdown mb-3">
                                <a href="" className="dropdown-toggle py-2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="fw-medium text-gray-9">Sort By : </span>Recommended
                                </a>
                                <div className="dropdown-menu dropdown-sm">
                                    <form action="https://dreamstour.dreamstechnologies.com/flight-grid">
                                        <h6 className="fw-medium fs-16 mb-3">Sort By</h6>
                                        <div className="form-check d-flex align-items-center ps-0 mb-2">
                                            <input className="form-check-input ms-0 mt-0" name="recommend" type="checkbox" id="recommend1" checked />
                                            <label className="form-check-label ms-2" for="recommend1">Recommended</label>
                                        </div>
                                        <div className="form-check d-flex align-items-center ps-0 mb-2">
                                            <input className="form-check-input ms-0 mt-0" name="recommend" type="checkbox" id="recommend2" />
                                            <label className="form-check-label ms-2" for="recommend2">Price: low to high</label>
                                        </div>
                                        <div className="form-check d-flex align-items-center ps-0 mb-2">
                                            <input className="form-check-input ms-0 mt-0" name="recommend" type="checkbox" id="recommend3" />
                                            <label className="form-check-label ms-2" for="recommend3">Price: high to low</label>
                                        </div>
                                        <div className="form-check d-flex align-items-center ps-0 mb-2">
                                            <input className="form-check-input ms-0 mt-0" name="recommend" type="checkbox" id="recommend4" />
                                            <label className="form-check-label ms-2" for="recommend4">Newest</label>
                                        </div>
                                        <div className="form-check d-flex align-items-center ps-0 mb-2">
                                            <input className="form-check-input ms-0 mt-0" name="recommend" type="checkbox" id="recommend5" />
                                            <label className="form-check-label ms-2" for="recommend5">Ratings</label>
                                        </div>
                                        <div className="form-check d-flex align-items-center ps-0 mb-0">
                                            <input className="form-check-input ms-0 mt-0" name="recommend" type="checkbox" id="recommend6" />
                                            <label className="form-check-label ms-2" for="recommend6">Reviews</label>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end border-top pt-3 mt-3">
                                            <a href="" className="btn btn-light btn-sm me-2">Reset</a>
                                            <button type="submit" className="btn btn-primary btn-sm">Apply</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-info br-10 p-3 pb-2 mb-4">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <p className="fs-14 fw-medium mb-2 d-inline-flex align-items-center"><i className="isax isax-info-circle me-2"></i>Save an average of 15% on thousands of flights when you're signed in</p>
                            <a href="login" className="btn btn-white btn-sm mb-2">Sign In</a>
                        </div>
                    </div>
                    <div className="hotel-list">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                              
                                <div className="place-item mb-4">
                                    <div className="place-img">
                                        <div className="img-slider image-slide owl-carousel nav-center">
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-09.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-05.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-07.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-02.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="fav-item">
                                            <div className="d-flex align-items-center">
                                                <a href="" className="fav-icon me-2 selected">
                                                    <i className="isax isax-heart5"></i>
                                                </a>
                                                <span className="badge bg-indigo">Cheapest</span>
                                            </div>
                                            <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium rounded">5.0</span>
                                        </div>
                                    </div>
                                    <div className="place-content">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-3">
                                            <div>
                                                <h5 className="text-truncate mb-1"><a href="flight-details">Antonov An-32</a></h5>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-sm me-2">
                                                        <img src="/img/icons/airindia.svg" className="rounded-circle" alt="icon" />
                                                    </span>
                                                    <p className="fs-14 mb-0 me-2">Air India</p>
                                                    <p className="fs-14 mb-0"><i className="ti ti-point-filled text-primary me-2"></i>1-stop at Texas</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="badge bg-outline-success fs-10 fw-medium  me-2">20 Seats Left</span>
                                                <a href="" className="avatar avatar-sm">
                                                    <img src="/img/users/user-08.jpg" className="rounded-circle" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <p className=" fs-14 mb-3">Experience top-notch service, in-flight amenities, and smooth takeoffs for a stress-free journey.</p>
                                        <div className="flight-loc d-flex align-items-center justify-content-between mb-3">
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-45 me-2"></i>Newyork</span>
                                            <a href="" className="arrow-icon flex-shrink-0 mx-2"><i className="isax isax-arrow-2"></i></a>
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-135 me-2"></i>Sydney</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top flex-wrap gap-2 pt-3">
                                            <div className="date-info p-2">
                                                <p className="d-flex align-items-center"><i className="isax isax-calendar-2 me-2"></i>Aug 01, 2024 - Aug 03, 2024</p>
                                            </div>
                                            <h6 className="text-primary"><span className="fs-14 fw-normal text-default">From </span>$500</h6>

                                        </div>
                                    </div>
                                </div>
                               
                                <div className="place-item mb-4">
                                    <div className="place-img">
                                        <div className="img-slider image-slide owl-carousel nav-center">
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-08.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-06.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-03.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-01.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="fav-item">
                                            <div className="d-flex align-items-center">
                                                <a href="" className="fav-icon me-2 ">
                                                    <i className="isax isax-heart5"></i>
                                                </a>
                                                <span className="badge bg-indigo">Cheapest</span>
                                            </div>
                                            <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium rounded">4.5</span>
                                        </div>
                                    </div>
                                    <div className="place-content">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-3">
                                            <div>
                                                <h5 className="text-truncate mb-1"><a href="flight-details">SkyBound 102</a></h5>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-sm me-2">
                                                    <img src="/img/icons/airindia.svg" className="rounded-circle" alt="icon" />
                                                </span>
                                                    <p className="fs-14 mb-0 me-2">Indigo</p>
                                                    <p className="fs-14 mb-0"><i className="ti ti-point-filled text-primary me-2"></i>1-stop at Dubai</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="badge bg-outline-success fs-10 fw-medium  me-2">18 Seats Left</span>
                                                <a href="" className="avatar avatar-sm">
                                                    <img src="/img/users/user-09.jpg" className="rounded-circle" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <p className=" fs-14 mb-3">Enjoy a comfortable and seamless journey with top-notch service on every flight.</p>
                                        <div className="flight-loc d-flex align-items-center justify-content-between mb-3">
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-45 me-2"></i>London</span>
                                            <a href="" className="arrow-icon flex-shrink-0 mx-2"><i className="isax isax-arrow-2"></i></a>
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-135 me-2"></i>London</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top flex-wrap gap-2 pt-3">
                                            <div className="date-info p-2">
                                                <p className="d-flex align-items-center"><i className="isax isax-calendar-2 me-2"></i>Aug 13, 2024 - Aug 15, 2024</p>
                                            </div>
                                            <h6 className="text-primary"><span className="fs-14 fw-normal text-default">From </span>$600</h6>

                                        </div>
                                    </div>
                                </div>
                              
                                <div className="place-item mb-4">
                                    <div className="place-img">
                                        <div className="img-slider image-slide owl-carousel nav-center">
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-06.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-01.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-09.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-05.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="fav-item">
                                            <div className="d-flex align-items-center">
                                                <a href="" className="fav-icon me-2 ">
                                                    <i className="isax isax-heart5"></i>
                                                </a>
                                                <span className="badge bg-indigo">Cheapest</span>
                                            </div>
                                            <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium rounded">4.9</span>
                                        </div>
                                    </div>
                                    <div className="place-content">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-3">
                                            <div>
                                                <h5 className="text-truncate mb-1"><a href="flight-details">Nimbus 345</a></h5>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-sm me-2">
                                                    <img src="/img/icons/airindia.svg" className="rounded-circle" alt="icon" />
                                                </span>
                                                    <p className="fs-14 mb-0 me-2">Indigo</p>
                                                    <p className="fs-14 mb-0"><i className="ti ti-point-filled text-primary me-2"></i>1-stop at Dubai</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="badge bg-outline-success fs-10 fw-medium  me-2">27 Seats Left</span>
                                                <a href="" className="avatar avatar-sm">
                                                    <img src="/img/users/user-10.jpg" className="rounded-circle" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <p className=" fs-14 mb-3">Enjoy a hassle-free journey with reliable service, spacious seating, and friendly staff.</p>
                                        <div className="flight-loc d-flex align-items-center justify-content-between mb-3">
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-45 me-2"></i>Paris</span>
                                            <a href="" className="arrow-icon flex-shrink-0 mx-2"><i className="isax isax-arrow-2"></i></a>
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-135 me-2"></i>Cape Town</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top flex-wrap gap-2 pt-3">
                                            <div className="date-info p-2">
                                                <p className="d-flex align-items-center"><i className="isax isax-calendar-2 me-2"></i>Aug 26, 2024 - Aug 27, 2024</p>
                                            </div>
                                            <h6 className="text-primary"><span className="fs-14 fw-normal text-default">From </span>$300</h6>

                                        </div>
                                    </div>
                                </div>
                             
                                <div className="place-item mb-4">
                                    <div className="place-img">
                                        <div className="img-slider image-slide owl-carousel nav-center">
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-01.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-02.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-03.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-04.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="fav-item">
                                            <div className="d-flex align-items-center">
                                                <a href="" className="fav-icon me-2 ">
                                                    <i className="isax isax-heart5"></i>
                                                </a>
                                                <span className="badge bg-indigo">Cheapest</span>
                                            </div>
                                            <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium rounded">4.3</span>
                                        </div>
                                    </div>
                                    <div className="place-content">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-3">
                                            <div>
                                                <h5 className="text-truncate mb-1"><a href="flight-details">AstraFlight 215</a></h5>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-sm me-2">
                                                    <img src="/img/icons/airindia.svg" className="rounded-circle" alt="icon" />
                                                </span>
                                                    <p className="fs-14 mb-0 me-2">Indigo</p>
                                                    <p className="fs-14 mb-0"><i className="ti ti-point-filled text-primary me-2"></i>1-stop at Frankfurt</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="badge bg-outline-success fs-10 fw-medium  me-2">27 Seats Left</span>
                                                <a href="" className="avatar avatar-sm">
                                                    <img src="/img/users/user-11.jpg" className="rounded-circle" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <p className=" fs-14 mb-3">Travel smart with affordable fares, seamless connections, and exceptional in-flight comfort.</p>
                                        <div className="flight-loc d-flex align-items-center justify-content-between mb-3">
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-45 me-2"></i>Toronto</span>
                                            <a href="" className="arrow-icon flex-shrink-0 mx-2"><i className="isax isax-arrow-2"></i></a>
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-135 me-2"></i>Bangkok</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top flex-wrap gap-2 pt-3">
                                            <div className="date-info p-2">
                                                <p className="d-flex align-items-center"><i className="isax isax-calendar-2 me-2"></i>Sep 04, 2024 - Sep 07, 2024</p>
                                            </div>
                                            <h6 className="text-primary"><span className="fs-14 fw-normal text-default">From </span>$300</h6>

                                        </div>
                                    </div>
                                </div>
                              
                                <div className="place-item mb-4">
                                    <div className="place-img">
                                        <div className="img-slider image-slide owl-carousel nav-center">
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-02.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-05.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-07.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-08.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="fav-item">
                                            <div className="d-flex align-items-center">
                                                <a href="" className="fav-icon me-2 ">
                                                    <i className="isax isax-heart5"></i>
                                                </a>
                                                <span className="badge bg-indigo">Cheapest</span>
                                            </div>
                                            <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium rounded">4.1</span>
                                        </div>
                                    </div>
                                    <div className="place-content">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-3">
                                            <div>
                                                <h5 className="text-truncate mb-1"><a href="flight-details">Cloudrider 789</a></h5>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-sm me-2">
                                                    <img src="/img/icons/airindia.svg" className="rounded-circle" alt="icon" />
                                                </span>
                                                    <p className="fs-14 mb-0 me-2">Air India</p>
                                                    <p className="fs-14 mb-0"><i className="ti ti-point-filled text-primary me-2"></i>1-stop at Dallas</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="badge bg-outline-success fs-10 fw-medium  me-2">14 Seats Left</span>
                                                <a href="" className="avatar avatar-sm">
                                                    <img src="/img/users/user-12.jpg" className="rounded-circle" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <p className=" fs-14 mb-3">Experience top-notch service, in-flight amenities, and smooth takeoffs for a stress-free journey.</p>
                                        <div className="flight-loc d-flex align-items-center justify-content-between mb-3">
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-45 me-2"></i>Chicago</span>
                                            <a href="" className="arrow-icon flex-shrink-0 mx-2"><i className="isax isax-arrow-2"></i></a>
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-135 me-2"></i>Melbourne</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top flex-wrap gap-2 pt-3">
                                            <div className="date-info p-2">
                                                <p className="d-flex align-items-center"><i className="isax isax-calendar-2 me-2"></i>Sep 11, 2024 - Sep 13, 2024</p>
                                            </div>
                                            <h6 className="text-primary"><span className="fs-14 fw-normal text-default">From </span>$550</h6>

                                        </div>
                                    </div>
                                </div>
                              
                                <div className="place-item mb-4">
                                    <div className="place-img ">
                                        <div className="img-slider image-slide owl-carousel nav-center">
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-03.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-06.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-08.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-01.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="fav-item">
                                            <div className="d-flex align-items-center">
                                                <a href="" className="fav-icon me-2 ">
                                                    <i className="isax isax-heart5"></i>
                                                </a>
                                                <span className="badge bg-indigo">Cheapest</span>
                                            </div>
                                            <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium rounded">4.6</span>
                                        </div>
                                    </div>
                                    <div className="place-content">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-3">
                                            <div>
                                                <h5 className="text-truncate mb-1"><a href="flight-details">Aether Express 901</a></h5>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-sm me-2">
                                                    <img src="/img/icons/airindia.svg" className="rounded-circle" alt="icon" />
                                                </span>
                                                    <p className="fs-14 mb-0 me-2">Indigo</p>
                                                    <p className="fs-14 mb-0"><i className="ti ti-point-filled text-primary me-2"></i>1-stop at Seoul</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="badge bg-outline-success fs-10 fw-medium  me-2">12 Seats Left</span>
                                                <a href="" className="avatar avatar-sm">
                                                    <img src="/img/users/user-13.jpg" className="rounded-circle" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <p className=" fs-14 mb-3">Fly with confidence, knowing our comfortable cabins and efficient service make every trip a breeze.</p>
                                        <div className="flight-loc d-flex align-items-center justify-content-between mb-3">
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-45 me-2"></i>Miami</span>
                                            <a href="" className="arrow-icon flex-shrink-0 mx-2"><i className="isax isax-arrow-2"></i></a>
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-135 me-2"></i>Tokyo</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top flex-wrap gap-2 pt-3">
                                            <div className="date-info p-2">
                                                <p className="d-flex align-items-center"><i className="isax isax-calendar-2 me-2"></i>Sep 22, 2024 - Sep 24, 2024</p>
                                            </div>
                                            <h6 className="text-primary"><span className="fs-14 fw-normal text-default">From </span>$450</h6>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="place-item mb-4">
                                    <div className="place-img">
                                        <div className="img-slider image-slide owl-carousel nav-center">
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-07.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-04.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-09.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div className="slide-images">
                                                <a href="flight-details">
                                                    <img src="/img/flight/flight-02.jpg" className="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="fav-item">
                                            <div className="d-flex align-items-center">
                                                <a href="" className="fav-icon me-2 ">
                                                    <i className="isax isax-heart5"></i>
                                                </a>
                                                <span className="badge bg-indigo">Cheapest</span>
                                            </div>
                                            <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium rounded">4.8</span>
                                        </div>
                                    </div>
                                    <div className="place-content">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-3">
                                            <div>
                                                <h5 className="text-truncate mb-1"><a href="flight-details">Voyager 658</a></h5>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-sm me-2">
                                                    <img src="/img/icons/airindia.svg" className="rounded-circle" alt="icon" />
                                                </span>
                                                    <p className="fs-14 mb-0 me-2">Air India</p>
                                                    <p className="fs-14 mb-0"><i className="ti ti-point-filled text-primary me-2"></i>1-stop at Sydney</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="badge bg-outline-success fs-10 fw-medium  me-2">21 Seats Left</span>
                                                <a href="" className="avatar avatar-sm">
                                                    <img src="/img/users/user-14.jpg" className="rounded-circle" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <p className=" fs-14 mb-3">Relax and enjoy your flight with on-time schedules, comfortable seats, and world-className service.</p>
                                        <div className="flight-loc d-flex align-items-center justify-content-between mb-3">
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-45 me-2"></i>Frankfurt</span>
                                            <a href="" className="arrow-icon flex-shrink-0 mx-2"><i className="isax isax-arrow-2"></i></a>
                                            <span className="loc-name d-inline-flex justify-content-center align-items-center w-100"><i className="isax isax-airplane rotate-135 me-2"></i>Auckland</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top flex-wrap gap-2 pt-3">
                                            <div className="date-info p-2">
                                                <p className="d-flex align-items-center"><i className="isax isax-calendar-2 me-2"></i>Oct 04, 2024 - Oct 07, 2024</p>
                                            </div>
                                            <h6 className="text-primary"><span className="fs-14 fw-normal text-default">From </span>$350</h6>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>

                    </div>

                  
                    <nav className="pagination-nav">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="" aria-label="Previous">
                                    <span aria-hidden="true"><i className="fa-solid fa-chevron-left"></i></span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="">1</a></li>
                            <li className="page-item"><a className="page-link" href="">2</a></li>
                            <li className="page-item"><a className="page-link" href="">3</a></li>
                            <li className="page-item active"><a className="page-link" href="">4</a></li>
                            <li className="page-item"><a className="page-link" href="">5</a></li>
                            <li className="page-item">
                                <a className="page-link" href="" aria-label="Next">
                                    <span aria-hidden="true"><i className="fa-solid fa-chevron-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                  

                </div>

            </div>
    </div>
  )
}

export default SearchFilter
