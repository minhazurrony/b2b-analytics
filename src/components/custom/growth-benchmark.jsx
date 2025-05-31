"use client";
import React, { useState, useEffect } from "react";
import { BenchmarkChart } from "./benchmark-chart";
import { AnalyticsTable } from "./analytics-table";

const analyticsTableColumns = [
  { key: "quarter", label: "Q3 2021/2022 (QTD)" },
  { key: "median", label: "Median" },
  { key: "rank", label: "Rank" },
  { key: "percentile", label: "Percentile" },
];

export const GrowthBenchmark = () => {
  const [data, setData] = useState({ chart: [], analytics: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/growth-benchmark`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <BenchmarkChart
        caption="Revenue Growth"
        isLoading={isLoading}
        data={data.chart}
      />

      <AnalyticsTable columns={analyticsTableColumns} data={data.analytics} />
    </>
  );
};
