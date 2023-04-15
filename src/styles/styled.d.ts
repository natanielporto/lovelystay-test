import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      primaryBg: string;
      secondaryBg: string;
      primaryText: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
