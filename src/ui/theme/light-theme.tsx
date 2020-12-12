import { DefaultTheme } from 'styled-components'

export const lightTheme = {
  colors: {
    foreground: {
      primary: '#000000',
      secondary: '#7A7A7A',
      white: '#FFFFFF',
      badge: '#0161F0',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#BDC5CD',
      border: '#000000',
      button: '#0070d7',
      badge: '#d3e8fc',
    },
  },
  fontFamily: {
    arialRegular: 'ArialRegular',
    arialBold: 'ArialBold',
    openSansRegular: 'OpenSansRegular',
    openSansBold: 'OpenSansBold',
  },
}

export type Theme = typeof lightTheme
