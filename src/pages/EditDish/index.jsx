import { Container, MainContainer, ButtonBack, ButtonSave, ButtonDelete, Buttons, Title } from "./styles";
import { Footer } from "../../components/Footer";
import arrow from "../../assets/arrow.svg";
import { InputAdmin } from "../../components/Admin/InputAdmin";
import { HeaderAdmin } from "../../components/Admin/HeaderAdmin";
import { HeaderUser } from "../../components/User/HeaderUser";

export function EditDish() {
  
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
        <Title>Editar prato</Title>

        <InputAdmin/>
        <Buttons>
            <ButtonDelete>Excluir prato</ButtonDelete>
            <ButtonSave>Salvar alterações</ButtonSave>
        </Buttons>

      </MainContainer>
      <Footer/>
    </Container>
  );
}
