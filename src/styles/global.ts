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
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font: 400 1rem 'Nunito', sans-serif;
  }

  html {
    @media (max-width: 1024px) {
      font-size: 93.75%;
    }

    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #112131;
    border-radius: 20px;
    border: 3px solid transparent;

    &:hover {
      background-color: #1C2F41;
    }
  }
`
