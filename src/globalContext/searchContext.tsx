"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useState,
} from "react";
import dark from "@/styles/themes/dark";
import light from "@/styles/themes/light";
import { DefaultTheme } from "styled-components";

interface ContextProps {
  theme: DefaultTheme;
  setTheme: Dispatch<SetStateAction<DefaultTheme>>;
  handleTheme: () => void;
}

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalContext = createContext({} as ContextProps);

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const handleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme, setTheme]);

  const contextValue = { theme, setTheme, handleTheme };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
