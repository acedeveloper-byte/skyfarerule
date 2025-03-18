
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
// =======
// import React from 'react'

// const FlightHeader = () => {
//   return (
//     <>
//            <header>
//       <div class="upper-head clearfix">
//         <div class="container">
//           <div class="contact-info">
//             <p><i class="flaticon-phone-call"></i> Phone: (012)-345-6789</p>
//             <p><i class="flaticon-mail"></i> Mail: <a href="https://htmldesigntemplates.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="bdc9d2c8cfd3c9cfdccbd8d1fdc9d8cec9d0dcd4d193ded2d0">[email&#160;protected]</a></p>
//           </div>
//           <div class="login-btn pull-right">
//             <a href="login.html"><i class="fa fa-user-plus"></i> Register</a>
//             <a href="login.html"><i class="fa fa-unlock-alt"></i> Login</a>
//           </div>
//         </div>
//       </div>
//     <div class="navigation">
//       <div class="container">
//         <div class="navigation-content">
//           <div class="header_menu">
//             <nav class="navbar navbar-default navbar-sticky-function navbar-arrow">
//               <div class="logo pull-left">
//                 <a href="index.html"><img alt="Image" src="/images/Yatra-01.png" /></a>
//               </div>
//               <div id="navbar" class="navbar-nav-wrapper">
//                 <ul class="nav navbar-nav" id="responsive-menu">
//                   <li class="active">
//                     <a href="index.html">Home <i class="fa fa-angle-down"></i></a>
//                     <ul>
//                       <li>
//                         <a href="#">Travel</a>
//                         <ul>
//                           <li><a href="index.html">Home Slider</a></li>
//                           <li><a href="index-banner.html">Home Banner</a></li>
//                           <li><a href="index-video.html">Home Video</a></li>
//                         </ul>
//                       </li>
//                       <li><a href="index-1.html">Travel Style 2</a></li>
//                       <li><a href="index-2.html">Travel Style 3</a></li>
//                       <li><a href="index-3.html">Travel style 4</a></li>
//                       <li><a href="index-5.html">Travel style 5 <span class="fw-bold pink">(New)</span></a></li>
//                       <li><a href="index-6.html">Travel style 6 <span class="fw-bold pink">(New)</span></a></li>
//                       <li><a href="index-4.html">Travel Search</a></li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#">Pages <i class="fa fa-angle-down"></i></a>
//                     <ul>
//                       <li>
//                         <a href="#">Destination</a>
//                         <ul>
//                           <li>
//                             <a href="#">Grid View</a>
//                             <ul>
//                               <li><a href="destination-2col.html">Grid View 2 Col</a></li>
//                               <li><a href="destination-3col.html">Grid View 3 Col</a></li>
//                               <li><a href="destination-4col.html">Grid View 4 Col</a></li>
//                               <li><a href="destination-sidebar.html">Grid with sidebar</a></li>
//                             </ul>
//                           </li>
//                           <li>
//                             <a href="#">List View</a>
//                             <ul>
//                               <li><a href="destination-fullwidth.html">List no sidebar</a></li>
//                               <li><a href="destination-list-sidebar.html">List with sidebar</a></li>
//                             </ul>
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         <a href="tour-detail.html">Detail Default</a>
//                         <ul>
//                           <li><a href="tour-detail.html">Detail Default</a></li>
//                           <li><a href="detail-tabs.html">Detail Tabs</a></li>
//                         </ul>
//                       </li>
//                       <li>
//                         <a href="booking.html">Booking & Payment</a>
//                         <ul>
//                           <li><a href="booking.html">Booking Page</a></li>
//                           <li><a href="booking-confirmation.html">Booking Confirmation</a></li>
//                           <li><a href="payment.html">Payment Page</a></li>
//                         </ul>
//                       </li>
//                       <li><a href="price-list.html">Price List</a></li>
//                       <li><a href="error.html">Error Page</a></li>
//                       <li><a href="aboutus.html">About Page</a></li>
//                       <li><a href="contactus.html">Contact Us</a></li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="hotel.html">Hotel <i class="fa fa-angle-down"></i></a>
//                     <ul>
//                       <li><a href="hotel.html">Hotel Homepage</a></li>
//                       <li><a href="grid-view.html">Grid View</a></li>
//                       <li><a href="list-view.html">List View</a></li>
//                       <li><a href="hotel-detail.html">Detail Page</a></li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="flight.html">Flights<i class="fa fa-angle-down"></i></a>
//                     <ul>
//                       <li><a href="flight.html">Flight Homepage</a></li>
//                       <li><a href="flight-grid-view.html">Grid View</a></li>
//                       <li><a href="flight-list-view.html">List View</a></li>
//                       <li><a href="flight-detail.html">Detail Page</a></li>
//                       <li><a href="flight-booking.html">Booking</a></li>
//                       <li><a href="flight-confirm.html">Thank You</a></li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#"><i class="fa fa-star"></i> Cars<i class="fa fa-angle-down"></i></a>
//                     <ul>
//                       <li><a href="car-grid-view.html">Car Grid View</a></li>
//                       <li><a href="car-list-view.html">Car List View</a></li>
//                       <li><a href="car-detail.html">Car Detail Page</a></li>
//                       <li><a href="car-booking.html">Payment</a></li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#"><i class="fa fa-star"></i> Cruise<i class="fa fa-angle-down"></i></a>
//                     <ul>
//                       <li><a href="cruise-grid-view.html">Cruise Grid View</a></li>
//                       <li><a href="cruise-list-view.html">Cruise List View</a></li>
//                       <li><a href="cruise-detail.html">Cruise Detail Page</a></li>
//                       <li><a href="cruise-booking.html">Payment</a></li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#">Dashboard <i class="fa fa-angle-down"></i></a>
//                     <ul>
//                       <li><a href="dashboard.html">Dashboard</a></li>
//                       <li><a href="dashboard-my-profile.html">Dashboard Profile</a></li>
//                       <li><a href="dashboard-booking.html">Dashboard Bookings</a></li>
//                       <li><a href="dashboard-history.html">Dashboard History</a></li>
//                       <li><a href="dashboard-list.html">Dashboard Listing</a></li>
//                       <li><a href="dashboard-addtour.html">Dashboard Add Tour</a></li>
//                       <li><a href="dashboard-reviews.html">Dashboard Reviews</a></li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#">Shop <i class="fa fa-angle-down"></i></a>
//                     <ul>
//                       <li><a href="shop.html">Shop List</a></li>
//                       <li><a href="shop-detail.html">Shop Detail</a></li>
//                       <li><a href="cart.html">Cart</a></li>
//                       <li><a href="checkout.html">Checkout</a></li>
//                       <li><a href="login.html">Login Page</a></li>
//                       <li><a href="forgot-password.html">Forgot Password</a></li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#">Blog <i class="fa fa-angle-down"></i></a>
//                     <ul>
//                       <li><a href="blog-list.html">Blog Right Sidebar</a></li>
//                       <li><a href="blog-list-1.html">Blog Left Sidebar</a></li>
//                       <li><a href="blog-list-2.html">Blog Fullwidth</a></li>
//                       <li><a href="blog-list-3.html">Blog List</a></li>
//                       <li><a href="blog-grid.html">Blog Grid</a></li>
//                       <li><a href="blog-detail.html">Blog Detail Right Sidebar</a></li>
//                       <li><a href="blog-detail-fw.html">Blog Detail Fullwidth</a></li>
//                     </ul>
//                   </li>
//                 </ul>
//               </div>
//               <div id="slicknav-mobile"></div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>

//     </header> 
//     </>
//   )
// }

// export default FlightHeader
// >>>>>>> 8bbd7760c34560584f9616754368a3d645d396e6
