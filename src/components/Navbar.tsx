
import React from "react";
import { Button } from "@/components/ui/button";
import { User, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 md:left-20 lg:left-20 z-30 backdrop-blur-md bg-background/90 border-b border-border/30 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center ml-8 md:ml-0">
            <a href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-gradient-purple">PrimeTrade</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Trading</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Markets</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hidden md:flex">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
