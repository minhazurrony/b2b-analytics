import { Container } from "@/components/custom/container";
import { KPIResultTable } from "@/components/custom/kpi-result-table";
import { ProfitabilityChart } from "@/components/custom/profitability-chart";
import { RevenueBenchmark } from "@/components/custom/revenue-benchmark";
import { KPIAccordion } from "@/components/custom/kpi-accordion";
import { GrowthBenchmark } from "@/components/custom/growth-benchmark";
import { BreakevenAnalysis } from "@/components/custom/breakeven-analysis";

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
        <BreakevenAnalysis />
      </Container>

      <Container title="Revenue Benchmark">
        <RevenueBenchmark />
      </Container>

      <Container title="Growth Benchmark">
        <GrowthBenchmark />
      </Container>

      <Container title="KPI Explained (Appendix)">
        <KPIAccordion />
      </Container>
    </>
  );
}
