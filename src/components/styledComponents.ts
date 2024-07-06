import styled from "styled-components";

export const Card = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

export const DataDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DataLabel = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #6b7280;
`;

export const DataContent = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #111827;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  align-items: baseline;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #111827;
`;

export const Select = styled.select`
  display: block;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 2.5rem;
  margin-top: 0.5rem;
  border-radius: 0.375rem;
  border-width: 0;
  box-shadow:
    0 1px 2px 0 #0000000d,
    0 0 0 3px #f8fafc;
  --tw-ring-inset: inset;
  --ring-color: #d1d5db;
  color: #111827;

  @media (min - width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 1.5rem;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #4f46e5;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  :hover {
    background-color: #6366f1;
  }
`;

export const MarketDataContainer = styled.div`
margin - top: 20px;
`;

export const TradesList = styled.ul`
list - style: none;
padding: 0;
`;

export const TradeItem = styled.li`
padding: 10px;
border - bottom: 1px solid #ddd;

  &: nth - child(even) {
  background - color: #f9f9f9;
}
`;
