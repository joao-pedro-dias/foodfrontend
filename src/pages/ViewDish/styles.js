import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    height: 100vh;
    width: 100%;

`;

export const MainContainer = styled.div`
    padding: 2rem;
    flex: 1;
    width: 100%;
    background: #000A0F;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .dish{
        margin: 1rem;
        width: 15rem;
        height: 15rem;
    }

    p{
        margin: 1rem;
    }
`;

export const ButtonEdit = styled.button`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 3rem;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 4rem;
    background-color: ${({ theme }) => theme.colors.tints_tomato_100};
    color: ${({ theme }) => theme.colors.light_100};
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
`;

export const ButtonBack = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: .6rem;
    align-items: center;

    img{
        width: .7rem;
        height: 1rem;
    }
`;

export const CardCount = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    align-items: center;
    margin-bottom: 4rem;
    height: 4rem;

    span {
        color: ${({ theme }) => theme.colors.light_100};
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

export const ButtonPedido = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    justify-content: center;
    align-items: center;
`;

export const CardButton = styled.button`
    display: flex;
    background: ${({ theme }) => theme.colors.tints_tomato_100};
    color: ${({ theme }) => theme.colors.light_100};
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 0.9rem;
    cursor: pointer;
    margin-left: 1rem;
    height: 2.5rem;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: auto;
`;