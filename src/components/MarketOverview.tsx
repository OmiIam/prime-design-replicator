
import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from "lucide-react";

const markets = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$42,685.24",
    change: "+2.41%",
    volume: "$28.5B",
    isPositive: true
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,254.12",
    change: "+3.74%",
    volume: "$15.2B",
    isPositive: true
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$0.52",
    change: "-1.25%",
    volume: "$892.5M",
    isPositive: false
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$102.86",
    change: "+5.62%",
    volume: "$2.7B",
    isPositive: true
  },
  {
    name: "Ripple",
    symbol: "XRP",
    price: "$0.61",
    change: "-0.87%",
    volume: "$1.4B",
    isPositive: false
  }
];

const MarketOverview = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Market Overview</h2>
            <p className="text-muted-foreground">
              Real-time price data for the most popular cryptocurrencies
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>View All Markets</Button>
          </div>
        </div>
        
        <div className="glass-panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left p-4">Asset</th>
                  <th className="text-right p-4">Price</th>
                  <th className="text-right p-4">24h Change</th>
                  <th className="text-right p-4">24h Volume</th>
                  <th className="text-right p-4"></th>
                </tr>
              </thead>
              <tbody>
                {markets.map((market, index) => (
                  <tr key={index} className="border-b border-border/30 hover:bg-secondary/20">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center mr-3">
                          {market.symbol.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium">{market.name}</div>
                          <div className="text-sm text-muted-foreground">{market.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right p-4 font-medium">{market.price}</td>
                    <td className={`text-right p-4 ${market.isPositive ? 'text-trading-positive' : 'text-trading-negative'}`}>
                      <span className="flex items-center justify-end">
                        {market.isPositive ? (
                          <TrendingUp className="w-4 h-4 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 mr-1" />
                        )}
                        {market.change}
                      </span>
                    </td>
                    <td className="text-right p-4 text-muted-foreground">{market.volume}</td>
                    <td className="text-right p-4">
                      <Button variant="outline" size="sm">Trade</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
