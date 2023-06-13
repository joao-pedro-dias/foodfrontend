import { Container } from './styles';

export function Search({ img, ...rest }){

    const inputStyle = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        paddingLeft: '3rem', // Ajuste o valor conforme necessário
    };

    return(
        <Container>
            <input style={inputStyle} {...rest}/>
        </Container>
    )
}