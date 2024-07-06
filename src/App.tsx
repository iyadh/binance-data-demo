// src/App.tsx

import React, { useState } from "react";
import CurrencyPairForm from "./components/CurrencyPairForm";
import MarketDataDisplay from "./components/MarketDataDisplay";
import { MarketDataContainer } from "./components/styledComponents";

const App: React.FC = () => {
  const [selectedPair, setSelectedPair] = useState<string>("BTCUSDT");

  const handleFormSubmit = (pair: string) => {
    setSelectedPair(pair);
  };

  return (
    <div>
      <h1>Binance Market Data</h1>
      <CurrencyPairForm onSubmit={handleFormSubmit} />
      <MarketDataContainer>
        <MarketDataDisplay pair={selectedPair} />
      </MarketDataContainer>
    </div>
  );
};

export default App;
