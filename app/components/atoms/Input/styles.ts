import styled from "styled-components";

export const Container = styled.input`
  padding: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 16px;
  border: none;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    border: none;
    outline: none;
    /* font-size: 16px; */
  }
`;
