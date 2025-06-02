"use client";
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
import { LegendWithLines } from "./legend-with-lines";
import { useApi } from "@/hooks/use-api";

const legendLabels = {
  revenue: "Revenue",
  gross: "Gross Profit",
  operating: "Operating Profit",
};

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

export const ProfitabilityChart = () => {
  const { data: chartData, isLoading } = useApi("/profitability-records");

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
          <Legend
            verticalAlign="bottom"
            content={<LegendWithLines labelMap={legendLabels} />}
          />
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
};
