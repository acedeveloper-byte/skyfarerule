'use client';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFilterLeft } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";

import {
    faPhoneVolume, faLocationDot, faMoon, faSun, faHeart, faBars
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

const FlightHeader = () => {
    const [isPhoneVisible, setPhoneVisible] = useState(true); // Default state is true (visible)
    const [isNavVisible, setNavVisible] = useState(true); // State for toggling navigation visibility

    // Toggle phone number visibility
    const togglePhoneVisibility = () => {
        setPhoneVisible(prevState => !prevState);
    };

    // Toggle navigation visibility (for hamburger menu)
    const toggleNavVisibility = () => {
        setNavVisible(prevState => !prevState);
    };

    return (
        <div>
            <div className="main-header main-header-four">
                <div className="header-topbar header-top-six text-center bg-transparent">
                    <div className="container d-flex align-items-center justify-content-between flex-wrap navbar-cust">

                        <div className="navbar-logo mb-2">
                            <a href="/">
                                <Image src="/logo/logo.webp" alt="Logo" width={150} height={50} />
                            </a>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="me-3 mb-2">
                                <FontAwesomeIcon icon={faMoon} className="theme-toggle me-2" />
                                <FontAwesomeIcon icon={faSun} className="theme-toggle" />
                            </div>

                            <div>
                                {/* Toggle Button for Phone Visibility */}
                                <button onClick={togglePhoneVisibility} className="btn btn-dark mb-2 togle-button">
                                <MdOutlinePhoneInTalk className="fs-4"/>
                                    {isPhoneVisible ? '+1 (855) 838 5939' : 'Show Phone Number'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="header-six">
                    <div className="container d-flex align-items-center justify-content-between mob-view">
                        {/* Hamburger Menu Button */}

                            <BsFilterLeft  className="text-dark hamburger" onClick={toggleNavVisibility}  />
                           
                        <nav style={{ marginTop: '12px', display :  `${isNavVisible  ?  "none" :"flex" }` }}>
                            <ul className={`main-nav d-flex justify-content-center gap-4 ${isNavVisible ? 'show-nav' : 'hide-nav'}`}>
                                <li><a href="/" className="text-decoration-none text-white ">Home</a></li>
                                <li><a href="/about-us" className="text-decoration-none text-white ">About Us</a></li>
                                <li><a href="/blog" className="text-decoration-none text-white ">Blog</a></li>
                                <li><a href="/contact-us" className="text-decoration-none text-white ">Contact Us</a></li>
                                <li><a href="/termscondition" className="text-decoration-none text-white ">Terms & Conditions</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>

      
        </div>
    );
};

export default FlightHeader;
