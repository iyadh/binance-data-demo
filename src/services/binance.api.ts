import { formatTimestamp } from "@utils/timeFormatter";

const BASE_URL = "https://api.binance.com/api/v3";

export const getTicker = async (pair: string) => {
  const response = await fetch(`${BASE_URL}/ticker/24hr?symbol=${pair}`);
  if (!response.ok) {
    throw new Error("Failed to fetch ticker data");
  }
  return response.json();
};

export const getTrades = async (pair: string) => {
  const response = await fetch(`${BASE_URL}/trades?symbol=${pair}&limit=50`);
  if (!response.ok) {
    throw new Error("Failed to fetch trades data");
  }
  const trades = await response.json();

  // Map through each trade and format the time
  const formattedTrades = trades.map((trade: any) => ({
    ...trade,
    time: formatTimestamp(trade.time),
  }));

  return formattedTrades;
};

export const getCurrencyPairs = async () => {
  const response = await fetch(`${BASE_URL}/exchangeInfo`);
  if (!response.ok) {
    throw new Error("Failed to fetch currency pairs");
  }
  const data = await response.json();
  return data.symbols.map((symbol: any) => symbol.symbol);
};
