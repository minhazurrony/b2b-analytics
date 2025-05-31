import { Container } from "@/components/custom/container";
import { KPIResultTable } from "@/components/custom/kpi-result-table";
import ProfitabilityChart from "@/components/custom/profitability-chart";
import { BreakevenChart } from "@/components/custom/breakeven-chart";
import { AnalysisStatsSection } from "@/components/custom/analysis-stats-section";
import { RevenueBenchmarkChart } from "@/components/custom/revenue-benchmark-chart";
import { KPIAccordion } from "@/components/custom/kpi-accordion";

export default function Home() {
  return (
    <>
      <Container title="KPI Results" isBottomBorderVisible={false}>
        <KPIResultTable />
      </Container>

      <Container title="Profitability for All Time">
        <ProfitabilityChart />
      </Container>

      <Container title="Breakeven Analysis">
        <BreakevenChart />
        <div className="mt-5">
          <AnalysisStatsSection />
        </div>
      </Container>

      <Container title="Revenue Benchmark">
        <RevenueBenchmarkChart />
      </Container>

      <Container title="KPI Explained (Appendix)">
        <KPIAccordion />
      </Container>
    </>
  );
}
