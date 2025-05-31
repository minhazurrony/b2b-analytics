"use client";
import React, { useState, useEffect } from "react";
import { BreakevenAnalysisChart } from "./breakeven-analysis-chart";
import { BreakevenAnalysisStats } from "./breakeven-analysis-stats";
import { ChartLoader } from "./chart-loader";

export const BreakevenAnalysis = () => {
  const [data, setData] = useState({ chart: [], analysis: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/breakeven-analysis`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || !data.chart.length || !data.analysis.length) {
    return <ChartLoader />;
  }

  return (
    <div className="space-y-5">
      <BreakevenAnalysisChart data={data.chart} />
      <BreakevenAnalysisStats data={data.analysis} />
    </div>
  );
};
