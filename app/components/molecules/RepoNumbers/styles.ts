import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Information = styled.span`
  color: white;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-right: ${({ theme }) => theme.spacing.xl};
`;
