import React from "react";

const FlightHeader = () => {
  return (
    <header>
      <div className="upper-head clearfix">
        <div className="container">
          <div className="contact-info ">
            <p>
              <i className="flaticon-phone-call"></i> Phone: +1 (855) 838 5939
            </p>
            <p>
              <i className="flaticon-mail"></i> Mail:{" "}
              <a href="tel: contact@skyfarerules.com" className="text-white">
                contact@skyfarerules.com
              </a>
            </p>
          </div>
          {/* <div className="login-btn pull-right">
            <a href="login">
              <i className="fa fa-user-plus"></i> Register
            </a>
            <a href="login">
              <i className="fa fa-unlock-alt"></i> Login
            </a>
          </div> */}
        </div>
      </div>
      <div className="navigation">
        <div className="container">
          <div className="navigation-content">
            <div className="header_menu">
              <nav className="navbar navbar-default navbar-sticky-function navbar-arrow">
                <div className="logo pull-left">
                  <a href="">
                    {/* <img alt="Image" src="/images/Yatra-01.png" /> */}
                    <h1 class="">SkyfareRule</h1>
                  </a>
                </div>
                <div id="navbar" className="navbar-nav-wrapper">
                  <ul className="nav navbar-nav" id="responsive-menu">
                    <li className="active">
                      <a href="http://localhost:3000/">
                        Home <i className="fa fa-angle-down"></i>
                      </a>
                    </li>
                    <li>
                      <a href="./about-us">
                        About Us <i className="fa fa-angle-down"></i>
                      </a>
                    </li>

                    <li>
                      <a href="blog">Blog </a>
                    </li>

                    <li>
                      <a href="hotel">
                        Hotel <i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="hotel">Hotel Homepage</a>
                        </li>
                        <li>
                          <a href="grid-view">Grid View</a>
                        </li>
                        <li>
                          <a href="list-view">List View</a>
                        </li>
                        <li>
                          <a href="hotel-detail">Detail Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="flight">
                        Flights<i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="flight">Flight Homepage</a>
                        </li>
                        <li>
                          <a href="flight-grid-view">Grid View</a>
                        </li>
                        <li>
                          <a href="flight-list-view">List View</a>
                        </li>
                        <li>
                          <a href="flight-detail">Detail Page</a>
                        </li>
                        <li>
                          <a href="flight-booking">Booking</a>
                        </li>
                        <li>
                          <a href="flight-confirm">Thank You</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star"></i> Cars
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="car-grid-view">Car Grid View</a>
                        </li>
                        <li>
                          <a href="car-list-view">Car List View</a>
                        </li>
                        <li>
                          <a href="car-detail">Car Detail Page</a>
                        </li>
                        <li>
                          <a href="car-booking">Payment</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star"></i> Cruise
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="cruise-grid-view">Cruise Grid View</a>
                        </li>
                        <li>
                          <a href="cruise-list-view">Cruise List View</a>
                        </li>
                        <li>
                          <a href="cruise-detail">Cruise Detail Page</a>
                        </li>
                        <li>
                          <a href="cruise-booking">Payment</a>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <a href="#">
                        Dashboard <i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="dashboard">Dashboard</a>
                        </li>
                        <li>
                          <a href="dashboard-my-profile">Dashboard Profile</a>
                        </li>
                        <li>
                          <a href="dashboard-booking">Dashboard Bookings</a>
                        </li>
                        <li>
                          <a href="dashboard-history">Dashboard History</a>
                        </li>
                        <li>
                          <a href="dashboard-list">Dashboard Listing</a>
                        </li>
                        <li>
                          <a href="dashboard-addtour">Dashboard Add Tour</a>
                        </li>
                        <li>
                          <a href="dashboard-reviews">Dashboard Reviews</a>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      <a href="#">
                        Shop <i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="shop">Shop List</a>
                        </li>
                        <li>
                          <a href="shop-detail">Shop Detail</a>
                        </li>
                        <li>
                          <a href="cart">Cart</a>
                        </li>
                        <li>
                          <a href="checkout">Checkout</a>
                        </li>
                        <li>
                          <a href="login">Login Page</a>
                        </li>
                        <li>
                          <a href="forgot-password">Forgot Password</a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
                <div id="slicknav-mobile"></div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FlightHeader;
