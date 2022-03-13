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
        barGap={20}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis
          dataKey="name"
          tick={{ stroke: "#96aabd", fontSize: "13px" }}
          axisLine={false}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ stroke: "#96aabd", fontSize: "13px" }}
        />
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
