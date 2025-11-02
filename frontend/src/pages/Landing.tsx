import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  PlaneLanding,
  PlaneTakeoff,
  MapPin,
  Luggage,
  Calendar,
  Package,
  Clock,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { ItineraryArrive } from "@/components/ItineraryArrive";
import { ItineraryLeave } from "@/components/ItineraryLeave";
import { ServiceFees } from "@/components/ServiceFees";



const Landing = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/hero");
    setTimeout(() => {
      const hero = document.getElementById("hero");
      if (hero) hero.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="bg-background py-24 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
        {/* Left Text */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
            Luggage drop-off, Same-day delivery service 
          </h1>
          <p className="text-muted-foreground text-lg text-black/80">
We offer same-day luggage collection and delivery between Dublin Airport and your hotel, home, or Airbnb. Whether you're flying in or flying out, you can explore Dublin straight away without carrying your bags around. 
          </p>
          <p className="text-sm uppercase tracking-wider text-black font-semibold">
            Become hands free when going to the airport or coming from the airport!
          </p>
          <ul className="text-sm md:text-base text-black/80 space-y-1">
            <li className="font-semibold text-black">
              • Available in limited areas
            </li>
            <li className="font-semibold text-black">
              • Same-Day Delivery Service*
            </li>
            <li>Delivery time may vary due to traffic, weather, or luggage volume.</li>
          </ul>

          <Button
            onClick={handleNavigate}
            size="lg"
            className="mt-6 text-lg px-10 py-6 rounded-xl group"
          >
            Schedule a Collection or Delivery
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/267055df-1059-4f51-b16c-3a3be3e2cc1f.png"
            alt="Luggage delivery process illustration"
            className="w-full max-w-2xl h-auto object-contain rounded-xl"
          />
        </div>
      </section>

      {/* --- Blue Separator --- */}
      <div className="w-full h-3 bg-blue-600" />

      <section id="itinerary-arrive">
         <ItineraryArrive />
        </section>

        <section id="itinerary-leave">
        <ItineraryLeave />
        </section>

        <section id="service-fees">
        <ServiceFees />
        </section>


      <Footer />
    </>
  );
};

export default Landing;
