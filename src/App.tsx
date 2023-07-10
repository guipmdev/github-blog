import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { Router } from './Router'
import { UserProvider } from './contexts/UserContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <UserProvider>
          <Router />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
