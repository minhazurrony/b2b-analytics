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
import { CustomYAxisTick } from "./custom-y-axis-tick";
import { LegendWithCircle } from "./legend-with-circle";

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
    <div className="relative w-full h-[474px] benchmark-chart-container">
      <div className="text-xs font-semibold text-dime-form-grey">{caption}</div>

      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 4, bottom: 40, left: 0 }}>
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
            tick={<CustomYAxisTick />}
            width={1}
          />

          <ZAxis dataKey="z" range={[200, 5000]} />

          <Tooltip content={<CustomTooltip />} />
          <Legend content={<LegendWithCircle />} />

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

      <div className="absolute right-1 top-0 bottom-12 flex flex-col justify-center gap-12 text-xs text-dime-form-grey font-semibold pointer-events-none">
        <div>90th</div>
        <div>75th</div>
        <div>50th</div>
        <div>25th</div>
        <div>10th</div>
      </div>
    </div>
  );
};
