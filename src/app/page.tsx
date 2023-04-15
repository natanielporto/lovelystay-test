"use client";

import { useContext } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/styles/global";
import Header from "@/components/organisms/Header/intex";
import { GlobalContext } from "@/globalContext/searchContext";

export default function Home() {
  const { theme } = useContext(GlobalContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}
