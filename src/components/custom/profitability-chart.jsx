"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { ChartLoader } from "./chart-loader";
import { CustomYAxisTick } from "./custom-y-axis-tick";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    const { name, value } = payload[0];
    return (
      <div className="bg-black rounded-md px-4 py-2 shadow-md text-white text-sm">
        <p className="uppercase text-[10px] text-gray-300">{name}</p>
        <p className="font-semibold">{`${label}: $${value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: 4,
        borderRadius: 4,
        border: "1px solid var(--color-dime-outline-grey)",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
      {payload.map((entry) => {
        let label = entry.value;
        if (entry.value === "revenue")
          label = (
            <span className="text-sm font-semibold text-dime-body-grey">
              Revenue
            </span>
          );
        else if (entry.value === "gross")
          label = (
            <span className="text-sm font-semibold text-dime-body-grey">
              Gross Profit
            </span>
          );
        else if (entry.value === "operating")
          label = (
            <span className="text-sm font-semibold text-dime-body-grey">
              Operating Profit
            </span>
          );

        return (
          <div
            key={entry.value}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}>
            <svg width={32} height={10} style={{ marginRight: 8 }}>
              <line
                x1={0}
                y1={5}
                x2={32} // line length 40px
                y2={5}
                stroke={entry.color}
                strokeWidth={3}
              />
            </svg>

            {/* Label */}
            {typeof label === "string" ? (
              <span className="text-sm font-semibold text-dime-body-grey">
                {label}
              </span>
            ) : (
              label
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function ProfitabilityChart() {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/profitability-chart`)
      .then((res) => res.json())
      .then((json) => {
        setChartData(json);
        setIsLoading(false);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || !chartData.length) {
    return <ChartLoader />;
  }

  return (
    <div className="h-[350px] profitability-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 4, bottom: 0, left: 0 }}>
          <CartesianGrid
            stroke={"var(--color-dime-outline-grey)"}
            vertical={false}
            strokeDasharray={0}
          />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tick={false}
            padding={{ left: 80 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v.toLocaleString()}`}
            ticks={[0, 50000, 100000, 150000]}
            tick={<CustomYAxisTick />}
            width={1}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="bottom" content={CustomLegend} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={"var(--color-dime-hover-blue)"}
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="gross"
            stroke={"var(--color-dime-good-green)"}
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="operating"
            stroke={"var(--color-dime-error-red)"}
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
