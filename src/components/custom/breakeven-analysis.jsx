"use client";
import { BreakevenAnalysisChart } from "./breakeven-analysis-chart";
import { BreakevenAnalysisStats } from "./breakeven-analysis-stats";
import { ChartLoader } from "./chart-loader";
import { useApi } from "@/hooks/use-api";

export const BreakevenAnalysis = () => {
  const { data, isLoading } = useApi("/breakeven-analysis");

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
