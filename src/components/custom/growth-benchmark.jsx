"use client";
import React from "react";
import { BenchmarkChart } from "./benchmark-chart";
import { AnalyticsTable } from "./analytics-table";
import { useApi } from "@/hooks/use-api";

const analyticsTableColumns = [
  { key: "quarter", label: "Q3 2021/2022 (QTD)" },
  { key: "median", label: "Median" },
  { key: "rank", label: "Rank" },
  { key: "percentile", label: "Percentile" },
];

export const GrowthBenchmark = () => {
  const { data, isLoading } = useApi("/growth-benchmark");

  return (
    <>
      <BenchmarkChart
        caption="Revenue Growth"
        isLoading={isLoading}
        data={data?.chart}
      />

      <AnalyticsTable columns={analyticsTableColumns} data={data?.analytics} />
    </>
  );
};
