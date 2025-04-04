import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import FlightHeader from "@/components/Flights/FlightHeader";
import FlightFooter from "@/components/Flights/FlightFooter";

const page = () => {
    return (
        <div style={{ overflow: "visible" }}>
            <FlightHeader />

            <div class="breadcrumb-bar breadcrumb-bg-02 text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <h2 class="breadcrumb-title mb-2">Blog </h2>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center mb-0">
                                    <li class="breadcrumb-item"><a href="/"><i class="isax isax-home5"></i></a></li>
                                    <li class="breadcrumb-item">Home</li>
                                    <li class="breadcrumb-item active" aria-current="page">Blog </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>



            <div class="content">
                <div class="container">
                    <div class="row justify-content-center">


                        <div class="col-xl-4 col-md-6">
                            <div class="blog-item mb-4 wow fadeInUp" data-wow-delay="0.2s">
                                <a href="" class="blog-img">
                                    <img src="/img/blog/blog-01.jpg" alt="img" />
                                </a>
                                <span class="badge  fs-13 fw-medium" style={{ background: 'color: #6D3E97' }}>Travel</span>
                                <div class="blog-info text-center">
                                    <div class="d-inline-flex align-items-center justify-content-center">
                                        <div class="d-inline-flex align-items-center border-end pe-3 me-3 mb-2">
                                            <a href="" class="d-flex align-items-center text-decoration-none">
                                                <span class="avatar avatar-sm me-2">
                                                    <img src="/img/users/user-01.jpg" class="rounded-circle border border-white text-decoration-none" alt="img" />
                                                </span>
                                                <p>Bryan Bradfield</p>
                                            </a>
                                        </div>
                                        <p class="text-white mb-2"><i class="isax isax-calendar-2 me-2"></i>14 May 2025</p>
                                    </div>
                                    <h5><a href="" className="text-decoration-none fs-5">Top 10 Hidden Gems places in Central Europe in 2025</a></h5>
                                </div>
                            </div>
                        </div>



                        <div class="col-xl-4 col-md-6">
                            <div class="blog-item mb-4 wow fadeInUp" data-wow-delay="0.2s">
                                <a href="" class="blog-img">
                                    <img src="/img/blog/blog-02.jpg" alt="img" />
                                </a>
                                <span class="badge  fs-13 fw-medium">Guide</span>
                                <div class="blog-info text-center">
                                    <div class="d-inline-flex align-items-center justify-content-center text-decoration-none">
                                        <div class="d-inline-flex align-items-center border-end pe-3 me-3 mb-2">
                                            <a href="" class="d-flex align-items-center text-decoration-none">
                                                <span class="avatar avatar-sm me-2">
                                                    <img src="/img/users/user-02.jpg" class="rounded-circle border border-white" alt="img" />
                                                </span>
                                                <p className="text-decoration-none fs-5"> Michell West</p>
                                            </a>
                                        </div>
                                        <p class="text-white mb-2"><i class="isax isax-calendar-2 me-2"></i>12 May 2025</p>
                                    </div>
                                    <h5><a href="" className="text-decoration-none fs-5">Exploring the World: Your Ultimate Dream Tour Itinerary</a></h5>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-4 col-md-6">
                            <div class="blog-item mb-4 wow fadeInUp" data-wow-delay="0.2s">
                                <a href="" class="blog-img">
                                    <img src="/img/blog/blog-02.jpg" alt="img" />
                                </a>
                                <span class="badge  fs-13 fw-medium">Guide</span>
                                <div class="blog-info text-center">
                                    <div class="d-inline-flex align-items-center justify-content-center">
                                        <div class="d-inline-flex align-items-center border-end pe-3 me-3 mb-2 ">
                                            <a href="" class="d-flex align-items-center text-decoration-none">
                                                <span class="avatar avatar-sm me-2">
                                                    <img src="/img/users/user-02.jpg" class="rounded-circle border border-white" alt="img" />
                                                </span>
                                                <p>Michell West</p>
                                            </a>
                                        </div>
                                        <p class="text-white mb-2"><i class="isax isax-calendar-2 me-2"></i>12 May 2025</p>
                                    </div>
                                    <h5><a href="" className="text-decoration-none fs-5">Exploring the World: Your Ultimate Dream Tour Itinerary</a></h5>
                                </div>
                            </div>
                        </div>


                        <nav class="pagination-nav">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="" aria-label="Previous">
                                        <span aria-hidden="true"><i class="fa-solid fa-chevron-left"></i></span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="">1</a></li>
                                <li class="page-item"><a class="page-link" href="">2</a></li>
                                <li class="page-item"><a class="page-link" href="">3</a></li>
                                <li class="page-item active"><a class="page-link" href="">4</a></li>
                                <li class="page-item"><a class="page-link" href="">5</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="" aria-label="Next">
                                        <span aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>


            <FlightFooter />
        </div>
    );
};

export default page;
