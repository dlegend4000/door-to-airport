import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plane, PlaneLanding, PlaneTakeoff, Calendar, Package, Heart, Lock, MapPin, Clock } from "lucide-react";

export const Hero = () => {
  const [formData, setFormData] = useState({
    airline: "",
    flyingFrom: "",
    flyingTo: "",
    date: "",
    bags: "1",
    flightTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";
      const response = await fetch(`${apiUrl}/api/submit-booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          airline: "",
          flyingFrom: "",
          flyingTo: "",
          date: "",
          bags: "1",
          flightTime: "",
        });
      } else {
        setSubmitStatus("error");
        console.error("Error:", data);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/background%20video.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1)', transformOrigin: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/20" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Title Section */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5), 0 0 12px rgba(0, 0, 0, 0.3)' }}>
            Your Bags Handled from your door to Dublin Airport
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-2 drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)' }}>
            Leaving Dublin? We collect from your address and store securely at Dublin Airport. 
            <span className="font-semibold text-white"> Arriving as a tourist?</span> We collect your luggage and transfer it straight to your hotel so you can explore straight away.
          </p>
          <p className="text-lg md:text-xl bg-gradient-primary bg-clip-text text-transparent font-medium">
            Enjoy stress-free journeys with DoorToAirport.
          </p>
        </div>

        {/* Horizontal Booking Form */}
        <div className="max-w-7xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-strong p-4 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-end">
              <div className="md:col-span-1">
                <div className="relative">
                  <Plane className="absolute left-3 top-3 h-5 w-5 text-muted-foreground z-10" />
                  <Select 
                    value={formData.airline} 
                    onValueChange={(value) => setFormData({ ...formData, airline: value })}
                    required
                  >
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Enter Airline" />
                    </SelectTrigger>
                    <SelectContent side="bottom">
                      <SelectItem value="Aer Lingus">Aer Lingus</SelectItem>
                      <SelectItem value="Ryanair">Ryanair</SelectItem>
                      <SelectItem value="British Airways">British Airways</SelectItem>
                      <SelectItem value="Lufthansa">Lufthansa</SelectItem>
                      <SelectItem value="KLM">KLM</SelectItem>
                      <SelectItem value="Air France">Air France</SelectItem>
                      <SelectItem value="Emirates">Emirates</SelectItem>
                      <SelectItem value="Qatar Airways">Qatar Airways</SelectItem>
                      <SelectItem value="Turkish Airlines">Turkish Airlines</SelectItem>
                      <SelectItem value="Swiss">Swiss</SelectItem>
                      <SelectItem value="Virgin Atlantic">Virgin Atlantic</SelectItem>
                      <SelectItem value="easyJet">easyJet</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="relative">
                  <PlaneTakeoff className="absolute left-3 top-3 h-5 w-5 text-muted-foreground z-10" />
                  <Select 
                    value={formData.flyingFrom} 
                    onValueChange={(value) => setFormData({ ...formData, flyingFrom: value })}
                    required
                  >
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="I'm flying from" />
                    </SelectTrigger>
                    <SelectContent side="bottom">
                      <SelectItem value="Dublin">Dublin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="relative">
                  <PlaneLanding className="absolute left-3 top-3 h-5 w-5 text-muted-foreground z-10" />
                  <Select 
                    value={formData.flyingTo} 
                    onValueChange={(value) => setFormData({ ...formData, flyingTo: value })}
                    required
                  >
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="I'm flying to" />
                    </SelectTrigger>
                    <SelectContent side="bottom">
                      <SelectItem value="London">London</SelectItem>
                      <SelectItem value="Paris">Paris</SelectItem>
                      <SelectItem value="Amsterdam">Amsterdam</SelectItem>
                      <SelectItem value="Berlin">Berlin</SelectItem>
                      <SelectItem value="Madrid">Madrid</SelectItem>
                      <SelectItem value="Rome">Rome</SelectItem>
                      <SelectItem value="Barcelona">Barcelona</SelectItem>
                      <SelectItem value="Frankfurt">Frankfurt</SelectItem>
                      <SelectItem value="Munich">Munich</SelectItem>
                      <SelectItem value="Vienna">Vienna</SelectItem>
                      <SelectItem value="Zurich">Zurich</SelectItem>
                      <SelectItem value="Brussels">Brussels</SelectItem>
                      <SelectItem value="Copenhagen">Copenhagen</SelectItem>
                      <SelectItem value="Stockholm">Stockholm</SelectItem>
                      <SelectItem value="Oslo">Oslo</SelectItem>
                      <SelectItem value="New York">New York</SelectItem>
                      <SelectItem value="Dubai">Dubai</SelectItem>
                      <SelectItem value="Doha">Doha</SelectItem>
                      <SelectItem value="Istanbul">Istanbul</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="date"
                    className="pl-10"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="time"
                    className="pl-10"
                    value={formData.flightTime}
                    onChange={(e) => setFormData({ ...formData, flightTime: e.target.value })}
                    required
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
                    value={formData.bags}
                    onChange={(e) => setFormData({ ...formData, bags: e.target.value })}
                    placeholder="1 checked item"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <Button className="w-full h-10" size="lg" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </div>
            
            <div className="bg-secondary rounded-lg p-3 mt-4">
              {submitStatus === "success" ? (
                <p className="text-sm text-center text-green-600 dark:text-green-400">
                  ✓ Request submitted successfully! We'll review and send you confirmation if we can handle your booking.
                </p>
              ) : submitStatus === "error" ? (
                <p className="text-sm text-center text-red-600 dark:text-red-400">
                  ✗ Error submitting request. Please try again or contact us directly.
                </p>
              ) : (
                <p className="text-sm text-center text-muted-foreground">
                  We'll review your request and send you confirmation if we can handle your booking
                </p>
              )}
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
                <h3 className="text-xl font-bold mb-2">Dublin Airport Storage</h3>
                <p className="text-muted-foreground">
                  Secure storage at Dublin Airport, ready for collection when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Airlines */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">We are compatible with your favourite airlines</h2>
          <div className="relative overflow-hidden mx-auto max-w-4xl">
            <div className="flex animate-scroll gap-16 md:gap-20 items-center">
              {/* First set */}
              <img src="/EasyJet-Logo.wine.svg" alt="EasyJet" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
              <img src="/british-airways-1.svg" alt="British Airways" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
              <img src="/images.png" alt="Airlines" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
              <img src="/4DW7dWoxE9f3pJFqRGtBpW.jpg" alt="Airline" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
              {/* Duplicate set for seamless loop */}
              <img src="/EasyJet-Logo.wine.svg" alt="EasyJet" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
              <img src="/british-airways-1.svg" alt="British Airways" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
              <img src="/images.png" alt="Airlines" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
              <img src="/4DW7dWoxE9f3pJFqRGtBpW.jpg" alt="Airline" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
