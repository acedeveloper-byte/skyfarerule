import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import FlightHeader from '@/components/Flights/FlightHeader'
import FlightSearch from '@/components/FlightSection/FlightSearch';


const layout = () => {
  return (
    <>
<FlightHeader/>
    <div class="breadcrumb-bar breadcrumb-bg-05 text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h2 class="breadcrumb-title mb-2">Flight</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><a href="index.html"><i class="isax isax-home5"></i></a></li>
                            <li class="breadcrumb-item">Flight</li>
                            <li class="breadcrumb-item active" aria-current="page">Flight Lists</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
<FlightSearch/>
    </>
  )
}

export default layout
