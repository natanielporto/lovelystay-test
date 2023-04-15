import styled from "styled-components";

export const Container = styled.button`
  padding: 8px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryText};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
