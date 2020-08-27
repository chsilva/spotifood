import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import theme from 'settings/theme'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Inter, -apple-system, sans-serif;
    font-size: 16px;
    color: ${(props) => props.theme.textPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
