
import React from "react";
import { Check } from "lucide-react";

interface FeaturesListProps {
  title: string;
  features: string[];
  icon?: React.ReactNode;
}

const FeaturesList = ({ title, features, icon }: FeaturesListProps) => {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        {icon && <div className="text-white">{icon}</div>}
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="glass-panel px-6 py-4 flex items-center">
            <Check className="mr-2 h-5 w-5 text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeaturesListSection = () => {
  const educationFeatures = [
    "World-class custom built learning application",
    "Scale from Zero to $10k/month as fast as possible",
    "Master skills you need to maximize your income"
  ];

  const networkFeatures = [
    "Celebrate your wins with people who understand",
    "Make like-minded friends on your journey",
    "Network with 113,000+ students"
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img src="/lovable-uploads/f26ebb1d-6941-4d32-a5f1-977ddd9bff40.png" alt="Mobile App" className="w-full max-w-md mx-auto" />
          </div>
          <div className="order-1 md:order-2">
            <FeaturesList 
              title="VITAL LIFE LESSONS" 
              features={educationFeatures} 
              icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L3 8L12 12L21 8L12 4Z" stroke="currentColor" strokeWidth="2" />
                <path d="M3 16L12 20L21 16" stroke="currentColor" strokeWidth="2" />
                <path d="M3 12L12 16L21 12" stroke="currentColor" strokeWidth="2" />
              </svg>}
            />
            
            <FeaturesList 
              title="PRIVATE NETWORK" 
              features={networkFeatures} 
              icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L3 8L12 12L21 8L12 4Z" stroke="currentColor" strokeWidth="2" />
                <path d="M3 16L12 20L21 16" stroke="currentColor" strokeWidth="2" />
                <path d="M3 12L12 16L21 12" stroke="currentColor" strokeWidth="2" />
              </svg>}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesListSection;
