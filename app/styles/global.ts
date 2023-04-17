"use client";

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryText};
    font-size: 16px;
    max-width: 1280px;
    margin: auto;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit
  }
`;
