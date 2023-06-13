import styled from "styled-components";

export const Container = styled.div`

    .tag-container {
        display: flex;
        flex-direction: row;
        width: auto;
        margin-right: 1rem;
    }

    .tag {
        width: auto;
        margin: 0.5rem 0rem 0.5rem 0rem;
        display: inline-block;
    }

    .tag input {
        border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.colors.light_600}` : "none" };
        background-color: ${({ theme, isNew }) => isNew ? theme.colors.dark_800 : theme.colors.light_600};
        border-right: none;
        width: 6.8rem;
        height: 1.7rem;
        padding: 0.8rem;
        border-radius: 8px 0px 0px 8px;
        color: ${({ theme }) => theme.colors.light_100};
    }

    button {
        width: auto;
        height: 1.7rem;
        padding: .8rem;
        display: flex;
        align-items: center;
        border-radius: 0px 8px 8px 0px;
        border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.colors.light_600}` : "none" };
        border-left: none;
        background-color: ${({ theme, isNew }) => isNew ? theme.colors.dark_800 : theme.colors.light_600};
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    img{
        width: 10px;
        height: 10px;
    }
`;
