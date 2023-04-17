import styled from "styled-components";

export const Container = styled.button`
  padding: 16px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.terciaryBg};
  color: ${({ theme }) => theme.colors.secondaryText};
  border: none;
  border-radius: 16px;
  font-size: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryText};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.terciaryBg};
  }
`;
