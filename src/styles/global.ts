import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
    -webit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem 'Nunito', sans-serif;
  }
`
