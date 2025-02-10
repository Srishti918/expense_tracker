import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./BarChart.css";

export default function BarChartComponent({ data }) {
  return (
    <div className="expenseChart">
      <h2>Top Expenses</h2>

      <div className="barWrapper">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} layout="vertical">
            <XAxis type="number" axisLine={false} display="none" />
            <YAxis
              type="category"
              width={100}
              dataKey="name"
              axisLine={false}
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar dataKey="value" fill="#8884d8" barSize={25} radius={[0, 10, 10, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
