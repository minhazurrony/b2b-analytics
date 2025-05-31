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
import { ChartLoader } from "./chart-loader";

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex gap-6 p-2 border border-dime-outline-grey rounded justify-center flex-wrap text-sm font-semibold text-dime-body-grey">
      {payload.map((entry) => (
        <div key={entry.value} className="flex items-center">
          <svg width={16} height={16} className="mr-2">
            <circle cx={8} cy={8} r={8} fill={entry.color} />
          </svg>
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-black rounded-md px-4 py-2 shadow-md text-white text-sm">
        <p className="uppercase text-[10px] text-gray-300">
          #{payload[0].payload.rank}
        </p>
        <p className="font-semibold">{payload[0].payload.name}</p>
      </div>
    );
  }
  return null;
};

export const BenchmarkChart = ({ data, isLoading, caption }) => {
  if (isLoading || !data.regions) {
    return <ChartLoader />;
  }

  return (
    <div className="relative w-full h-[474px]">
      <div className="text-xs font-semibold text-dime-form-grey">{caption}</div>

      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 10, right: 60, bottom: 40, left: 10 }}>
          <CartesianGrid
            strokeDasharray={0}
            stroke="var(--color-dime-outline-grey)"
          />

          <XAxis
            type="number"
            dataKey="x"
            domain={[0.5, 5.5]}
            ticks={[1, 2, 3, 4, 5]}
            interval={0}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={() => ""}
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
            tickFormatter={(y) => `$${y.toLocaleString()}`}
          />

          <ZAxis dataKey="z" range={[200, 5000]} />

          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />

          {data?.regions?.map((group) => (
            <Scatter
              key={group.region}
              name={group.region}
              data={group.businesses}
              fill={group.color}
              opacity={0.6}
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>

      <div className="absolute right-14 top-0 bottom-12 flex flex-col justify-center gap-12 text-xs text-dime-form-grey font-semibold pointer-events-none">
        <div>90th</div>
        <div>75th</div>
        <div>50th</div>
        <div>25th</div>
        <div>10th</div>
      </div>
    </div>
  );
};
