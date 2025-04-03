import React from "react";
import RecentArticles from "./flight_components/RecentArticles";
import KnowAbout from "./flight_components/KnowAbout";
import ServicesWork from "./flight_components/ServicesWork";
import Testimonial from "./flight_components/Testimonial";
import FlightDestination from "./flight_components/FlightDestination";
import PopularTours from "./flight_components/PopularTours";
import FlightDisclaimer from "./flight_components/FlightDisclaimer";

const FlightHome = () => {
  return (
    <>

  {/* <PlaceCategoery/> */}
  <FlightDestination/>
<ServicesWork/>

    <KnowAbout/>
    {/* <PopularTours/> */}
    
     <RecentArticles/>
     <Testimonial/>

     {/* <FlightDisclaimer /> */}

     
    </>
  );
};

export default FlightHome;
