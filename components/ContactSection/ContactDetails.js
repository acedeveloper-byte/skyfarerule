import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const ContactDetails = () => {
    return (

        <div className="mb-4 mb-lg-0">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="mb-3">Send Us A Message</h2>
                </div>
            </div>
            <div className="mb-4">
                <p>Fill out the form added below and get your concerns solved in no time whenever you want.</p>
            </div>
            <div className="border-bottom mb-4">
                <div className="d-flex align-items-center mb-4">
                    <span className="avatar avatar-lg rounded-circle bg-light  text-gray-6 me-2"><i className="isax isax-sms5 fs-24"></i></span>
                    <div>
                        <p className="fs-14 mb-0">Email Address</p>
                        <h6 className="text-gray-6"><a href="" className="text-decoration-none text-dark" >contact@skyfarerules.com</a></h6>
                    </div>
                </div>
            </div>
            <div className="border-bottom mb-4">
                <div className="d-flex align-items-center mb-4">
                    <span className="avatar avatar-lg rounded-circle bg-light  text-gray-6 me-2"><i className="isax isax-call-calling5 fs-24"></i></span>
                    <div>
                        <p className="fs-14 mb-0">Phone Number</p>
                        <h6 className="text-gray-6">+1 (855) 838-5939</h6>
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg rounded-circle bg-light  text-gray-6 me-2"><i className="isax isax-map-15 fs-24"></i></span>
                    <div>
                        <p className="fs-14 mb-0">Our Location</p>
                        <h6 className="text-gray-6">7575 KIRBY DR APT 3403, HOUSTON, TX 77030</h6>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactDetails
