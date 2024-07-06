import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
export default function Home() {
  return (
    <div className="bg-custom-gradient  ">
        <Navbar/> 
        <Hero />
        <Benefits />
     
      </div>  
  );
}
