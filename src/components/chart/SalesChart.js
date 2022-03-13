import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../../resources";

function SalesChart(props) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={500}
        height={300}
        barGap={20}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total Earnings" stackId="a" fill="#3f8dfd" />
        <Bar dataKey="Total Visitors" stackId="a" fill="#9fdbff" />
        <Bar dataKey="Total Expenses" stackId="a" fill="#fd9c3f" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SalesChart;
