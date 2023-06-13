import { Container, CarouselContainer, CardContainer, CardImage, CardTitle, Icon, CardPrice } from "./styles";
import edit from "../../../assets/edit.svg";
import placeholderDish from "../../../assets/placeholderDish.svg";
import banner from "../../../assets/banner.svg";

export function CardAdmin() {
    return (
        <Container>
            <div className="banner">
                <div className="banner-img">
                    <img src={banner} alt="imagem com bolachas, folhas e frutas" />
                </div>

                <div className="banner-text">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
            </div>
            <div>
                <h3>Refeição</h3>
                <CarouselContainer>
                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={edit} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                    </CardContainer>

                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={edit} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                    </CardContainer>

                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={edit} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                    </CardContainer>

                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={edit} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                    </CardContainer>
                </CarouselContainer>
            </div>

            <div>
                <h3>Refeição</h3>
                <CarouselContainer>
                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={edit} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                    </CardContainer>

                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={edit} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                    </CardContainer>

                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={edit} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                    </CardContainer>

                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={edit} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                    </CardContainer>
                </CarouselContainer>
            </div>
        </Container>
    );
}
