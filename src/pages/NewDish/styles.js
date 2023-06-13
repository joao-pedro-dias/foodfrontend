import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;

`;

export const MainContainer = styled.div`
    padding: 2rem;
    flex: 1;
    width: 100%;
    background: #000A0F;
`;

export const ButtonBack = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: .6rem;
    align-items: center;
    margin-bottom: 1rem;

    img{
        width: .7rem;
        height: 1rem;
    }
`;

export const ButtonSave = styled.button`
    margin-bottom: 4rem;
    width: 100%;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.tints_tomato_400};
    color: ${({ theme }) => theme.colors.light_100};
    border: none;
    border-radius: 5px;
`;

export const Title = styled.h1`
    margin-top: 1.5rem;
    margin-bottom: 2rem;
`;