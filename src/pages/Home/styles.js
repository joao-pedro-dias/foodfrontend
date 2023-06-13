import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.dark_700};
`;

export const MainContainer = styled.div`
  flex: 1;
  width: 100%;
  background: #000A0F;
`;
