import { Shield, Clock, Bell, Smartphone, Lock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Every bag is covered with comprehensive insurance for complete peace of mind.",
  },
  {
    icon: Clock,
    title: "Flexible Service",
    description: "From Dublin Airport storage for departures to hotel transfers for arriving tourists.",
  },
  {
    icon: Bell,
    title: "Real-Time Updates",
    description: "Live tracking and SMS notifications at every stage of the journey.",
  },
  {
    icon: Smartphone,
    title: "Simple Request",
    description: "Enter your details and submit - we'll confirm if we can handle your booking.",
  },
  {
    icon: Lock,
    title: "Secure Storage",
    description: "Climate-controlled facility with 24/7 security and barcode tracking.",
  },
  {
    icon: Award,
    title: "Trusted Service",
    description: "Rated 4.9/5 stars by thousands of happy travellers.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose DoorToAirport</h2>
          <p className="text-lg text-muted-foreground">
            Professional luggage delivery you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
