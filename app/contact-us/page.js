'use client';
import React from 'react';
import { FaHome } from "react-icons/fa";

import FlightHeader from '@/components/Flights/FlightHeader';
import FlightFooter from '@/components/Flights/FlightFooter';
import ContactDetails from '@/components/ContactSection/ContactDetails';
import ContactForm from '@/components/ContactSection/ContactForm';

import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <>
      <FlightHeader />

      <div className="breadcrumb-bar breadcrumb-bg-02 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title mb-2">Contact Us</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  
                    <Link href="/" className='text-white text-decoration-none mx-2'><FaHome /></Link>
                
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Container className="my-5">
        <Row>
          <Col lg={6}>
            <ContactDetails />
          </Col>
          <Col lg={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>

      <FlightFooter />
    </>
  );
};

export default ContactPage;
