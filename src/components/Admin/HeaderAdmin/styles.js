import styled from "styled-components";

export const Container = styled.header`

    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 105px;
    width: 100%;
    background: ${({ theme }) => theme.colors.dark_700};
    
    padding-right: 4rem;

    .sidebar .menu {
        display: none;
    }

    .sidebar.show .menu {
        display: block;
    }

    .sidebar.show {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 9999;
        overflow: auto;

        display: flex;
        flex-direction: column;
        
    }

    .menu-icon{
        margin: 2rem;
    }

    .h1{
        color: white;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.light_100};
    }

    .menuX{
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .sidebar {
        margin: 0;
        background-color: ${({ theme }) => theme.colors.dark_700}; /* Cor de fundo do menu */
    }

    .menu-icon svg {
        color: ${({ theme }) => theme.colors.light_100};; /* Cor do ícone */
    }

    .menu {
        list-style-type: none; /* Remover marcadores da lista */
        width: 100%;
        height: 100vh;
        background-color: ${({ theme }) => theme.colors.dark_100};
    }

    .menu ul{
        display:flex;
        flex-direction: column;
        text-decoration: none;
        width: 90%;
        margin: 2rem;
    }

    .menu ul button{
        width: 100%;
        background: transparent;
        color: ${({ theme }) => theme.colors.light_100};
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.light_700};
        display: flex;
        padding-bottom: 1.5rem;
        font-size: 1.4rem;
    }

    .menu ul .item {
        margin-bottom: 10px;
        background-color: ${({ theme }) => theme.colors.dark_100};
        text-decoration: none;
        list-style-type: none;
    }

    .menu ul .item a {
        display: block;
        text-decoration: none;
        color: #333;
    }

    span{
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.tints_cake_200};
    }

    > .logo{
        display: flex;
        gap: 1rem;
        color: ${({ theme }) => theme.colors.light_100};
        align-items: center;

        > h1{
            font-size: 1.4rem;
        }

        > img{
            width: 2rem;
            height: 2rem;
        }
    }
`;