import React from 'react'
import Image from "next/image"; 

const cruiseData = [
    {
        name: "Luxury Cruise",
        image: "/img/cruise/cruise-04.jpg",
        cruisesCount: 216,
        link: "cruise-grid"
    },
    {
        name: "Adventure Cruise",
        image: "/img/cruise/cruise-02.jpg",
        cruisesCount: 569,
        link: "cruise-grid"
    },
    {
        name: "River Cruise",
        image: "/img/cruise/cruise-03.jpg",
        cruisesCount: 129,
        link: "cruise-grid"
    },
    {
        name: "Family Cruise",
        image: "/img/cruise/cruise-04.jpg",
        cruisesCount: 150,
        link: "cruise-grid"
    },
    {
        name: "Sailing Cruises",
        image: "/img/cruise/cruise-05.jpg",
        cruisesCount: 200,
        link: "cruise-grid"
    },
    {
        name: "World Cruises",
        image: "/img/cruise/cruise-06.jpg",
        cruisesCount: 320,
        link: "cruise-grid"
    }
];

const CruiseSearch = () => {
  return (
    <div className="container my-5">

            <div className="card">
                <div className="card-body">
                    <div className="banner-form">
                        <form className="d-lg-flex">
                            <div className="d-flex  form-info">
                                <div className="form-item dropdown">
                                    <div data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="menu">
                                        <label className="form-label fs-14 text-default mb-1">City, Property name or Location</label>
                                        <input type="text" className="form-control" value="Newyork" />
                                        <p className="fs-12 mb-0">USA</p>
                                    </div>
                                    <div className="dropdown-menu dropdown-md p-0">
                                        <div className="input-search p-3 border-bottom">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search for City, Property name or Location" />
                                                <span className="input-group-text px-2 border-start-0"><i className="isax isax-search-normal"></i></span>
                                            </div>
                                        </div>
                                     
                                    </div>
                                </div>
                                <div className="form-item">
                                    <label className="form-label fs-14 text-default mb-1">Check In</label>
                                    <input type="text" className="form-control datetimepicker" value="21-10-2025" />
                                   
                                </div>
                                <div className="form-item">
                                    <label className="form-label fs-14 text-default mb-1">Check Out</label>
                                    <input type="text" className="form-control datetimepicker" value="21-10-2025" />
                                   
                                </div>
                                <div className="form-item dropdown">
                                    <div data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="menu">
                                        <label className="form-label fs-14 text-default mb-1">Guests</label>
                                        <h5>4 <span className="fw-normal fs-14">Persons</span></h5>
                                        <p className="fs-12 mb-0">4 Adult, 2 Rooms</p>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-xl">
                                        <h5 className="mb-3">Select Travelers &  className</h5>
                                        <div className="mb-3 border br-10 info-item pb-1">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                                        <label className="form-label text-gray-9 mb-2">Rooms</label>
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
                                                <div className="col-md-12">
                                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                                        <label className="form-label text-gray-9 mb-2">Adults</label>
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
                                                <div className="col-md-12">
                                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                                        <label className="form-label text-gray-9 mb-2">Children <span className="text-default fw-normal">( 2-12 Yrs )</span></label>
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
                                                <div className="col-md-12">
                                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                                        <label className="form-label text-gray-9 mb-2">Infants <span className="text-default fw-normal">( 0-12 Yrs )</span></label>
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
                                                    <input className="form-check-input" type="radio" name="room" id="room1"  checked />
                                                    <label className="form-check-label" for="room1">
                                                        Single
                                                    </label>
                                                </div>
                                                <div className="form-check me-3 mb-3">
                                                    <input className="form-check-input" type="radio" name="room" id="room2" />
                                                    <label className="form-check-label" for="room2">
                                                        Double
                                                    </label>
                                                </div>
                                                <div className="form-check me-3 mb-3">
                                                    <input className="form-check-input" type="radio" name="room" id="room3" />
                                                    <label className="form-check-label" for="room3">
                                                        Delux
                                                    </label>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="radio" name="room" id="room4" />
                                                    <label className="form-check-label" for="room4">
                                                        Suite
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 border br-10 info-item pb-1">
                                            <h6 className="fs-16 fw-medium mb-2">Property Type</h6>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="form-check me-3 mb-3">
                                                    <input className="form-check-input" type="radio" name="property" id="property1" checked />
                                                    <label className="form-check-label" for="property1">
                                                        Villa
                                                    </label>
                                                </div>
                                                <div className="form-check me-3 mb-3">
                                                    <input className="form-check-input" type="radio" name="property" id="property2" />
                                                    <label className="form-check-label" for="property2">
                                                        Condo
                                                    </label>
                                                </div>
                                                <div className="form-check me-3 mb-3">
                                                    <input className="form-check-input" type="radio" name="property" id="property3" />
                                                    <label className="form-check-label" for="property3">
                                                        Cabin
                                                    </label>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="radio" name="property" id="property4" />
                                                    <label className="form-check-label" for="property4">
                                                        Apartments
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <a href="" className="btn btn-light btn-sm me-2">Cancel</a>
                                            <button type="submit" className="btn btn-primary btn-sm">Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary search-btn rounded">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        

            <div className="mb-2">
            <div className="mb-3">
                <h5 className="mb-2">Choose type of Cruise you are interested</h5>
            </div>
            <div className="row">
                {cruiseData.map((cruise, index) => (
                    <div key={index} className="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="d-flex align-items-center hotel-type-item mb-3">
                            <a href={cruise.link} className="avatar avatar-lg">
                                <Image
                                    src={cruise.image}
                                    className="rounded-circle"
                                    alt={cruise.name}
                                    width={150} // You can adjust the size accordingly
                                    height={150} // You can adjust the size accordingly
                                />
                            </a>
                            <div className="ms-2">
                                <h6 className="fs-16 fw-medium">
                                    <a href={cruise.link} className="text-decoration-none text-dark">
                                        {cruise.name}
                                    </a>
                                </h6>
                                <p className="fs-14">{cruise.cruisesCount} Cruises</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
           
    
    </div>
  )
}

export default CruiseSearch
