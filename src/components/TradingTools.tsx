
import React from "react";
import { Button } from "@/components/ui/button";

const TradingTools = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powerful Trading Tools
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our platform offers a comprehensive suite of trading tools designed to give you an edge in the market. 
              From advanced charting to real-time market data, we provide everything you need to make informed trading decisions.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">01</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Advanced Charting</h3>
                  <p className="text-muted-foreground">
                    Multiple timeframes, 50+ technical indicators, and drawing tools for comprehensive analysis.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">02</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Order Types</h3>
                  <p className="text-muted-foreground">
                    Multiple order types including market, limit, stop, and trailing stop orders for flexible trading strategies.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">03</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">API Access</h3>
                  <p className="text-muted-foreground">
                    Robust API for automated trading and building custom trading applications.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button size="lg">Explore Tools</Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="glass-panel p-6 h-full">
              <div className="mb-4 flex justify-between items-center">
                <div>
                  <div className="text-sm text-muted-foreground">Current Price</div>
                  <div className="font-bold text-2xl">$42,685.24</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">1H</Button>
                  <Button variant="outline" size="sm">1D</Button>
                  <Button size="sm">1W</Button>
                  <Button variant="outline" size="sm">1M</Button>
                </div>
              </div>
              
              <div className="chart-container">
                <svg className="w-full h-full" viewBox="0 0 800 350">
                  {/* Volume bars */}
                  {Array.from({ length: 30 }).map((_, i) => (
                    <rect
                      key={i}
                      x={i * 26}
                      y={300 - Math.random() * 50}
                      width="18"
                      height={Math.random() * 50}
                      fill="#3F83F8"
                      opacity="0.3"
                    />
                  ))}
                  
                  {/* Price line */}
                  <path
                    d="M0,200 C50,180 100,240 150,220 C200,200 250,150 300,140 C350,130 400,170 450,190 C500,210 550,160 600,120 C650,80 700,100 800,80"
                    fill="none"
                    stroke="#3F83F8"
                    strokeWidth="3"
                  />
                </svg>
                
                {/* Indicator values */}
                <div className="absolute right-4 top-4 space-y-1">
                  <div className="glass-panel px-3 py-1 text-xs">
                    <span className="text-muted-foreground mr-2">RSI:</span>
                    <span className="font-medium">62.5</span>
                  </div>
                  <div className="glass-panel px-3 py-1 text-xs">
                    <span className="text-muted-foreground mr-2">MACD:</span>
                    <span className="font-medium text-trading-positive">+12.4</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground">24h High</div>
                    <div className="font-medium">$43,256.78</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">24h Low</div>
                    <div className="font-medium">$41,892.30</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground text-right">24h Volume</div>
                  <div className="font-medium">$28.5B</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingTools;
