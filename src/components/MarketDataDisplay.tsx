import React, { useState, useEffect } from "react";
import { getTicker, getTrades } from "@services/binance.api";
import TradesDataGrid from "./TradesDataGrid";

interface MarketDataDisplayProps {
  pair: string;
}

const MarketDataDisplay: React.FC<MarketDataDisplayProps> = ({ pair }) => {
  const [tickerData, setTickerData] = useState<any>(null);
  const [tradesData, setTradesData] = useState<any[]>([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const ticker = await getTicker(pair);
        setTickerData(ticker);

        const trades = await getTrades(pair);
        // Map trades data to include an id field
        const tradesWithId = trades.map((trade: any, index: number) => ({
          id: index,
          ...trade,
        }));
        setTradesData(tradesWithId);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMarketData();
  }, [pair]);

  return (
    <div>
      {tickerData && (
        <div>
          <h2>{pair} Ticker</h2>
          <p>Price Change: {tickerData.priceChange}</p>
          <p>Price Change Percent: {tickerData.priceChangePercent}</p>
          <p>Last Price: {tickerData.lastPrice}</p>
          <p>Volume: {tickerData.volume}</p>
        </div>
      )}

      <h2>{pair} Recent Trades</h2>
      <TradesDataGrid trades={tradesData} />
    </div>
  );
};

export default MarketDataDisplay;
