'use client';
import React from 'react';

const destinations = [
  { id: 1, name: 'Travel to New York',  image: '/img/destination/destination-07.jpg' },
  { id: 2, name: 'Travel to Paris',  image: '/img/destination/destination-09.jpg' },
  { id: 3, name: 'Travel to Rome',  image: '/img/destination/destination-11.jpg' },
  { id: 4, name: 'Travel to Bali',  image: '/img/destination/destination-13.jpg' },
  { id: 5, name: 'Travel to Santorini',  image: '/img/destination/destination-08.jpg' },
  { id: 6, name: 'Travel to Miami',  image: '/img/destination/destination-10.jpg' },
  { id: 7, name: 'Travel to Qatar',  image: '/img/destination/destination-12.jpg' },
  { id: 8, name: 'Travel to Canada',  image: '/img/destination/destination-14.jpg' },
];

const FlightDestination = () => {
  return (
    <div>
      <section className="section place-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10 text-center">
              <div className="section-header text-center">
                <h2 className="mb-2 fw-bold">
                Trending  <span className="text-primary text-decoration-none text-dark ">Destinations</span>
                </h2>
                <p className="sub-title">
                  Embark on unforgettable journeys to the world's most sought-after cruise ports
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {destinations.map((destination) => (
              <div key={destination.id} className="col-lg-3 col-md-6 col-12">
                <div className="destination-set wow fadeInUp">
                  <div className="destination-img">
                    <img src={destination.image} alt={destination.name} />
                  </div>
                  <div className="destination-content d-flex align-items-center justify-content-center flex-column w-100">
                    <h5 className="text-white fs-20 fw-semibold mb-1">{destination.name}</h5>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightDestination;
