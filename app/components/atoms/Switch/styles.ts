import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md};
  top: ${({ theme }) => theme.spacing.md};
`;
