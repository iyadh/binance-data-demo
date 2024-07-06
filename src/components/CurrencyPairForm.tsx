import React, { useState, useEffect, FormEvent } from "react";
import { getCurrencyPairs } from "../services/binance.api";
import { Form, Select, Button } from "./styledComponents";

interface CurrencyPairFormProps {
  onSubmit: (pair: string) => void;
}

const CurrencyPairForm: React.FC<CurrencyPairFormProps> = ({ onSubmit }) => {
  const [pair, setPair] = useState<string>("BTCUSDT");
  const [pairs, setPairs] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPairs = async () => {
      try {
        const fetchedPairs = await getCurrencyPairs();
        setPairs(fetchedPairs);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch currency pairs");
        setLoading(false);
      }
    };

    fetchPairs();
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(pair);
  };

  if (loading) {
    return <p>Loading currency pairs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Select Currency Pair:
        <Select value={pair} onChange={(e) => setPair(e.target.value)}>
          {pairs.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Select>
      </label>
      <Button type="submit">Get Market Data</Button>
    </Form>
  );
};

export default CurrencyPairForm;
