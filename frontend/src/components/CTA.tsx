import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Travel Light?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of travelers who've discovered the smarter way to handle luggage. Book your first delivery today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 group"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
            >
              Calculate Price
            </Button>
          </div>
          <div className="flex flex-wrap gap-8 justify-center pt-8 text-sm opacity-90">
            <div className="text-center">
              <div className="text-3xl font-bold">15,000+</div>
              <div>Bags Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9/5</div>
              <div>Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div>Support Available</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
};
