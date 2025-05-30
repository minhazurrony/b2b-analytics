"use client";

import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import { useEffect, useState } from "react";
import { ChartLoader } from "./chart-loader";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-black rounded-md px-4 py-2 shadow-md text-white text-sm">
        <p className="uppercase text-[10px] text-gray-300">REVENUE</p>
        <p className="font-semibold">
          {label}: ${payload[0].value.toLocaleString()}
        </p>
        <p className="uppercase text-[10px] text-gray-300 mt-1">
          VARIABLE COSTS
        </p>
        <p className="font-semibold">
          {label}: ${payload[1].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }) => {
  return (
    <div
      className="flex gap-6 p-2 border rounded justify-center flex-wrap text-sm font-semibold text-dime-body-grey"
      style={{ borderColor: "var(--color-dime-outline-grey)" }}>
      {payload.map((entry) => {
        const labels = {
          revenue: "Revenue",
          fixedCosts: "Fixed Costs",
          variableCosts: "Variable Costs",
        };
        return (
          <div key={entry.value} className="flex items-center">
            <svg width={32} height={10} className="mr-2">
              <line
                x1={0}
                y1={5}
                x2={32}
                y2={5}
                stroke={entry.color}
                strokeWidth={3}
              />
            </svg>
            <span>{labels[entry.value]}</span>
          </div>
        );
      })}
    </div>
  );
};

export function BreakevenChart() {
  const [data, setData] = useState({ chart: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/breakeven-analysis`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || !data.chart.length) {
    return <ChartLoader />;
  }

  return (
    <div className="h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data.chart}>
          <defs>
            <linearGradient id="fixedCostsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C1C1CE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E7E7ED" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke={"var(--color-dime-outline-grey)"}
            vertical={false}
            strokeDasharray="0"
          />
          <XAxis
            dataKey="date"
            tick={false}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v / 1000}K`}
            ticks={[0, 25000, 50000, 75000, 100000, 125000, 150000]}
            width={70}
            tick={{
              fontSize: 12,
              fill: "var(--color-dime-form-grey)",
              fontWeight: 600,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="bottom" content={CustomLegend} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="var(--color-dime-odd-orange)"
            dot={false}
            strokeWidth={2}
            fill="transparent"
          />
          <Area
            type="monotone"
            dataKey="fixedCosts"
            stroke="var(--color-dime-dark-grey)"
            strokeWidth={2}
            fill="url(#fixedCostsGradient)"
            dot={false}
            activeDot={false}
          />

          <Area
            type="monotone"
            dataKey="variableCosts"
            stroke="var(--color-dime-bright-pink)"
            strokeDasharray={0}
            dot={false}
            strokeWidth={2}
            fill="transparent"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
