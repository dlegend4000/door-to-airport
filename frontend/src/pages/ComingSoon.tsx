import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Coming Soon</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We're working hard to bring you this feature. Stay tuned!
          </p>
          <Link to="/">
            <Button size="lg">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;

