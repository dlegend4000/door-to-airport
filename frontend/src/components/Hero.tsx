import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, PlaneLanding, PlaneTakeoff, Calendar, Package, Heart, Lock, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/ScreenRecording_10-28-2025 10-31-50_1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/5 to-background/10" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Title Section */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Your Bags Handled from Door to Destination
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-2">
            Your bags collected from your address — <span className="font-semibold text-white">checked into your flight</span> — delivered to your destination.
          </p>
          <p className="text-lg md:text-xl bg-gradient-primary bg-clip-text text-transparent font-medium">
            Enjoy stress-free journeys with DoorToAirport.
          </p>
        </div>

        {/* Horizontal Booking Form */}
        <div className="max-w-7xl mx-auto mb-16">
          <form className="bg-card rounded-2xl shadow-strong p-4 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
              <div className="md:col-span-1">
                <div className="relative">
                  <Plane className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Enter Airline"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="relative">
                  <PlaneTakeoff className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="I'm flying from"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="relative">
                  <PlaneLanding className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="I'm flying to"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="date"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="relative">
                  <Package className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="number"
                    min="1"
                    max="10"
                    defaultValue="1"
                    placeholder="1 checked item"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <Button className="w-full h-10" size="lg">
                  Search
                </Button>
              </div>
            </div>
            
            <div className="bg-secondary rounded-lg p-3 mt-4">
              <p className="text-sm text-center text-muted-foreground">
                We'll reach out to you soon with confirmation and pricing details
              </p>
            </div>
          </form>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Over 800,000 bags</h3>
                <p className="text-muted-foreground">
                  Handled with care. That's a lot of weight off travellers' hands.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bags Sealed & Tracked</h3>
                <p className="text-muted-foreground">
                  We seal your bags at pickup, monitor them 24/7, & give you a tracking link.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Guaranteed Delivery</h3>
                <p className="text-muted-foreground">
                  Your bag makes it to your flight, or we'll make it up to you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Airlines */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Official bag check in partner of:</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            <div className="text-foreground/60 font-semibold">Edelweiss</div>
            <div className="text-foreground/60 font-semibold">Virgin Atlantic</div>
            <div className="text-foreground/60 font-semibold">Singapore Airlines</div>
            <div className="text-foreground/60 font-semibold">easyJet</div>
            <div className="text-foreground/60 font-semibold">Lufthansa</div>
            <div className="text-foreground/60 font-semibold">British Airways</div>
            <div className="text-foreground/60 font-semibold">SWISS</div>
          </div>
        </div>
      </div>

    </section>
  );
};
