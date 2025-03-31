
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import MarketOverview from '@/components/MarketOverview';
import TradingTools from '@/components/TradingTools';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MarketOverview />
        <FeatureSection />
        <TradingTools />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
