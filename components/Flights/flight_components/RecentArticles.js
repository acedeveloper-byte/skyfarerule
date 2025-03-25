import React from 'react'

const RecentArticles = () => {
  return (
    <div>

    <section className="section blog-section blog-sec-six">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="section-header-six">
                        <span className="badge badge-soft-primary rounded-pill mb-1">Recent Blog</span>
                        <h2>Checkout our Recent Articles<span className="text-primary">.</span></h2>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-end">
                        <a href="blog-grid" className="btn btn-dark sec-head-btn">View All Blogs<i className="isax isax-arrow-right-3 ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="card shadow-none blog-grid-six">
                        <div className="card-img">
                            <a href="blog-details">
                                <img src="/img/blog/blog-30.jpg" className="rounded" alt="Img" />
                            </a>
                            <span className="badge bg-primary">Booking</span>
                        </div>
                        <div className="card-body">
                            <h5 className="mb-2"><a href="blog-details" className="text-decoration-none text-dark">It empowers designers to swiftly created</a></h5>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u</p>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <a href="" className="avatar avatar-md flex-shrink-0 me-2">
                                        <img src="/img/users/user-01.jpg" className="rounded-circle" alt="img" />
                                    </a>
                                    <h6 className="fs-16 fw-normal"><a href="" className='text-decoration-none text-dark'>Andrew</a></h6>
                                </div>
                                <span className="d-inline-flex align-items-center"><i className="isax isax-calendar me-2 fs-20"></i>27 Sep 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card shadow-none blog-grid-six">
                        <div className="row align-items-center">
                            <div className="col-md-6 ">
                                <div className="card-img flex-fill">
                                    <a href="blog-details">
                                        <img src="/img/blog/blog-31.jpg" className="rounded w-100 h-100" alt="Img" />
                                    </a>
                                    <span className="badge bg-primary">Booking</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body ps-md-0 flex-fill">
                                    <h5 className="mb-2"><a href="blog-details" className="text-decoration-none text-dark">It empowers designers to swiftly created</a></h5>
                                    <p className="mb-4 text-truncate line-clamb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <a href="" className="avatar avatar-md flex-shrink-0 me-2">
                                                <img src="/img/users/user-01.jpg" className="rounded-circle" alt="img" />
                                            </a>
                                            <h6 className="fs-16 fw-normal"><a href="" className='text-decoration-none text-dark'>Andrew</a></h6>
                                        </div>
                                        <span className="d-inline-flex align-items-center"><i className="isax isax-calendar me-2 fs-20"></i>27 Sep 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-none blog-grid-six">
                        <div className="row align-items-center">
                            <div className="col-md-6 ">
                                <div className="card-img flex-fill">
                                    <a href="blog-details">
                                        <img src="/img/blog/blog-32.jpg" className="rounded w-100 h-100" alt="Img" />
                                    </a>
                                    <span className="badge bg-primary">Booking</span>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="card-body ps-md-0 flex-fill">
                                    <h5 className="mb-2"><a href="blog-details" className="text-decoration-none text-dark" >It empowers designers to swiftly created</a></h5>
                                    <p className="mb-4 text-truncate line-clamb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <a href="" className="avatar avatar-md flex-shrink-0 me-2">
                                                <img src="/img/users/user-01.jpg" className="rounded-circle" alt="img" />
                                            </a>
                                            <h6 className="fs-16 fw-normal"><a href="" className='text-decoration-none text-dark'>Andrew</a></h6>
                                        </div>
                                        <span className="d-inline-flex align-items-center"><i className="isax isax-calendar me-2 fs-20"></i>27 Sep 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default RecentArticles
