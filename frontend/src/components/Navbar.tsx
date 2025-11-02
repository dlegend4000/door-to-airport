import { Button } from "@/components/ui/button";
import { Package, LogOut, User } from "lucide-react";
import { AuthDialog } from "./AuthDialog";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Package className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">TakeMyLuggage</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/tracking" className="text-sm font-medium hover:text-primary transition-colors">
              Track Order
            </Link>
            <a href="mailto:jfunto@gmail.com" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {user.email?.charAt(0).toUpperCase() || <User className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.displayName || "User"}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <AuthDialog />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
