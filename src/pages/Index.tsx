
import React from 'react';
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
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen ml-0 md:ml-64">
        <Navbar />
        <main className="flex-grow">
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
