"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";
import { useEffect, useState } from "react";
import { ChartLoader } from "./chart-loader";

const CustomLegend = ({ payload }) => {
  return (
    <div
      className="flex gap-6 p-2 border rounded justify-center flex-wrap text-sm font-semibold text-dime-body-grey"
      style={{ borderColor: "var(--color-dime-outline-grey)" }}>
      {payload.map((entry) => {
        return (
          <div key={entry.value} className="flex items-center">
            <svg width={16} height={16} className="mr-2">
              <circle cx={8} cy={8} r={8} fill={entry.color} />
            </svg>
            <span>{entry.value}</span>
          </div>
        );
      })}
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-black rounded-md px-4 py-2 shadow-md text-white text-sm">
        <p className="uppercase text-[10px] text-gray-300">{`#${payload[0].payload.rank}`}</p>
        <p className="font-semibold">{payload[0].payload.name}</p>
      </div>
    );
  }
  return null;
};

export const RevenueBenchmarkChart = () => {
  const [data, setData] = useState({ chart: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/revenue-benchmark`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || !data.chart.regions) {
    return <ChartLoader />;
  }
  return (
    <div className="relative w-full h-[474px]">
      <div className="text-xs font-semibold text-dime-form-grey ml-6">
        Total Revenue
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 10, right: 60, bottom: 40, left: 10 }}>
          <CartesianGrid
            strokeDasharray={0}
            stroke={"var(--color-dime-outline-grey)"}
          />

          <XAxis
            type="number"
            dataKey="x"
            domain={[0.5, 5.5]}
            ticks={[1, 2, 3, 4, 5]}
            interval={0}
            tick={{ fontSize: 12 }}
            tickFormatter={(x) => {
              const region = data.chart.regions.find(
                (r) => r.businesses[0].x === x
              );
              return "";
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            type="number"
            dataKey="y"
            domain={[0, 350000]}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "var(--color-dime-form-grey)",
              fontWeight: 600,
            }}
            tickFormatter={(y) => `$${(y / 1000).toFixed(0)}K`}
          />

          <ZAxis dataKey="z" range={[200, 5000]} />

          <Tooltip content={<CustomTooltip />} />

          <Legend content={<CustomLegend />} />

          {data.chart.regions.map((group) => (
            <Scatter
              key={group.region}
              name={group.region}
              data={group.businesses}
              fill={group.color}
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>

      <div className="absolute right-14 top-0 bottom-12 flex flex-col justify-center gap-12 text-xs text-dime-form-grey font-semibold  pointer-events-none">
        <div>90th</div>
        <div>75th</div>
        <div>50th</div>
        <div>25th</div>
        <div>10th</div>
      </div>
    </div>
  );
};
