import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransacitonTable";

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <TransactionTable/>
    </Container>
  )
}