import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faHouseUser,
    faScissors,
    faUser, faWind, faCalendar, faGaugeSimpleHigh, faMaximize
} from "@fortawesome/free-solid-svg-icons";

const CruiseFilter = () => {

    const cruises = [
        {
            id: 1,
            image: "/img/cruise/cruise-12.jpg",
            name: "Bonnie Yacht",
            location: "Oxford Street, London",
            year: 2020,
            guests: 3,
            width: "70.63 m",
            speed: "17 Knots",
            owner: {
                name: "Tom Andrews",
                avatar: "/img/users/user-09.jpg",
            },
            rating: 4.7,
            reviews: 300,
            price: 600
        },
        {
            id: 2,
            image: "/img/cruise/cruise-08.jpg",
            name: "Coral Cruiser",
            location: "Princes Street, Edinburgh",
            year: 2020,
            guests: 3,
            width: "70.63 m",
            speed: "17 Knots",
            owner: {
                name: "Robert Cogs",
                avatar: "/img/users/user-10.jpg",
            },
            rating: 4.5,
            reviews: 320,
            price: 500
        },
        {
            id: 3,
            image: "/img/cruise/cruise-09.jpg",
            name: "Harbor Haven",
            location: "Princes Street, Edinburgh",
            year: 2020,
            guests: 3,
            width: "70.63 m",
            speed: "17 Knots",
            owner: {
                name: "Kenneth Pal",
                avatar: "/img/users/user-11.jpg",
            },
            rating: 4.3,
            reviews: 380,
            price: 300
        }
    ];

    return (
        <div className='container'>
            <div className="row">
                <div className="col-xl-12 col-lg-8 theiaStickySidebar">
                    <div className="row justify-content-center">
                        {cruises.map(cruise => (
                            <div key={cruise.id} className="col-xl-4 col-md-6 d-flex">
                                <div className="place-item mb-4 flex-fill">
                                    <div className="place-img">
                                        <a href="cruise-details">
                                            <img src={cruise.image} className="img-fluid" alt="img" />
                                        </a>
                                        <div className="fav-item">
                                            <a href="" className="fav-icon">
                                                <i className="isax isax-heart5"></i>
                                            </a>
                                            <span className="badge bg-info d-inline-flex align-items-center">
                                                <i className="isax isax-ranking me-1"></i>Trending
                                            </span>
                                        </div>
                                    </div>
                                    <div className="place-content">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <a href="" className="d-flex align-items-center overflow-hidden me-2">
                                                <span className="avatar avatar-md flex-shrink-0 me-2">
                                                    <img src={cruise.owner.avatar} className="rounded-circle" alt="img" />
                                                </span>
                                                <p className="fs-14 text-truncate text-decoration-none text-dark">{cruise.owner.name}</p>
                                            </a>
                                            <div className="d-flex align-items-center">
                                                <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium me-2">{cruise.rating}</span>
                                                <p className="fs-14 text-truncate">({cruise.reviews})</p>
                                            </div>
                                        </div>
                                        <h5 className="mb-1 text-truncate">
                                            <a href="cruise-details" className="text-decoration-none text-dark fw-bold">{cruise.name}</a>
                                        </h5>
                                        <p className="d-flex align-items-center mb-3">
                                            <i className="isax isax-location5 me-2"></i>{cruise.location}
                                        </p>
                                        <div className="curise-details d-flex justify-content-between align-items-center mb-3">
                                            <div>
                                                <p className="mb-1">
                                                    <FontAwesomeIcon icon={faCalendar} style={{ width: "20px", height: "14px" }} />
                                                    Year : <span className="text-dark fw-medium">{cruise.year}</span>
                                                </p>
                                                <p>
                                                    <FontAwesomeIcon icon={faUser} style={{ width: "20px", height: "14px" }} />
                                                    Guests : <span className="text-dark fw-medium">{cruise.guests}</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p className="mb-1">
                                                    <FontAwesomeIcon icon={faMaximize} style={{ width: "20px", height: "14px" }} />
                                                    Width : <span className="text-dark fw-medium">{cruise.width}</span>
                                                </p>
                                                <p>
                                                    <FontAwesomeIcon icon={faGaugeSimpleHigh} style={{ width: "20px", height: "14px" }} />
                                                    Speed : <span className="text-dark fw-medium">{cruise.speed}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <h6 className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faHouseUser} style={{ width: "20px", height: "14px" }} />
                                                <FontAwesomeIcon icon={faScissors} style={{ width: "20px", height: "14px" }} />
                                                <FontAwesomeIcon icon={faUser} style={{ width: "20px", height: "14px" }} />
                                                <FontAwesomeIcon icon={faWind} style={{ width: "20px", height: "14px" }} />
                                                <a href="" className="fs-14 fw-normal text-default d-inline-block text-decoration-none ml-5">+2</a>
                                            </h6>
                                            <h5 className="text-danger text-nowrap me-2 ">
                                                ${cruise.price} <span className="fs-14 fw-normal text-default">/ day</span>
                                            </h5>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CruiseFilter;
