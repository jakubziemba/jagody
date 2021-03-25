import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const theme = {
  colors: {
    primary: '#0C2652',
    secondary: '#ffffff',
  },
  fonts: {
    sans: '"Metropolis", sans-serif',
    serif: '"Bona Nova", serif',
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100vh;
  }
`
