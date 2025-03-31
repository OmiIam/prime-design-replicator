
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Pause, Volume2, VolumeX, TrendingUp, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  const togglePlay = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-palette-deepMauve/20 to-palette-mauve/20 text-palette-deepMauve text-sm font-medium">
              Next-Generation Trading Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-palette-darkPurple to-palette-deepMauve bg-clip-text text-transparent">Advanced</span>{' '}
              <span className="relative">
                Trading
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-palette-mauve to-palette-deepMauve/50"></span>
              </span>{' '}
              <span className="text-foreground">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-lg">
              Advanced trading tools and analytics for professional traders. Start your trading journey with PrimeTrade today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-medium px-8 bg-gradient-to-r from-palette-deepMauve to-palette-mauve hover:from-palette-deepMauve/90 hover:to-palette-mauve/90 shadow-lg">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium px-8 border-palette-mauve/50 hover:bg-palette-mauve/10">
                View Markets
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4">
              <div className="glass-panel-highlight px-4 py-2">
                <p className="text-muted-foreground text-sm">Trading Volume</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-palette-deepMauve to-palette-mauve bg-clip-text text-transparent">$12.5B+</p>
              </div>
              <div className="glass-panel-highlight px-4 py-2">
                <p className="text-muted-foreground text-sm">Active Traders</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-palette-deepMauve to-palette-mauve bg-clip-text text-transparent">320K+</p>
              </div>
              <div className="glass-panel-highlight px-4 py-2">
                <p className="text-muted-foreground text-sm">Supported Assets</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-palette-deepMauve to-palette-mauve bg-clip-text text-transparent">250+</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="glass-panel-highlight p-2 shadow-xl mb-8 gradient-border">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-palette-deepMauve/30 to-transparent z-10 pointer-events-none"></div>
                <video 
                  id="hero-video"
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                  muted={isMuted}
                  loop
                  playsInline
                >
                  <source src="https://primetrade.finance/assets/videos/hero-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button 
                    onClick={togglePlay}
                    className="bg-gradient-to-r from-palette-deepMauve/80 to-palette-mauve/80 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-105"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 z-20">
                  <button 
                    onClick={toggleMute}
                    className="bg-background/40 hover:bg-background/60 p-2 rounded-full backdrop-blur-sm"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="glass-panel-highlight p-6 shadow-xl gradient-border">
              <div className="chart-container">
                <svg className="w-full h-full" viewBox="0 0 800 350">
                  <path
                    d="M0,280 C100,230 200,260 300,180 C400,100 500,120 600,90 C700,60 800,40 800,40"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                  />
                  <path
                    d="M0,280 C100,230 200,260 300,180 C400,100 500,120 600,90 C700,60 800,40 800,40 V350 H0 Z"
                    fill="url(#areaGradient)"
                    fillOpacity="0.2"
                    stroke="none"
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4F4557" />
                      <stop offset="100%" stopColor="#6D5D6E" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4F4557" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#4F4557" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute top-4 left-4 flex flex-col">
                  <div className="font-medium text-lg text-palette-mauve">BTC/USD</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-palette-deepMauve to-palette-mauve bg-clip-text text-transparent">$42,685.24</div>
                  <div className="text-trading-positive flex items-center">
                    +2.41% <span className="ml-1">today</span>
                  </div>
                </div>

                <div className="absolute right-4 top-4 bottom-4 w-32 glass-panel flex flex-col p-2 bg-gradient-to-b from-palette-cream/10 to-palette-cream/5">
                  <div className="text-xs text-muted-foreground mb-2">Quick Trade</div>
                  <div className="flex gap-1 mb-2">
                    <button className="bg-trading-positive text-white text-xs py-1 flex-1 rounded">Buy</button>
                    <button className="bg-muted text-muted-foreground text-xs py-1 flex-1 rounded">Sell</button>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <Button size="sm" className="w-full bg-gradient-to-r from-palette-deepMauve to-palette-mauve hover:opacity-90">Trade Now</Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 glass-panel p-3 animate-pulse-slow bg-gradient-to-r from-palette-mauve/20 to-palette-deepMauve/10">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-trading-positive mr-2"></div>
                <span className="text-sm font-medium">Live Trading</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
