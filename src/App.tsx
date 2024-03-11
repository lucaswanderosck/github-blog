import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { PostProvider } from './contexts/PostContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostProvider>
          <Router />
        </PostProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
