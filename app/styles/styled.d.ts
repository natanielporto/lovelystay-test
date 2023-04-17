import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      primaryBg: string;
      secondaryBg: string;
      terciaryBg: string;
      primaryText: string;
      secondaryText: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
