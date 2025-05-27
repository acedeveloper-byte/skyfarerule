import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FlightFooter from '@/components/Flights/FlightFooter'
import FlightHeader from '@/components/Flights/FlightHeader'
import PrivacyContent from '@/components/PrivacySection/PrivacyContent'
import Link from 'next/link';
import { FaArrowRight, FaHome } from 'react-icons/fa';

const page = () => {
  return (
    <div>
       <FlightHeader/>
       <div className="breadcrumb-bar breadcrumb-bg-02 text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-12">
                    <h1 className="breadcrumb-title mb-2">Privacy Policy</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <Link href="/" className='text-white text-decoration-none mx-2'><FaHome /></Link>
                
                  <li className="breadcrumb-item">Home</li>
                                 <li className="text-white mx-2 " ><FaArrowRight />Privacy Policy</li> </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

<PrivacyContent/>
    <FlightFooter/>
    </div>
  )
}

export default page
