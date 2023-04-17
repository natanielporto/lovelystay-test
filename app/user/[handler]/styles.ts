import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.primary};
  padding: calc(${({ theme }) => theme.spacing.xl} * 2.4);
`;
