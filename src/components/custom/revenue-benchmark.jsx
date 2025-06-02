"use client";
import { AnalyticsTable } from "./analytics-table";
import { BenchmarkChart } from "./benchmark-chart";
import { useApi } from "@/hooks/use-api";

const analyticsTableColumns = [
  { key: "month", label: "November 2021" },
  { key: "median", label: "Median" },
  { key: "rank", label: "Rank" },
  { key: "percentile", label: "Percentile" },
];

export const RevenueBenchmark = () => {
  const { data, isLoading } = useApi("/revenue-benchmark");

  return (
    <>
      <BenchmarkChart
        caption="Total Revenue"
        isLoading={isLoading}
        data={data?.chart}
      />
      <AnalyticsTable columns={analyticsTableColumns} data={data?.analytics} />
    </>
  );
};
