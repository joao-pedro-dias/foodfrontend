import { Container, CarouselContainer, CardCount, CardContainer, CardImage, CardTitle, Icon, CardPrice, CardButton } from "./styles";
import favorite from "../../../assets/favorite.svg";
import placeholderDish from "../../../assets/placeholderDish.svg";
import add from "../../../assets/add.svg";
import sub from "../../../assets/sub.svg";
import banner from "../../../assets/banner.svg";

export function CardUser() {
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
                        <Icon src={favorite} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                        <CardCount>
                            <button><img src={sub} alt="ícone de menos"/></button>
                            <span>01</span>
                            <button><img src={add} alt="ícone de mais"/></button>
                        </CardCount>
                        <CardButton>Incluir</CardButton>
                    </CardContainer>

                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={favorite} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                        <CardCount>
                            <button><img src={sub} alt="ícone de menos"/></button>
                            <span>01</span>
                            <button><img src={add} alt="ícone de mais"/></button>
                        </CardCount>
                        <CardButton>Incluir</CardButton>
                    </CardContainer>

                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={favorite} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                        <CardCount>
                            <button><img src={sub} alt="ícone de menos"/></button>
                            <span>01</span>
                            <button><img src={add} alt="ícone de mais"/></button>
                        </CardCount>
                        <CardButton>Incluir</CardButton>
                    </CardContainer>
                </CarouselContainer>
            </div>

            <div>
                <h3>Refeição</h3>
                <CarouselContainer>
                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={favorite} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                        <CardCount>
                            <button><img src={sub} alt="ícone de menos"/></button>
                            <span>01</span>
                            <button><img src={add} alt="ícone de mais"/></button>
                        </CardCount>
                        <CardButton>Incluir</CardButton>
                    </CardContainer>

                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={favorite} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                        <CardCount>
                            <button><img src={sub} alt="ícone de menos"/></button>
                            <span>01</span>
                            <button><img src={add} alt="ícone de mais"/></button>
                        </CardCount>
                        <CardButton>Incluir</CardButton>
                    </CardContainer>

                    <CardContainer>
                        <CardImage src={placeholderDish} alt="ícone de um prato com comida" />
                        <CardTitle>Título <span>&gt;</span></CardTitle>
                        <Icon src={favorite} alt="ícone em formato de coração" />
                        <CardPrice>R$ 49,90</CardPrice>
                        <CardCount>
                            <button><img src={sub} alt="ícone de menos"/></button>
                            <span>01</span>
                            <button><img src={add} alt="ícone de mais"/></button>
                        </CardCount>
                        <CardButton>Incluir</CardButton>
                    </CardContainer>
                </CarouselContainer>
            </div>

        </Container>
    );
}
