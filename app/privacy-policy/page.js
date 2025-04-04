import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FlightFooter from '@/components/Flights/FlightFooter'
import FlightHeader from '@/components/Flights/FlightHeader'
import PrivacyContent from '@/components/PrivacySection/PrivacyContent'

const page = () => {
  return (
    <div>
       <FlightHeader/>
       <div className="breadcrumb-bar breadcrumb-bg-02 text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-12">
                    <h2 className="breadcrumb-title mb-2">Privacy Policy</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="/"><i className="isax isax-home5"></i></a></li>
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                        </ol>
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
