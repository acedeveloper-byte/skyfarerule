import "bootstrap/dist/css/bootstrap.min.css";
import FlightHome from "@/components/Flights/FlightHome";
import FlightHeader from "@/components/Flights/FlightHeader";
import FlightFooter from "@/components/Flights/FlightFooter";
import SearchEngine from "@/components/SearchEngine";

export default function Home() {
  return (
    <div class="style-5">
      <FlightHeader />
      <SearchEngine />
      <FlightHome />

     
      <FlightFooter />
    </div>
)}
