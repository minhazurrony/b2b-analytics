"use client";
import { useEffect, useState } from "react";
import { AnalyticsTable } from "./analytics-table";
import { BenchmarkChart } from "./benchmark-chart";

const analyticsTableColumns = [
  { key: "month", label: "November 2021" },
  { key: "median", label: "Median" },
  { key: "rank", label: "Rank" },
  { key: "percentile", label: "Percentile" },
];

export const RevenueBenchmark = () => {
  const [data, setData] = useState({ chart: [], analytics: [] });
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

  return (
    <>
      <BenchmarkChart
        caption="Total Revenue"
        isLoading={isLoading}
        data={data.chart}
      />
      <AnalyticsTable columns={analyticsTableColumns} data={data.analytics} />
    </>
  );
};
