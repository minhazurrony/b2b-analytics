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
import { CustomYAxisTick } from "./custom-y-axis-tick";
import { LegendWithLines } from "./legend-with-lines";

const legendLabels = {
  revenue: "Revenue",
  fixedCosts: "Fixed Costs",
  variableCosts: "Variable Costs",
};

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

export const BreakevenAnalysisChart = ({ data }) => {
  return (
    <div className="h-[350px] breakeven-analysis-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 4, bottom: 0, left: 0 }}>
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
            padding={{ left: 80 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v / 1000}K`}
            ticks={[0, 25000, 50000, 75000, 100000, 125000, 150000]}
            width={1}
            tick={<CustomYAxisTick shortFormatCurrency={true} />}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            content={<LegendWithLines labelMap={legendLabels} />}
          />
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
};
