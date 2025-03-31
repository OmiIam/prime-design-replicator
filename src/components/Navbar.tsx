
import React from "react";
import { Button } from "@/components/ui/button";
import { User, Search, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 md:left-20 lg:left-20 z-30 backdrop-blur-md bg-background/90 border-b border-border/30 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center ml-8 md:ml-0">
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-palette-deepMauve to-palette-mauve flex items-center justify-center mr-2 shadow-lg">
                <BarChart3 className="w-6 h-6 text-palette-cream" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-palette-deepMauve to-palette-mauve bg-clip-text text-transparent">PrimeTrade</span>
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
            <Button variant="ghost" size="icon" className="hover:bg-palette-mauve/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-palette-mauve/10">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-gradient-to-r from-palette-deepMauve to-palette-mauve text-palette-cream hover:opacity-90 hidden md:flex shadow-md">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
