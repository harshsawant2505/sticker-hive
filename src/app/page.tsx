import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import NewFooter from "./components/NewFooter";

export default function Home() {
  return (
    <div className="bg-custom-gradient overflow-hidden ">
        <Navbar/> 
        <Hero />
        <Benefits />
        <NewFooter />
     
      </div>  
  );
}
