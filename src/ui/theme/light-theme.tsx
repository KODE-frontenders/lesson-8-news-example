import { DefaultTheme } from "styled-components";

export const lightTheme = {
  colors: {
    foreground: {
      primary: "#000000",
      secondary: "#7A7A7A",
    },
    background: {
      primary: "#FFFFFF",
      secondary: "#BDC5CD",
    },
  },
  fontFamily: {
    arialRegular: "ArialRegular",
    arialBold: "ArialBold",
    openSansRegular: "OpenSansRegular",
    openSansBold: "OpenSansBold",
  },
};

export type Theme = typeof lightTheme;
