import { Container, MainContainer, ButtonBack, ButtonSave, Title } from "./styles";
import { Footer } from "../../components/Footer";
import arrow from "../../assets/arrow.svg";
import { InputAdmin } from "../../components/Admin/InputAdmin";
import { HeaderAdmin } from "../../components/Admin/HeaderAdmin";
import { HeaderUser } from "../../components/User/HeaderUser";

export function NewDish() {

  const isAdmin = 1;

  return (
    <Container>
      {isAdmin ? (
        <HeaderAdmin/>
      ): (
        <HeaderUser/>
      )}
      <MainContainer>
        <ButtonBack>
            <img src={arrow} alt="Sinal de maior" />
            <h1>voltar</h1>
        </ButtonBack>
        <Title>Novo prato</Title>

        <InputAdmin/>
        <ButtonSave>Salvar alterações</ButtonSave>

      </MainContainer>
      <Footer/>
    </Container>
  );
}
