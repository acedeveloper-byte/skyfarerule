"use client ";
import React from "react";

const SearchEngine = () => {
  return (
    <>
      <section class="banner p-0 bg-white">
        <div class="banner-wrapper px-7">
          <div class="swiper position-relative z-1 slider">
            <div class="swiper-wrapper ">
              <div class="swiper-slide position-relative slide-3">
                <div class="slide-body  pb-8 z-1">
                  <div class="banner-content-inner swiper-content text-center w-50 m-auto">
                    <h1 class="white fadeInDown text-uppercase">
                      Amazing Santorini 7 days tour.
                    </h1>
                    <p class="fadeInDown mb-4 white w-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium nobis commodi reprehenderit corporis eaque
                      accusamus, dolorem atque!
                    </p>
                    <div class="banner-button1 fadeInDown me-4">
                      <a
                        href="tour-detail.html"
                        class="btn-blue btn-red rounded"
                      >
                        Book a Trip
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="banner-filter position-relative z-2 box-shadow">
            <ul
              class="nav nav-tabs border-0 justify-content-center m-0 p-0"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item m-0" role="presentation">
                <button
                  class="nav-link active py-3 px-6 fw-bold black bg-snow"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  <i class="fa fa-suitcase" aria-hidden="true"></i> Tour
                </button>
              </li>
              <li class="nav-item m-0" role="presentation">
                <button
                  class="nav-link py-3 px-6 fw-bold black bg-snow"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  <i class="fa fa-bed" aria-hidden="true"></i> Hotel
                </button>
              </li>
              <li class="nav-item m-0" role="presentation">
                <button
                  class="nav-link py-3 px-6 fw-bold black bg-snow"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  <i class="fa fa-cubes" aria-hidden="true"></i> Activities
                </button>
              </li>
              <li class="nav-item m-0" role="presentation">
                <button
                  class="nav-link py-3 px-6 fw-bold black bg-snow"
                  id="trasnport-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#trasnport-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="trasnport-tab-pane"
                  aria-selected="false"
                >
                  <i class="fa fa-car" aria-hidden="true"></i> Transport
                </button>
              </li>
            </ul>
            <div class="tab-content bg-snow" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                <form class="d-xl-flex justify-content-center align-items-center">
                  <div class="filter-area w-100 align-items-center">
                    <div class="row">
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box d-flex position-relative justify-content-center align-items-center">
                          <div class="filter-icon">
                            <i
                              class="fa fa-map-marker me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="destination" class="mb-1 fs-6">
                              Destination
                            </label>{" "}
                            <br />
                            <select
                              name="destination"
                              id="destination"
                              class="border-0 bg-transparent ps-0 black fw-semibold"
                            >
                              <option value="1">Nepal</option>
                              <option value="2">Bali</option>
                              <option value="3">Bangladesh</option>
                              <option value="4">India</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box d-flex position-relative justify-content-center align-items-center">
                          <div class="filter-icon">
                            <i
                              class="fa fa-suitcase me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="tour-type" class="mb-1 fs-6">
                              Tour Type
                            </label>{" "}
                            <br />
                            <select
                              name="tour-type"
                              id="tour-type"
                              class="border-0 bg-transparent ps-0 black fw-semibold"
                            >
                              <option value="1">Family Tour</option>
                              <option value="2">Honeymoon Tour</option>
                              <option value="3">Group Tour</option>
                              <option value="4">Solo Tour</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box d-flex justify-content-center position-relative align-items-center">
                          <div class="filter-icon">
                            <i
                              class="fa fa-calendar-check-o me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="time" class="mb-1 fs-6">
                              When
                            </label>{" "}
                            <br />
                            <select
                              name="time"
                              id="time"
                              class="border-0 bg-transparent ps-0 black fw-semibold"
                            >
                              <option value="1">January</option>
                              <option value="2">Febuary</option>
                              <option value="3">March</option>
                              <option value="4">April</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box d-flex justify-content-center position-relative align-items-center">
                          <div class="filter-icon">
                            <i
                              class="fa fa-suitcase me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="tour-category" class="mb-1 fs-6">
                              Tour Category
                            </label>{" "}
                            <br />
                            <select
                              name="tour-category"
                              id="tour-category"
                              class="border-0 bg-transparent ps-0 black fw-semibold"
                            >
                              <option value="1">Economy</option>
                              <option value="2">Luxury</option>
                              <option value="3">Delux</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="filter-search h-100 text-center">
                    <button class=" py-6 px-8 filter-button white btn1">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                <form class="d-xl-flex justify-content-center align-items-center">
                  <div class="filter-area w-100 align-items-center">
                    <div class="row">
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box filter-box1 d-flex justify-content-center position-relative align-items-center">
                          <div class="filter-icon">
                            <i
                              class="fa fa-map-marker me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="location" class="mb-1 fs-6">
                              Location
                            </label>{" "}
                            <br />
                            <select
                              name="location"
                              id="location"
                              class="border-0 bg-transparent ps-0 black fw-semibold"
                            >
                              <option value="1">Nepal</option>
                              <option value="2">Bali</option>
                              <option value="3">Bangladesh</option>
                              <option value="4">India</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box d-flex justify-content-center  align-items-center position-relative">
                          <div class="filter-icon">
                            <i
                              class="fa fa-clock-o me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="checkin-date" class="mb-1 fs-6">
                              Check In
                            </label>{" "}
                            <br />
                            <input
                              type="date"
                              class="border-0 bg-transparent fw-semibold p-0"
                              id="checkin-date"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box d-flex justify-content-center  align-items-center position-relative">
                          <div class="filter-icon">
                            <i
                              class="fa fa-clock-o me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="checkout-date" class="mb-1 fs-6">
                              Check Out
                            </label>{" "}
                            <br />
                            <input
                              type="date"
                              class="border-0 bg-transparent fw-semibold p-0"
                              id="checkout-date"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box d-flex justify-content-center align-items-center">
                          <div class="filter-icon">
                            <i
                              class="fa fa-building-o me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="room" class="mb-1 fs-6">
                              Room
                            </label>{" "}
                            <br />
                            <input
                              type="number"
                              id="room"
                              class="border-0 bg-transparent fw-semibold p-0"
                              value="1"
                              min="1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="filter-search h-100 text-center">
                    <button class=" py-6 px-8 filter-button white btn1">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabindex="0"
              >
                <form class="d-xl-flex justify-content-center align-items-center">
                  <div class="filter-area w-100 align-items-center">
                    <div class="row">
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box filter-box1 d-flex justify-content-center position-relative align-items-center">
                          <div class="filter-icon">
                            <i
                              class="fa fa-map-marker me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="location2" class="mb-1 fs-6">
                              Location
                            </label>{" "}
                            <br />
                            <select
                              name="location2"
                              id="location2"
                              class="border-0 bg-transparent ps-0 black fw-semibold"
                            >
                              <option value="1">Nepal</option>
                              <option value="2">Bali</option>
                              <option value="3">Bangladesh</option>
                              <option value="4">India</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box filter-box1 d-flex justify-content-center position-relative align-items-center">
                          <div class="filter-icon">
                            <i
                              class="fa fa-binoculars me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="activity" class="mb-1 fs-6">
                              Activity Type
                            </label>{" "}
                            <br />
                            <select
                              name="activity"
                              id="activity"
                              class="border-0 bg-transparent ps-0 black fw-semibold"
                            >
                              <option value="1">Adventure</option>
                              <option value="2">Cultural</option>
                              <option value="3">Historical</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box d-flex justify-content-center  align-items-center position-relative">
                          <div class="filter-icon">
                            <i
                              class="fa fa-clock-o me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="activity-date" class="mb-1 fs-6">
                              Activity Day
                            </label>{" "}
                            <br />
                            <input
                              type="date"
                              class="border-0 bg-transparent ps-0 black fw-semibold p-0"
                              id="activity-date"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box d-flex justify-content-center align-items-center">
                          <div class="filter-icon">
                            <i
                              class="fa fa-user me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="guests" class="mb-1 fs-6">
                              Guests
                            </label>{" "}
                            <br />
                            <input
                              type="number"
                              id="guests"
                              class="border-0 bg-transparent ps-0 black fw-semibold p-0"
                              value="1"
                              min="1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="filter-search h-100 text-center">
                    <button class="py-6 px-8 filter-button white btn1">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="trasnport-tab-pane"
                role="tabpanel"
                aria-labelledby="trasnport-tab"
                tabindex="0"
              >
                <form class="d-xl-flex justify-content-center align-items-center">
                  <div class="filter-area w-100 align-items-center">
                    <div class="row">
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box filter-box1 d-flex justify-content-center align-items-center position-relative">
                          <div class="filter-icon">
                            <i
                              class="fa fa-map-marker me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="destination-from" class="mb-1 small">
                              From
                            </label>{" "}
                            <br />
                            <select
                              name="destination-from"
                              id="destination-from"
                              class="border-0 bg-transparent ps-0 black fw-semibold"
                            >
                              <option value="1">Nepal</option>
                              <option value="2">Bali</option>
                              <option value="3">Bangladesh</option>
                              <option value="4">India</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box filter-box1 d-flex justify-content-center align-items-center position-relative">
                          <div class="filter-icon">
                            <i
                              class="fa fa-map-marker me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="destination-to" class="mb-1 small">
                              To
                            </label>{" "}
                            <br />
                            <select
                              name="destination-to"
                              id="destination-to"
                              class="border-0 bg-transparent ps-0 black fw-semibold"
                            >
                              <option value="1">Bangladesh</option>
                              <option value="2">Nepal</option>
                              <option value="3">Bali</option>
                              <option value="4">India</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box d-flex justify-content-center  align-items-center position-relative">
                          <div class="filter-icon">
                            <i
                              class="fa fa-clock-o me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="journey-date" class="mb-1 small">
                              Journey Start Date
                            </label>{" "}
                            <br />
                            <input
                              type="date"
                              class="border-0 bg-transparent ps-0 black fw-semibold p-0"
                              id="journey-date"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="filter-box d-flex justify-content-center align-items-center">
                          <div class="filter-icon">
                            <i
                              class="fa fa-plane me-4 pink"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="filter-input">
                            <label for="trasport-type" class="mb-1 small">
                              Trasnport Type
                            </label>{" "}
                            <br />
                            <select
                              name="trasport-type"
                              id="trasport-type"
                              class="border-0 bg-transparent ps-0 black fw-semibold"
                            >
                              <option value="1">Flight</option>
                              <option value="2">Car</option>
                              <option value="3">Cruise</option>
                              <option value="4">Train</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="filter-search h-100 text-center">
                    <button class="py-6 px-8 filter-button white btn-red">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchEngine;
