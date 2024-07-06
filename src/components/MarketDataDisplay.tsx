import React, { useState, useEffect } from "react";
import { getTicker, getTrades } from "@services/binance.api";
import { Card, DataDisplay, DataLabel, DataContent } from "./styledComponents";
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
    <>
      {tickerData && (
        <Card>
          <h2>{pair} Ticker</h2>
          <DataDisplay>
            <span className="flex-col">
              <DataLabel>Price Change: </DataLabel>
              <DataContent>{tickerData.priceChange}</DataContent>
            </span>
            <span className="flex-col">
              <DataLabel>Price Change Percent: </DataLabel>
              <DataContent>{tickerData.priceChangePercent}</DataContent>
            </span>
            <span className="flex-col">
              <DataLabel>Last Price: </DataLabel>
              <DataContent>{tickerData.lastPrice}</DataContent>
            </span>
            <span className="flex-col">
              <DataLabel>Volume: </DataLabel>
              <DataContent>{tickerData.volume}</DataContent>
            </span>
          </DataDisplay>
        </Card>
      )}

      <Card>
        <h2>{pair} Recent Trades</h2>
        <TradesDataGrid trades={tradesData} />
      </Card>
    </>
  );
};

export default MarketDataDisplay;
