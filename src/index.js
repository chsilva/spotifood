import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { createI18n, I18nProvider } from 'react-simple-i18n'

import i18n from 'i18n'
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
      <I18nProvider i18n={createI18n(i18n, { lang: 'en_US' })}>
        <Routes />
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
