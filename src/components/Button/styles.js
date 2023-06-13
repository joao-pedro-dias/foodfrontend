import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 56px;
    padding: 0 16px;
    margin-top: 16px;
    
    background-color: ${({ theme }) => theme.colors.tints_tomato_100};
    color: ${({ theme }) => theme.colors.light_100};
    
    font-weight: 500;
    font-size: 16px;
    
    border: 0;
    border-radius: 10px;

`;