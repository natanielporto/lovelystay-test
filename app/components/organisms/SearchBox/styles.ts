import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  height: 35vh;
  border-radius: 8px;
`;

export const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
