"use client";

import { useState, useCallback, useEffect } from "react";
import { DefaultTheme } from "styled-components";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

const STORAGE_KEY = "theme";

export const useTheme = (): [DefaultTheme, () => void] => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(STORAGE_KEY);
      return storedTheme ? JSON.parse(storedTheme) : dark;
    }
  });

  const toggleTheme = () => {
    const newTheme = theme.title === "light" ? dark : light;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTheme));
    setTheme(newTheme);
  };

  return [theme, toggleTheme];
};
// "use client";

// import { useState, useCallback, useEffect } from "react";
// import { DefaultTheme } from "styled-components";
// import dark from "../styles/themes/dark";
// import light from "../styles/themes/light";

// const STORAGE_KEY = "theme";

// export const useTheme = (): [DefaultTheme, () => void] => {
//   const [theme, setTheme] = useState<DefaultTheme>(() => {
//     if (typeof window !== "undefined") {
//       const storedTheme = localStorage.getItem(STORAGE_KEY);
//       return storedTheme ? JSON.parse(storedTheme) : dark;
//     }
//   });

//   const toggleTheme = useCallback(() => {
//     setTheme((prevTheme) => (prevTheme.title === "light" ? dark : light));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
//   }, [theme]);

//   return [theme, toggleTheme];
// };
