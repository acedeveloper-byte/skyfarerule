import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import FlightHeader from '@/components/Flights/FlightHeader'
import FlightSearch from '@/components/FlightSection/FlightSearch';
import SearchFilter from '@/components/FlightSection/SearchFilter';
import Footer from '@/components/FlightSection/Footer';


const layout = () => {
  return (
    <>
<FlightHeader/>
    <div className="breadcrumb-bar breadcrumb-bg-05 text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-12">
                    <h2 className="breadcrumb-title mb-2">Flight</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="index.html"><i className="isax isax-home5"></i></a></li>
                            <li className="breadcrumb-item">Flight</li>
                            <li className="breadcrumb-item active" aria-current="page">Flight Lists</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
<FlightSearch/>
<SearchFilter/>

<Footer/>
    </>
  )
}

export default layout
