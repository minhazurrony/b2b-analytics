import { Container } from "@/components/custom/container";
import { KPIResultTable } from "../components/custom/kpi-result-table";
import ProfitabilityChart from "@/components/custom/profitability-chart";

export default function Home() {
  return (
    <>
      <Container title="KPI Results" isBottomBorderVisible={false}>
        <KPIResultTable />
      </Container>

      <Container title="Profitability for All Time">
        <ProfitabilityChart />
      </Container>
    </>
  );
}
