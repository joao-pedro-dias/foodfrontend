import styled from "styled-components";

export const Container = styled.footer`
    
    width: 100%;
    position: fixed;
    bottom: 0;
    
    align-items: stretch;
    background: ${({ theme }) => theme.colors.dark_600};
    font-size: .7rem;
    height: 5rem;

    .footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .footer h1{
        color: ${({ theme }) => theme.colors.light_700};
        font-size: 1.2rem;
    }

    .footer img{
        width: 2rem;
        height: 2rem;
    }
`;