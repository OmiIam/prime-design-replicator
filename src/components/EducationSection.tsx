
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PRIMETRADE CAMPUSES</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">10+ WEALTH CREATION METHODS</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-panel p-6 flex flex-col">
            <div className="text-amber-500 text-3xl mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="currentColor" fillOpacity="0.2" rx="4"/>
                <path d="M17 8.5H7M9 12.5H15M12 16.5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">AMAZON FBA</h3>
            <p className="text-muted-foreground mb-8">
              Imagine launching a store overnight and tapping into the global marketplace by morning. E-Commerce is your gateway to rapid retail success.
            </p>
            <div className="mt-auto">
              <img src="/lovable-uploads/c7537af0-5a29-4e43-b287-ad43e4488097.png" alt="Amazon FBA" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="glass-panel p-6 flex flex-col">
            <div className="text-amber-500 text-3xl mb-6">
              <Bitcoin className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4">CRYPTO INVESTING</h3>
            <p className="text-muted-foreground mb-8">
              The Bull Run is making its rounds again early 2024. You need to be equipped. We cut through the complexity and get you to the core of crypto, where strategic investments meet swift returns.
            </p>
            <div className="mt-auto">
              <img src="/lovable-uploads/4650cba7-440f-48bf-b412-eca393ba56ea.png" alt="Crypto Investing" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="glass-panel p-6 flex flex-col">
            <div className="text-amber-500 text-3xl mb-6">
              <Bitcoin className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4">CRYPTO TRADING</h3>
            <p className="text-muted-foreground mb-8">
              Take advantage of the bull run and master the art of crypto trading in the Crypto Trading campus, where we empower you to navigate the markets with precision.
            </p>
            <div className="mt-auto">
              <img src="/lovable-uploads/8074c9bd-19fa-4765-b279-90fc6f0847b7.png" alt="Crypto Trading" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
