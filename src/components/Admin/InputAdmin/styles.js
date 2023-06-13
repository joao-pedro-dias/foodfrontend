import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    height: auto;

    div{
        display: flex;
        flex-direction: row;
    }

    .items{
        display: flex;
        flex-direction: column;
    }

    .items .upload{
        position: relative;
    }

    .items .upload img{
        position: absolute;
        left: 10%;
        padding: .3rem;
    }

    .items label{
        margin-bottom: .7rem;
        margin-top: .7rem;
        font-size: 1.2rem;
    }

    .items h1{
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    .items .input, select, textarea, .button {
        width: 100%;
        padding: .5rem;
        background-color: ${({ theme }) => theme.colors.dark_900};
        color: ${({ theme }) => theme.colors.light_100};
        border: none;
        font-size: 1rem;
        border-radius: 6px;
    }

    .items textarea{
        height: 10rem;
        margin-bottom: 2rem;
    }

    .tags{
        display: flex;
        flex-wrap: wrap;
        height: auto;

        padding: .5rem;
        border-radius: 6px;
        border: none;
        position: relative;
        background-color: ${({ theme }) => theme.colors.dark_900};

    }

`;