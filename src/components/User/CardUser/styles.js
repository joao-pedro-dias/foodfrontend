import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    .banner{
        margin-top: 1rem;
        margin-bottom: 1rem;
        background: ${({ theme }) => theme.colors.dark_900};
        width: 100%;
        height: 9rem;
        border-radius: 5%;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: inherit;
        text-align: right;
        position: relative;
    }

    .banner-img{
        position: absolute;
        width: 4rem;
        height: 4rem;
        position: absolute;
        top: -30px;
        left: -20px; 
        z-index: 1;
    }

    .banner-text{
        position: absolute;
        margin: 1rem;
        font-size: .8rem;
        max-width: 70%;
        word-wrap: break-word;
        z-index: 2;
    }
`;

export const CardContainer = styled.div`
    background: ${({ theme }) => theme.colors.dark_300};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
    border-radius: 8px;
    padding: 1rem;
    width: 13rem;
    height: 21rem;

    scroll-snap-align: start;
    flex-shrink: 0;
`;

export const CardImage = styled.img`
    margin-top: 1rem;
    width: 6rem;
    height: 6rem;
`;

export const CardTitle = styled.h1`
    margin-top: 1rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.light_300};
`;

export const Icon = styled.img`

    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
`;

export const CardPrice = styled.h1`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.tints_cake_200};
`;

export const CardButton = styled.button`
    background-color: ${({ theme }) => theme.colors.tints_tomato_100};
    color: ${({ theme }) => theme.colors.light_100};
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    width: 100%;
    cursor: pointer;
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scrollbar-color: transparent;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardCount = styled.div`
    display: flex;
    flex-direction: row;

    span {
        margin-left: 1rem;
        margin-right: 1rem;
    }

    button{
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
    }
`;
