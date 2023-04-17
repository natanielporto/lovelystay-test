import styled from "styled-components";
export const Backbutton = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 8px;
`;
