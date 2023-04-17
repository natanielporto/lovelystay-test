import styled from "styled-components";

export const Container = styled.li`
  height: 150px;
  background-color: ${({ theme }) => theme.colors.terciaryBg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  h3 {
    color: ${({ theme }) => theme.colors.secondaryText};
    margin-bottom: 16px;
    font-size: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    color: ${({ theme }) => theme.colors.secondaryText};
    margin-bottom: 16px;
    font-size: 16px;
  }
`;
