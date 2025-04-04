'use client';
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFilterLeft } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import {
    faPhoneVolume, faLocationDot, faMoon, faSun, faHeart, faBars
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";

const CruiseHeader = () => {  
    const [isMobile, setIsMobile] = useState(false);
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
    useEffect(() => {
        const checkIfMobile = () => {
          setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };
    
        // Check on initial load
        checkIfMobile();
    
        // Add event listener for resizing
        window.addEventListener('resize', checkIfMobile);
    
        // Cleanup on unmount
        return () => {
          window.removeEventListener('resize', checkIfMobile);
        };
      }, []);
    return (
        <div>
            <div className="main-header main-header-four">
                <div className="header-topbar header-top-six text-center bg-transparent">
                    <div className="container d-flex align-items-center justify-content-between flex-wrap navbar-cust">

                        <div className="navbar-logo mb-2">
                            <Link href="/">
                                <Image src="/logo/logo.webp" alt="Logo" width={150} height={50} />
                            </Link>
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
                        {isMobile   &&  <BsFilterLeft  className="text-dark hamburger" onClick={toggleNavVisibility}  />}
                          {/* <BsFilterLeft  className="text-dark hamburger" onClick={toggleNavVisibility}  /> */}
                        <nav style={{ marginTop: '12px', display :  `${isMobile ?  isNavVisible  ?  "none" :"flex" :  "flex" }` }}>
                            <ul className={`main-nav d-flex justify-content-center gap-4 ${isNavVisible ? 'show-nav' : 'hide-nav'}`}>
                                <li><Link href="/discounted-cruises" className="text-decoration-none text-white ">Cruise</Link></li>
                                <li><Link href="/about-us" className="text-decoration-none text-white ">About Us</Link></li>
                                <li><Link href="/contact-us" className="text-decoration-none text-white ">Contact Us</Link></li>


                            </ul>
                        </nav>
                    </div>
                </header>
            </div>

      
        </div>
    );
};

export default CruiseHeader;
