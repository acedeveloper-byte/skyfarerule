import React from "react";
import RecentArticles from "./flight_components/RecentArticles";
import TourismServices from "./flight_components/TourismServices";
import KnowAbout from "./flight_components/KnowAbout";
import ServicesWork from "./flight_components/ServicesWork";
import PlaceCategoery from "./flight_components/PlaceCategoery";
import Testimonial from "./flight_components/Testimonial";

const FlightHome = () => {
  return (
    <>

  {/* <PlaceCategoery/> */}
  
<ServicesWork/>
    <KnowAbout/>
    <TourismServices/>
     <RecentArticles/>
     <Testimonial/>
    </>
  );
};

export default FlightHome;
