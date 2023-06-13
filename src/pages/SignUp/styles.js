import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    
    align-items: stretch;
    background: ${({ theme }) => theme.colors.dark_400};

`;

export const Form = styled.form`
    padding: 3rem;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    > h2{
        display: flex;
        align-items: flex-start;
        font-size: 24px;
        margin-top: 84px;
        margin-bottom: 24px;
    }

    > a{
        font-size: 1rem;
        margin-top: 3rem;
        color: ${({ theme }) => theme.colors.light_100}
    }

    > label{
        display: flex;
        align-items: flex-start;
        margin-bottom: 1rem;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.light_400}
    }

    > .logo{
        display: flex;
        gap: 2rem;
        margin-bottom: 6rem;
        color: ${({ theme }) => theme.colors.light_100}
    }
`;