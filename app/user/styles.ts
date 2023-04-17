import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.primary};
  padding-top: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const CenterCard = styled.section`
  background: ${({ theme }) => theme.colors.secondaryBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;

  h1 {
    font-size: 32px;
  }

  p {
  }

  img {
    aspect-ratio: 1;
    margin: 16px 0;
    display: flex;
    width: 100%;
    object-fit: contain;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
