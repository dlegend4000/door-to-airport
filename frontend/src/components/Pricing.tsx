import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Standard",
    price: "€25",
    description: "Perfect for light travellers",
    features: [
      "Up to 2 bags (23kg each)",
      "Standard delivery time",
      "Basic tracking",
      "€500 insurance per bag",
      "SMS notifications",
    ],
  },
  {
    name: "Premium",
    price: "€45",
    description: "Most popular choice",
    features: [
      "Up to 4 bags (23kg each)",
      "Priority handling",
      "Live GPS tracking",
      "€1000 insurance per bag",
      "Photo proof of delivery",
      "Flexible pickup window",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "€75",
    description: "For frequent flyers",
    features: [
      "Up to 6 bags (32kg each)",
      "Express 2-hour delivery",
      "Dedicated support line",
      "€2000 insurance per bag",
      "White glove service",
      "Priority pickup",
      "Corporate invoicing",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your travel needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'border-primary shadow-strong scale-105' 
                  : 'border-border shadow-soft'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="mb-4">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">per delivery</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          * Additional bags charged at €8 per bag. Distance-based pricing applies for locations over 10km.
        </p>
      </div>
    </section>
  );
};
