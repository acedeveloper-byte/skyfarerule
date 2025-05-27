'use client'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FlightFooter from '@/components/Flights/FlightFooter'
import FlightHeader from '@/components/Flights/FlightHeader'
import TermsContent from '@/components/TermsSection/TermsContent';
import { FaArrowRight, FaHome } from 'react-icons/fa';
import Link from 'next/link';

const page = () => {
  return (
    <>
   <FlightHeader/>
       <div className="breadcrumb-bar breadcrumb-bg-02 text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-12">
                    <h1 className="breadcrumb-title mb-2">Terms & Conditions</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="/"><i className="isax isax-home5"></i></a></li>
                             <Link href="/" className='text-white text-decoration-none mx-2'><FaHome /></Link>
                
                  <li className="breadcrumb-item">Home</li>
                                 <li className="text-white mx-2 " ><FaArrowRight />Terms & Conditions</li>
                </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

<TermsContent/>
    <FlightFooter/>
    </>
  )
}

export default page
