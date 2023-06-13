import styled from "styled-components";

export const Container = styled.div`

    height: 50px;
    width: 100%;
    color: ${({ theme }) => theme.colors.light_400};

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    
    border-style: solid;
    border: transparent;
    
    font-size: 18px;

    > input{
        height: 56px;
        width: 100%;
        border-radius: 8px;

        padding: 12px;

        color: ${({ theme }) => theme.colors.light_100};
        background: ${({ theme }) => theme.colors.dark_900};
        border: 0;
    }
`;