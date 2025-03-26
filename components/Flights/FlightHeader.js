import React from 'react'

const FlightHeader = () => {
  return (
    <div>
       <div className="main-header main-header-four">
        <div className="header-topbar header-top-six text-center bg-transparent">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-center flex-wrap">
                        <p className="d-flex align-items-center fs-14 mb-2 me-3 "><i className="isax isax-call5 me-2"></i>Toll Free : +1 (855) 838 5939</p>
                        <p className="mb-2 d-flex align-items-center fs-14"><i className="isax isax-message-text-15 me-2"></i>Email : <a href="" className="text-decoration-none  __cf_email__"  data-cfemail="cea7a0a8a18eabb6afa3bea2abe0ada1a3">contact@skyfarerules.com</a></p>
                    </div>
                    <div className="navbar-logo mb-2">
                        <a className="logo-dark header-logo" href="index">
                            <img src="	https://www.skyfarerules.com/wp-content/uploads/2024/07/Skyfarerules-logo-1.png" className="logo" alt="Logo" style={{ maxWidth: "69%", height: "auto" }}
                            />
                        </a>
                        <a className="logo-white header-logo" href="index">
                            <img src="/img/logo.svg" className="logo" alt="Logo" />
                        </a>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="dropdown mb-2 me-3">
                            <a href=""  className="dropdown-toggle text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">USD</a>
                            {/* <ul className="dropdown-menu p-2 mt-2">
                                <li><a className="dropdown-item rounded" href="" className="text-decoration-none">USD</a></li>
                                <li><a className="dropdown-item rounded" href="" className="text-decoration-none">YEN</a></li>
                                <li><a className="dropdown-item rounded" href="" className="text-decoration-none">EURO</a></li>
                            </ul> */}
                        </div>
                        <div className="me-3 mb-2">
                            <a href="" className="theme-toggle text-decoration-none" id="dark-mode-toggle" >
                                <i className="isax isax-moon"></i>
                            </a>
                            <a href="" className="text-decoration-none theme-toggle" id="light-mode-toggle" >
                                <i className="isax isax-sun-1"></i>
                            </a>
                        </div>
                        <div className="fav-dropdown mb-2 me-3">
                            <a href="wishlist" className="position-relative">
                                <i className="isax isax-heart"></i><span className="count-icon bg-secondary text-gray-9">0</span>
                            </a>
                        </div>
                        <div>
                            <a href="tel: +1 (855) 838 5939"  className="text-white btn btn-dark w-100 mb-2 text-decoration-none" data-bs-toggle="modal" data-bs-target="#login-modal">+1 (855) 838 5939</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

        <header className="header-six">
            <div className="container">
                <div className="offcanvas-info">
                    <div className="offcanvas-wrap">
                        <div className="offcanvas-detail">
                            <div className="offcanvas-head">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <a href="index" className="black-logo-responsive">
                                        <img src="/img/logo-dark.svg" alt="logo-img" />
                                    </a>
                                    <a href="index" className="white-logo-responsive">
                                        <img src="/img/logo.svg" alt="logo-img" />
                                    </a>
                                    <div className="offcanvas-close">
                                        <i className="ti ti-x"></i>
                                    </div>
                                </div>
                                <div className="wishlist-info d-flex justify-content-between align-items-center">
                                    <h6 className="fs-16 fw-medium">Wishlist</h6>
                                    <div className="d-flex align-items-center">
                                        <div className="fav-dropdown">
                                            <a href="wishlist" className="position-relative">
                                                <i className="isax isax-heart"></i><span className="count-icon bg-secondary text-gray-9">0</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-menu fix mb-3"></div>
                            <div className="offcanvas__contact">
                                <div className="mt-4">
                                    <div className="header-dropdown d-flex flex-fill">
                                        <div className="w-100">
                                            <div className="dropdown">
                                                <a href=""  className="dropdown-toggle bg-white border d-block text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
													USD
												</a>
                                                {/* <ul className="dropdown-menu p-2">
                                                    <li><a className="dropdown-item rounded" href="" className="text-decoration-none">USD</a></li>
                                                    <li><a className="dropdown-item rounded" href="" className="text-decoration-none">YEN</a></li>
                                                    <li><a className="dropdown-item rounded" href="" className="text-decoration-none">EURO</a></li>
                                                </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div><a href=""  className="text-white btn btn-dark w-100 mb-3 text-decoration-none" data-bs-toggle="modal" data-bs-target="#login-modal">Sign In</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-overlay"></div>
                <div className="header-nav">
                    <div className="main-menu-wrapper">
                        <div className="navbar-logo">
                            <a className="logo-white header-logo" href="index">
                                <img src="/img/logo.svg" className="logo" alt="Logo" />
                            </a>
                        </div>
                        <nav id="mobile-menu">
                            <ul className="main-nav">
                                <li className="">
                                    <a href="/" className="text-decoration-none">Home</a>
                                   
                                </li>

                                <li className="">
                                    <a href="/about-us" className="text-decoration-none">About Us</a>
                                   
                                </li>
                                <li className="has-submenu mega-innermenu">
                                    <a href="" className="text-decoration-none">Flight</a>
                                    {/* <ul className="submenu mega-submenu">
                                        <li>
                                            <div className="megamenu-wrapper">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <h6>Flight Bookings</h6>
                                                        <ul>
                                                            <li><a href="flight-grid">Flight Grid</a></li>
                                                            <li><a href="flight-list">Flight List</a></li>
                                                            <li><a href="flight-details">Flight Details</a></li>
                                                            <li><a href="flight-booking-confirmation">Flight Booking</a></li>
                                                            <li><a href="add-flight">Add Flight</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="menu-img">
                                                            <img src="/img/menu/flight.jpg" alt="img" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="has-submenu mega-innermenu">
                                    <a href="/cruise" className="text-decoration-none">Cruise<i className="fa-solid fa-angle-down"></i></a>
                                    {/* <ul className="submenu mega-submenu">
                                        <li>
                                            <div className="megamenu-wrapper">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <h6>Cruise Bookings</h6>
                                                        <ul>
                                                            <li><a href="cruise-grid">Cruise Grid</a></li>
                                                            <li><a href="cruise-list">Cruise List</a></li>
                                                            <li><a href="cruise-map">Cruise Map</a></li>
                                                            <li><a href="cruise-details">Cruise Details</a></li>
                                                            <li><a href="cruise-booking-confirmation">Cruise Booking</a></li>
                                                            <li><a href="add-cruise">Add Cruise</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="menu-img">
                                                            <img src="/img/menu/cruise.jpg" alt="img" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="has-submenu mega-innermenu">
                                    <a href="" className="text-decoration-none">Hotel<i className="fa-solid fa-angle-down"></i></a>
                                    {/* <ul className="submenu mega-submenu">
                                        <li>
                                            <div className="megamenu-wrapper">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <h6>Hotel Bookings</h6>
                                                        <ul>
                                                            <li><a href="hotel-grid">Hotel Grid</a></li>
                                                            <li><a href="hotel-list">Hotel List</a></li>
                                                            <li><a href="hotel-map">Hotel Map</a></li>
                                                            <li><a href="hotel-details">Hotel Details</a></li>
                                                            <li><a href="booking-confirmation">Hotel Booking</a></li>
                                                            <li><a href="add-hotel">Add Hotel</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="menu-img">
                                                            <img src="/img/menu/hotel.jpg" alt="img" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="has-submenu mega-innermenu">
                                    <a href="" className="text-decoration-none">Car<i className="fa-solid fa-angle-down"></i></a>
                                    {/* <ul className="submenu mega-submenu">
                                        <li>
                                            <div className="megamenu-wrapper">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <h6>Car Bookings</h6>
                                                        <ul>
                                                            <li><a href="car-grid">Car Grid</a></li>
                                                            <li><a href="car-list">Car List</a></li>
                                                            <li><a href="car-map">Car Map</a></li>
                                                            <li><a href="car-details">Car Details</a></li>
                                                            <li><a href="car-booking-confirmation">Car Booking</a></li>
                                                            <li><a href="add-car">Add Car</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="menu-img">
                                                            <img src="/img/menu/car.jpg" alt="img" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                </li>
                                
                                {/* <li className="has-submenu mega-innermenu">
                                    <a href="" className="text-decoration-none">Tour<i className="fa-solid fa-angle-down"></i></a>
                                    <ul className="submenu mega-submenu">
                                        <li>
                                            <div className="megamenu-wrapper">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <h6>Tour Bookings</h6>
                                                        <ul>
                                                            <li><a href="tour-grid">Tour Grid</a></li>
                                                            <li><a href="tour-list">Tour List</a></li>
                                                            <li><a href="tour-map">Tour Map</a></li>
                                                            <li><a href="tour-details">Tour Details</a></li>
                                                            <li><a href="tour-booking-confirmation">Tour Booking</a></li>
                                                            <li><a href="add-tour">Add Tour</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="menu-img">
                                                            <img src="/img/menu/tour.jpg" alt="img" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li> */}
                                {/* <li className="has-submenu mega-innermenu">
                                    <a href="" className="text-decoration-none">Pages<i className="fa-solid fa-angle-down"></i></a>
                                    <ul className="submenu mega-submenu">
                                        <li>
                                            <div className="megamenu-wrapper">
                                                <h6>Pages</h6>
                                                <div className="row g-lg-4">
                                                    <div className="col-lg-6">
                                                        <ul>
                                                            <li><a href="about-us">About</a></li>
                                                            <li><a href="gallery">Gallery</a></li>
                                                            <li><a href="testimonial">Testimonials</a></li>
                                                            <li><a href="faq">Faq</a></li>
                                                            <li><a href="pricing-plan">Pricing Plan</a></li>
                                                            <li><a href="team">Teams</a></li>
                                                            <li><a href="invoices">Invoice</a></li>
                                                            <li><a href="blog-grid">Blogs Grid</a></li>
                                                            <li><a href="blog-list">Blogs List</a></li>
                                                            <li><a href="blog-details">Blogs Details</a></li>
                                                            <li><a href="contact-us">Contact Us</a></li>
                                                            <li><a href="booking-confirmation">Booking Confirmation</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <ul>
                                                            <li><a href="destination">Destination</a></li>
                                                            <li><a href="terms-conditions">Terms & Conditions</a></li>
                                                            <li><a href="privacy-policy">Privacy Policy</a></li>
                                                            <li><a href="login">Login</a></li>
                                                            <li><a href="register">Register</a></li>
                                                            <li><a href="forgot-password">Forgot Password</a></li>
                                                            <li><a href="change-password">Change Password</a></li>
                                                            <li><a href="error-404">404 Error</a></li>
                                                            <li><a href="error-500">500 Error</a></li>
                                                            <li><a href="under-maintenance">Under Maintenance</a></li>
                                                            <li><a href="coming-soon">Coming Soon</a></li>
                                                            <li><a href="index-rtl">RTL</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li> */}
                                {/* <li className="has-submenu mega-innermenu">
                                    <a href="" className="text-decoration-none">Dashboard<i className="fa-solid fa-plus"></i></a>
                                    <ul className="submenu mega-submenu">
                                        <li>
                                            <div className="megamenu-wrapper">
                                                <div className="row g-lg-4">
                                                    <div className="col-lg-6">
                                                        <h6>User Dashboard</h6>
                                                        <ul>
                                                            <li><a href="dashboard">Dashboard</a></li>
                                                            <li><a href="customer-flight-booking">My Bookings</a></li>
                                                            <li><a href="review">Reviews</a></li>
                                                            <li><a href="chat">Message</a></li>
                                                            <li><a href="wishlist">Wishlist</a></li>
                                                            <li><a href="wallet">Wallet</a></li>
                                                            <li><a href="payment">Payments</a></li>
                                                            <li><a href="profile-settings">Profile Settings</a></li>
                                                            <li><a href="notification-settings">Notifications</a></li>
                                                            <li><a href="my-profile">My Profile</a></li>
                                                            <li><a href="security-settings">Settings</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <h6>Agent Dashboard</h6>
                                                        <ul>
                                                            <li><a href="agent-dashboard">Dashboard</a></li>
                                                            <li><a href="agent-listings">Listings</a></li>
                                                            <li><a href="agent-hotel-booking">Bookings</a></li>
                                                            <li><a href="agent-enquirers">Enquiries</a></li>
                                                            <li><a href="agent-earnings">Earnings</a></li>
                                                            <li><a href="agent-review">Reviews</a></li>
                                                            <li><a href="agent-settings">Settings</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </nav>
                        <div className="header-btn align-items-center">
                            <div className="dropdown me-3">
                                <a href="" className="text-decoration-none dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
									USD
								</a>
                                <ul className="dropdown-menu p-2 mt-2">
                                    <li><a className="dropdown-item rounded text-decoration-none" href="" >USD</a></li>
                                    <li><a className="dropdown-item rounded text-decoration-none" href="" >YEN</a></li>
                                    <li><a className="dropdown-item rounded text-decoration-none" href="" s>EURO</a></li>
                                </ul>
                            </div>
                            <div className="me-3">
                                <a href="dashboard">
                                    <i className="isax isax-user"></i>
                                </a>
                            </div>
                            <div className="fav-dropdown  me-3">
                                <a href="wishlist" className="position-relative">
                                    <i className="isax isax-heart"></i><span className="count-icon bg-secondary text-gray-9">0</span>
                                </a>
                            </div>
                            <div>
                                <a href=""  className="text-white btn btn-dark w-100 mb-2 text-decoration-none" data-bs-toggle="modal" data-bs-target="#register-modal">Sign In</a>
                            </div>
                        </div>
                        <div className="header__hamburger d-xl-none my-auto">
                            <div className="sidebar-menu">
                                <i className="isax isax-menu5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    </div>
    </div>
  )
}

export default FlightHeader
