import { Calendar, Package, Plane, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Enter Your Details",
    description: "Fill in your pickup/delivery details and submit your request.",
  },
  {
    icon: Package,
    title: "We Review & Confirm",
    description: "We manually review your request and send confirmation if we can handle your booking.",
  },
  {
    icon: Plane,
    title: "Collection & Storage",
    description: "We collect from your door and store securely at Dublin Airport. Or if you're arriving, we collect from the airport and deliver to your hotel.",
  },
  {
    icon: CheckCircle,
    title: "Ready When You Are",
    description: "Your bags are safely stored at Dublin Airport or delivered to your hotel - ready when you need them.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Simple service for Dublin Airport storage and hotel transfers
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-medium">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
