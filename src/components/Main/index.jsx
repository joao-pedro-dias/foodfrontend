import { CardAdmin } from "../Admin/CardAdmin";
import { CardUser} from "../User/CardUser";
import { Container } from "./styles";

export function Main() {
  const isAdmin = 1;

  return (
    <Container>
      {isAdmin ? (
        <CardAdmin/>
      ): (
        <CardUser/>
      )}
    </Container>
  );
}
