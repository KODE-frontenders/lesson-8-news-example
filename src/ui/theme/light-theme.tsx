import { DefaultTheme } from "styled-components";

export const lightTheme = {
  colors: {
    foreground: {
      primary: "#000000",
      secondary: "#3A3A3A",
    },
    background: {
      primary: "#EEEEEE",
      secondary: "#C2C2C2",
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
