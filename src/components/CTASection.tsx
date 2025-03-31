
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="glass-panel p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Trading with PrimeTrade Today
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Join over 320,000 traders worldwide who trust PrimeTrade for their cryptocurrency trading needs.
              Sign up in minutes and start trading with as little as $10.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="font-medium px-8">
                Create Account <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium px-8">
                View Markets
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
