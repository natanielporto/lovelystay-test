import styled from "styled-components";

export const Container = styled.input`
  padding: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 16px;

  &:focus {
    outline: none;
    border: none;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

// textarea:focus, input:focus{
//   outline: none;
// }
