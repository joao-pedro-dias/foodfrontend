import styled from "styled-components";

export const Container = styled.div`

    width: auto;
    height: auto;
    display: flex;
    flex-direction: wrap;

    span{
        
        font-size: 1.2rem;
        margin-right: 1rem;
        background-color: ${({ theme }) => theme.colors.dark_1000};
        color: ${({ theme }) => theme.colors.light_100};
        padding: 0.5rem;
        border-radius: 10%;
        display: inline-block;
        margin-bottom: 1rem;
    }
`;