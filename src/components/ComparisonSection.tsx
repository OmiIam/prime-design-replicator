
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock, Hand } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-2">WE CAN ONLY SHOW YOU THE DOOR</p>
          <h2 className="text-4xl md:text-6xl font-bold">THE CHOICE IS YOURS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Do Nothing Column */}
          <div className="glass-panel border border-muted p-8 flex flex-col">
            <div className="flex justify-center mb-6">
              <Clock className="h-14 w-14 text-muted-foreground" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-2">DO NOTHING</h3>
            <p className="text-center text-muted-foreground mb-6">Watch Netflix</p>
            
            <div className="border-t border-border my-6"></div>
            
            <h4 className="text-2xl font-medium text-center mb-8">Lose 8 hours a day</h4>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>Work for someone else (8h a day)</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>Stay stagnant</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>Work a 9-5</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>Pay $35,000 for University</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>Stay unfulfilled</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>Hang around losers</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full mt-auto">
              Remain an Employee
            </Button>
          </div>
          
          {/* Take Action Column */}
          <div className="glass-panel border border-primary p-8 flex flex-col">
            <div className="flex justify-center mb-6">
              <Hand className="h-14 w-14 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-2">TAKE ACTION</h3>
            <p className="text-center text-muted-foreground mb-6">Start Earning Today</p>
            
            <div className="border-t border-border my-6"></div>
            
            <h4 className="text-2xl font-medium text-center mb-8">GET STARTED</h4>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Step-by-step lessons</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>12+ wealth creation methods</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Access to millionaire mentors</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Connect with 113,000+ others</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>No experience needed</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Custom-made learning app</span>
              </div>
            </div>
            
            <p className="text-center text-sm mb-4">Cancel anytime, risk-free</p>
            
            <Button className="w-full bg-amber-700 hover:bg-amber-600 border border-amber-500">
              JOIN PRIMETRADE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
