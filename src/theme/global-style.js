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
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100vh;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: bold;
  }

  h1 {
    font-size: 3rem;
  }
`
