
import React from "react";
import { 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  DollarSign, 
  Clock
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Professional Charts",
    description: "Advanced charting with technical indicators and drawing tools for in-depth market analysis."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Secure Trading",
    description: "Enterprise-grade security with 2FA, cold storage, and regular security audits."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our high-performance matching engine."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Market Analytics",
    description: "Real-time market data and insights to help you make informed trading decisions."
  },
  {
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    title: "Competitive Fees",
    description: "Low trading fees with volume-based discounts for active traders."
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PrimeTrade</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Our platform offers advanced tools and features designed for both beginners and professional traders
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 transition-all hover:translate-y-[-5px] hover:shadow-lg"
            >
              <div className="bg-secondary/50 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
