import { Container } from "../Footer/styles";
import logoFooter from "../../assets/logoFooter.svg";

export function Footer(){
    return(
        <Container>
            <footer>
                <div className="footer">
                    <img src={logoFooter} alt="logo em formato de polígono" />
                    <h1>food explorer</h1>
                    <h4>&copy; 2023 - Todos os direitos reservados.</h4>
                </div>
            </footer>
        </Container>
    );
}