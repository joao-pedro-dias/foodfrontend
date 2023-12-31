import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${({ theme }) => theme.colors.background_800};
        color: ${({ theme }) => theme.colors.light_100};

        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Roboto Slab', serif;
        font-size: 1rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;