import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="card bg-light-200 shadow-none mb-0">
      <div className="card-body">
        <div className="mb-3">
          <h2 className="mb-1">Get in Touch</h2>
          <p className="text-gray-6 mb-1">How we can help you? Please write down your query</p>
        </div>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  <FaUser className="me-2" /> First Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  <FaUser className="me-2" /> Last Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">
                  <FaEnvelope className="me-2" /> Email <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">
                  <FaPhone className="me-2" /> Phone <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">
                  <FaCommentDots className="me-2" /> Message <span className="text-danger">*</span>
                </label>
                <textarea className="form-control" rows="3"></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
