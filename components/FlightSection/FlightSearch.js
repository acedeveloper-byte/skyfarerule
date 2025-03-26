import React from 'react'

const FlightSearch = () => {
  return (
    <div className='container my-5'>

            <div className="card">
                <div className="card-body">
                    <div className="banner-form">
                        <form className="">
                            <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="form-check d-flex align-items-center me-3 mb-2">
                                        <input className="form-check-input mt-0" type="radio" name="Radio" id="oneway" value="oneway" checked />
                                        <label className="form-check-label fs-14 ms-2" for="oneway">
                                            Oneway
                                        </label>
                                    </div>
                                    <div className="form-check d-flex align-items-center me-3 mb-2">
                                        <input className="form-check-input mt-0" type="radio" name="Radio" id="roundtrip" value="roundtrip" />
                                        <label className="form-check-label fs-14 ms-2" for="roundtrip">
                                            Round Trip
                                        </label>
                                    </div>
                                    <div className="form-check d-flex align-items-center me-3 mb-2">
                                        <input className="form-check-input mt-0" type="radio" name="Radio" id="multiway" value="multiway" />
                                        <label className="form-check-label fs-14 ms-2" for="multiway">
                                            Multi Trip
                                        </label>
                                    </div>
                                </div>
                                <h6 className="fw-medium fs-16 mb-2">Millions of cheap flights. One simple search</h6>
                            </div>
                            <div className="normal-trip">
                                <div className="d-lg-flex">
                                    <div className="d-flex  form-info">
                                        <div className="form-item dropdown">
                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="menu">
                                                <label className="form-label fs-14 text-default mb-1">From</label>
                                                <input type="text" className="form-control" value="Newyork" />
                                                <p className="fs-12 mb-0">Ken International Airport</p>
                                            </div>
                                            <div className="dropdown-menu dropdown-md p-0">
                                                <div className="input-search p-3 border-bottom">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Search Location" />
                                                        <span className="input-group-text px-2 border-start-0"><i className="isax isax-search-normal"></i></span>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Newyork</h6>
                                                            <p>Ken International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Boston</h6>
                                                            <p>Boston Logan International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Northern Virginia</h6>
                                                            <p>Dulles International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Los Angeles</h6>
                                                            <p>Los Angeles International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Orlando</h6>
                                                            <p>Orlando International Airport</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="form-item dropdown ps-2 ps-sm-3">
                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="menu">
                                                <label className="form-label fs-14 text-default mb-1">To</label>
                                                <h5>Las Vegas</h5>
                                                <p className="fs-12 mb-0">Martini International Airport</p>
                                                <span className="way-icon badge badge-primary rounded-pill translate-middle">
                                                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                                </span>
                                            </div>
                                            <div className="dropdown-menu dropdown-md p-0">
                                                <div className="input-search p-3 border-bottom">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Search Location" />
                                                        <span className="input-group-text px-2 border-start-0"><i className="isax isax-search-normal"></i></span>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Newyork</h6>
                                                            <p>Ken International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Boston</h6>
                                                            <p>Boston Logan International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Northern Virginia</h6>
                                                            <p>Dulles International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Los Angeles</h6>
                                                            <p>Los Angeles International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Orlando</h6>
                                                            <p>Orlando International Airport</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="form-item">
                                            <label className="form-label fs-14 text-default mb-1">Departure</label>
                                            <input type="text" className="form-control datetimepicker" value="21-10-2024" />
                                            <p className="fs-12 mb-0">Monday</p>
                                        </div>
                                        <div className="form-item round-drip">
                                            <label className="form-label fs-14 text-default mb-1">Return</label>
                                            <input type="text" className="form-control datetimepicker" value="23-10-2024" />
                                            <p className="fs-12 mb-0">Wednesday</p>
                                        </div>
                                        <div className="form-item dropdown">
                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="menu">
                                                <label className="form-label fs-14 text-default mb-1">Travellers and cabin className</label>
                                                <h5>4 <span className="fw-normal fs-14">Persons</span></h5>
                                                <p className="fs-12 mb-0">1 Adult, Economy</p>
                                            </div>
                                            <div className="dropdown-menu dropdown-menu-end dropdown-xl">
                                                <h5 className="mb-3">Select Travelers &  className</h5>
                                                <div className="mb-3 border br-10 info-item pb-1">
                                                    <h6 className="fs-16 fw-medium mb-2">Travellers</h6>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label text-gray-9 mb-2">Adults <span className="text-default fw-normal">( 12+ Yrs )</span></label>
                                                                <div className="custom-increment">
                                                                    <div className="input-group">
                                                                        <span className="input-group-btn float-start">
                                                                            <button type="button" className="quantity-left-minus btn btn-light btn-number"  data-type="minus" data-field="">
                                                                              <span><i className="isax isax-minus"></i></span>
                                                                            </button>
                                                                        </span>
                                                                        <input type="text" name="quantity" className=" input-number" value="01" />
                                                                        <span className="input-group-btn float-end">
                                                                            <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
                                                                                <span><i className="isax isax-add"></i></span>
                                                                            </button>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label text-gray-9 mb-2">Childrens <span className="text-default fw-normal">( 2-12 Yrs )</span></label>
                                                                <div className="custom-increment">
                                                                    <div className="input-group">
                                                                        <span className="input-group-btn float-start">
                                                                            <button type="button" className="quantity-left-minus btn btn-light btn-number"  data-type="minus" data-field="">
                                                                                  <span><i className="isax isax-minus"></i></span>
                                                                            </button>
                                                                        </span>
                                                                        <input type="text" name="quantity" className=" input-number" value="01" />
                                                                        <span className="input-group-btn float-end">
                                                                            <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
                                                                                <span><i className="isax isax-add"></i></span>
                                                                            </button>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label text-gray-9 mb-2">Infants<span className="text-default fw-normal">( 0-12 Yrs )</span></label>
                                                                <div className="custom-increment">
                                                                    <div className="input-group">
                                                                        <span className="input-group-btn float-start">
                                                                            <button type="button" className="quantity-left-minus btn btn-light btn-number"  data-type="minus" data-field="">
                                                                              <span><i className="isax isax-minus"></i></span>
                                                                            </button>
                                                                        </span>
                                                                        <input type="text" name="quantity" className=" input-number" value="01" />
                                                                        <span className="input-group-btn float-end">
                                                                            <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
                                                                                <span><i className="isax isax-add"></i></span>
                                                                            </button>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 border br-10 info-item pb-1">
                                                    <h6 className="fs-16 fw-medium mb-2">Travellers</h6>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="form-check me-3 mb-3">
                                                            <input className="form-check-input" type="radio" value="Economy" name="cabin-className" id="economy" checked />
                                                            <label className="form-check-label" for="economy">
                                                                Economy
                                                            </label>
                                                        </div>
                                                        <div className="form-check me-3 mb-3">
                                                            <input className="form-check-input" type="radio" value="Economy" name="cabin-className" id="premium-economy" />
                                                            <label className="form-check-label" for="premium-economy">
                                                                Premium Economy
                                                            </label>
                                                        </div>
                                                        <div className="form-check me-3 mb-3">
                                                            <input className="form-check-input" type="radio" value="Business" name="cabin-className" id="business" />
                                                            <label className="form-check-label" for="business">
                                                                Business
                                                            </label>
                                                        </div>
                                                        <div className="form-check mb-3">
                                                            <input className="form-check-input" type="radio" value="First className" name="cabin-className" id="first-className" />
                                                            <label className="form-check-label" for="first-className">
                                                                First className
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <a href="javascript:void(0);" className="btn btn-light btn-sm me-2">Cancel</a>
                                                    <button type="submit" className="btn btn-primary btn-sm">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary search-btn rounded">Search</button>
                                </div>
                            </div>
                            <div className="multi-trip">
                                <div className="d-lg-flex">
                                    <div className="d-flex  form-info">
                                        <div className="form-item dropdown">
                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="menu">
                                                <label className="form-label fs-14 text-default mb-1">From</label>
                                                <input type="text" className="form-control" value="Newyork" />
                                                <p className="fs-12 mb-0">Ken International Airport</p>
                                            </div>
                                            <div className="dropdown-menu dropdown-md p-0">
                                                <div className="input-search p-3 border-bottom">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Search Location" />
                                                        <span className="input-group-text px-2 border-start-0"><i className="isax isax-search-normal"></i></span>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Newyork</h6>
                                                            <p>Ken International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Boston</h6>
                                                            <p>Boston Logan International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Northern Virginia</h6>
                                                            <p>Dulles International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Los Angeles</h6>
                                                            <p>Los Angeles International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Orlando</h6>
                                                            <p>Orlando International Airport</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="form-item dropdown ps-2 ps-sm-3">
                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="menu">
                                                <label className="form-label fs-14 text-default mb-1">To</label>
                                                <h5>Las Vegas</h5>
                                                <p className="fs-12 mb-0">Martini International Airport</p>
                                                <span className="way-icon badge badge-primary rounded-pill translate-middle">
                                                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                                </span>
                                            </div>
                                            <div className="dropdown-menu dropdown-md p-0">
                                                <div className="input-search p-3 border-bottom">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Search Location" />
                                                        <span className="input-group-text px-2 border-start-0"><i className="isax isax-search-normal"></i></span>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Newyork</h6>
                                                            <p>Ken International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Boston</h6>
                                                            <p>Boston Logan International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Northern Virginia</h6>
                                                            <p>Dulles International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li className="border-bottom">
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Los Angeles</h6>
                                                            <p>Los Angeles International Airport</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            <h6 className="fs-16 fw-medium">Orlando</h6>
                                                            <p>Orlando International Airport</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="form-item">
                                            <label className="form-label fs-14 text-default mb-1">Departure</label>
                                            <input type="text" className="form-control datetimepicker" value="21-10-2024" />
                                            <p className="fs-12 mb-0">Monday</p>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary search-btn rounded">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        

            <div class="mb-2">
                <div class="mb-3">
                    <h5 class="mb-2">Choose type of Flights you are interested</h5>
                </div>
                <div class="row">
                    <div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="d-flex align-items-center hotel-type-item mb-3">
                            <a href="flight-grid" class="avatar avatar-lg">
                                <img src="/img/flight/flight-company-01.svg" class="rounded-circle" alt="img" />
                            </a>
                            <div class="ms-2">
                                <h6 class="fs-16 fw-medium"><a href="flight-grid" className="text-decoration-none text-dark">American Airline</a></h6>
                                <p class="fs-14">216 Flights</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="d-flex align-items-center hotel-type-item mb-3">
                            <a href="flight-grid" class="avatar avatar-lg">
                                <img src="/img/flight/flight-company-02.svg" class="rounded-circle" alt="img" />
                            </a>
                            <div class="ms-2">
                                <h6 class="fs-16 fw-medium"><a href="flight-grid" className="text-decoration-none text-dark">Delta Airlines</a></h6>
                                <p class="fs-14">569 Flights</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="d-flex align-items-center hotel-type-item mb-3">
                            <a href="flight-grid" class="avatar avatar-lg">
                                <img src="/img/flight/flight-company-03.svg" class="rounded-circle" alt="img" />
                            </a>
                            <div class="ms-2">
                                <h6 class="fs-16 fw-medium"><a href="flight-grid" className="text-decoration-none text-dark">Emirates</a></h6>
                                <p class="fs-14">129 Flights</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="d-flex align-items-center hotel-type-item mb-3">
                            <a href="flight-grid" class="avatar avatar-lg">
                                <img src="/img/flight/flight-company-04.svg" class="rounded-circle" alt="img" />
                            </a>
                            <div class="ms-2">
                                <h6 class="fs-16 fw-medium"><a href="flight-grid" className="text-decoration-none text-dark">Air France</a></h6>
                                <p class="fs-14">600 Flights</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="d-flex align-items-center hotel-type-item mb-3">
                            <a href="flight-grid" class="avatar avatar-lg">
                                <img src="/img/flight/flight-company-05.svg" class="rounded-circle" alt="img" />
                            </a>
                            <div class="ms-2">
                                <h6 class="fs-16 fw-medium"><a href="flight-grid" className="text-decoration-none text-dark"> Qatar Airways</a></h6>
                                <p class="fs-14">200 Flights</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="d-flex align-items-center hotel-type-item mb-3">
                            <a href="flight-grid" class="avatar avatar-lg">
                                <img src="/img/flight/flight-company-06.svg" class="rounded-circle" alt="img" />
                            </a>
                            <div class="ms-2">
                                <h6 class="fs-16 fw-medium"><a href="flight-grid" className="text-decoration-none text-dark">Air India</a></h6>
                                <p class="fs-14">180 Flights</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default FlightSearch
