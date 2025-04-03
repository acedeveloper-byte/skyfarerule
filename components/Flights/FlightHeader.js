'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneVolume, faLocationDot, faMoon, faSun, faHeart
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

const FlightHeader = () => {
    return (
        <div>
            <div className="main-header main-header-four">
                <div className="header-topbar header-top-six text-center bg-transparent">
                    <div className="container d-flex align-items-center justify-content-between flex-wrap">

                        <div className="navbar-logo mb-2">
                            <a href="index">
                                <Image src="/logo/logo.webp" alt="Logo" width={150} height={50} />
                            </a>
                        </div>



                        <div className="d-flex align-items-center">
                            <div className="me-3 mb-2">
                                <FontAwesomeIcon icon={faMoon} className="theme-toggle me-2" />
                                <FontAwesomeIcon icon={faSun} className="theme-toggle" />
                            </div>

                            <div>
                                <a href="tel:+18558385939" className="btn btn-dark w-100 mb-2 text-decoration-none">
                                    <FontAwesomeIcon icon={faPhoneVolume} className="me-2" /> +1 (855) 838 5939

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="header-six">
                    <div className="container d-flex align-items-center justify-content-center">
                        <nav style={{ marginTop: '12px' }}>
                            <ul className="main-nav d-flex justify-content-center gap-4 ">
                                <li><a href="/" className="text-decoration-none text-white ">Home</a></li>
                                <li><a href="/about-us" className="text-decoration-none text-white ">About Us</a></li>
                                <li><a href="/blog" className="text-decoration-none text-white ">Blog</a></li>
                                <li><a href="/cruise" className="text-decoration-none text-white ">Contact Us</a></li>
                                <li><a href="/hotel" className="text-decoration-none text-white ">Terms & Conditions</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default FlightHeader;