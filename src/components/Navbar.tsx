
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 md:left-64 z-40 backdrop-blur-md bg-background/90 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center ml-8 md:ml-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">PrimeTrade</span>
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
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-foreground p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-secondary">Trading</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-secondary">Markets</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-secondary">Features</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-secondary">About</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-secondary">Contact</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
