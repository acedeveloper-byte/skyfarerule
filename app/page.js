import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import FlightHome from "@/components/Flights/FlightHome";
import FlightHeader from "@/components/Flights/FlightHeader";

export default function Home() {
  return (
    <>
      <FlightHeader />
      <FlightHome />
    </>
  );
}
