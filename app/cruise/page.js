import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import FlightHeader from "@/components/Flights/FlightHeader";
import CruiseFooter from '@/components/CruiseSection/CruiseFooter';
import CruiseSearch from '@/components/CruiseSection/CruiseSearch';
import CruiseFilter from '@/components/CruiseSection/CruiseFilter';




const page = () => {
  return (
    <>
  <FlightHeader/>
    <div className="breadcrumb-bar breadcrumb-bg-06 text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-12">
                    <h2 className="breadcrumb-title mb-2">Cruise</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">Cruise</li>
                            <li className="breadcrumb-item active" aria-current="page">Cruise Grid</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  


<CruiseSearch />

<CruiseFilter/>

<CruiseFooter/>
    </>
  )
}

export default page
