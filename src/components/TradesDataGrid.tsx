import React, { useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface Trade {
  id: number;
  time: string;
  price: string;
  qty: string;
}

interface TradesDataGridProps {
  trades: Trade[];
}

const TradesDataGrid: React.FC<TradesDataGridProps> = ({ trades }) => {
  useEffect(() => {
    console.log("Trades Data:", trades);
  }, [trades]);

  const columns: TableColumn<Trade>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Time",
      selector: (row) => row.time,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Quantity",
      selector: (row) => row.qty,
    },
  ];

  return <DataTable pagination columns={columns} data={trades} />;
};

export default TradesDataGrid;
