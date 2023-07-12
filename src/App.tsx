import { ThemeProvider } from 'styled-components'

import { Toaster } from 'react-hot-toast'

import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { ContextProviders } from './contexts'

import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Toaster
        toastOptions={{
          style: {
            background: defaultTheme['base-input'],
            color: defaultTheme['base-text'],
          },
        }}
      />

      <BrowserRouter>
        <ContextProviders>
          <Router />
        </ContextProviders>
      </BrowserRouter>
    </ThemeProvider>
  )
}
