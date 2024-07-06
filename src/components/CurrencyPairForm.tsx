import React, { useState, useEffect, FormEvent } from "react";
import { getCurrencyPairs } from "@services/binance.api";
import { Card, Form, Select, Label, Button } from "./styledComponents";

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
    <Card>
      <Form onSubmit={handleSubmit}>
        <Label>Select Currency Pair:</Label>
        <Select value={pair} onChange={(e) => setPair(e.target.value)}>
          {pairs.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Select>
        <Button type="submit">Get Market Data</Button>
      </Form>
    </Card>
  );
};

export default CurrencyPairForm;
