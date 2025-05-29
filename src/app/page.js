import { Container } from "@/components/custom/container";
import { KPIResultTable } from "../components/custom/kpi-result-table";

export default function Home() {
  return (
    <>
      <Container title="KPI Results">
        <KPIResultTable />
      </Container>
    </>
  );
}
