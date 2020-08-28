import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { createI18n, I18nProvider } from 'react-simple-i18n'

import i18n from 'i18n'
import theme from 'settings/theme'
import store from 'state/store'
import Routes from './routes'

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

  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.bgSecondary};
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.primary};
    border-radius: 16px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    width: 16px;
    background: ${(props) => props.theme.primaryLight};
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store()}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <I18nProvider i18n={createI18n(i18n, { lang: 'en_US' })}>
          <Routes />
        </I18nProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
