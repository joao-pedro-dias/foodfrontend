import { Container, MainContainer, Content, ButtonBack, CardCount, CardButton, ButtonPedido, ButtonEdit } from "./styles";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/Admin/HeaderAdmin";
import { HeaderUser } from "../../components/User/HeaderUser";
import placeholderDish from "../../assets/placeholderDish.svg";
import sub from "../../assets/sub.svg";
import add from "../../assets/add.svg";
import pedido from "../../assets/pedido.svg";
import arrow from "../../assets/arrow.svg";
import { Tags } from "../../components/Tags";

export function ViewDish() {

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
        
        <Content>
          <img className="dish" src={placeholderDish} alt="imagem de um prato com salada" />
          <h1>Salada Ravanello</h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
          <div>
            <Tags>Tags</Tags>
          
          </div>

          {isAdmin ? (
            <ButtonEdit>Editar prato</ButtonEdit>
          ): (
            <CardCount>
              <ButtonPedido>
                <img src={sub} alt="ícone de menos"/>
                <span>01</span>
                <img src={add} alt="ícone de mais"/>
              </ButtonPedido>
              <CardButton><img src={pedido} alt="" /> Pedir - R$ 25,00</CardButton>
            </CardCount>
          )}

        </Content>
      </MainContainer>
      <Footer/>
    </Container>
  );
}