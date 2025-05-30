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

const data = [
  { date: "Jan 1", revenue: 72000, gross: 52000, operating: 42000 },
  { date: "Jan 5", revenue: 6900, gross: 55000, operating: 43000 },
  { date: "Jan 10", revenue: 76000, gross: 57000, operating: 45000 },
  { date: "Jan 15", revenue: 82000, gross: 60000, operating: 48000 },
  { date: "Jan 20", revenue: 88000, gross: 62000, operating: 50000 },
  { date: "Jan 25", revenue: 94000, gross: 64000, operating: 52000 },
  { date: "Jan 30", revenue: 103000, gross: 70000, operating: 57000 },
  { date: "Feb 4", revenue: 120000, gross: 83000, operating: 64000 },
];

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
  return (
    <div className="h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid
            stroke={"var(--color-dime-outline-grey)"}
            vertical={false}
            strokeDasharray={0}
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
            tickFormatter={(v) => `$${v.toLocaleString()}`}
            ticks={[0, 50000, 100000, 150000]}
            width={70}
            tick={{
              fontSize: 12,
              fill: "var(--color-dime-form-grey)",
              fontWeight: 600,
            }}
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
