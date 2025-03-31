
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import MarketOverview from '@/components/MarketOverview';
import TradingTools from '@/components/TradingTools';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import EducationSection from '@/components/EducationSection';
import FeaturesListSection from '@/components/FeaturesListSection';
import ComparisonSection from '@/components/ComparisonSection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  // Check if screen is mobile on initial load
  useEffect(() => {
    const checkMobile = () => {
      setIsSidebarCollapsed(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow mt-16">
          <HeroSection />
          <MarketOverview />
          <EducationSection />
          <FeaturesListSection />
          <FeatureSection />
          <TradingTools />
          <ComparisonSection />
          <FAQSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
