import { GlobalStyle, theme } from './src/theme/global-style'

import Layout from './src/components/Layout'
import React from 'react'
import { ThemeProvider } from 'styled-components'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </ThemeProvider>
)
