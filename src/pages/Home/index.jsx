import { Container, MainContainer  } from './styles';
import { HeaderAdmin } from "../../components/Admin/HeaderAdmin";
import { HeaderUser } from "../../components/User/HeaderUser";
import { Main } from "../../components/Main";
import { Footer } from '../../components/Footer';

export function Home(){

    const isAdmin = 1;

    return(
        <Container>
            {isAdmin ? (
                <HeaderAdmin/>
            ): (
                <HeaderUser/>
            )}

            <MainContainer>
                <Main />
            </MainContainer>
            <Footer/>
        </Container>
    )
}