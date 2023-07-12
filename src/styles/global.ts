import { createGlobalStyle } from 'styled-components'
import { device } from './breakpoints'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :focus {
    outline: none;
  }

  body {
    background: ${(props) => props.theme['base-background']};

    color: ${(props) => props.theme['base-text']};
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: ${(props) => props.theme['text-m']};
  }

  @media ${device.sm} {
    html {
      font-size: 87.5%;
    }
  }
`
