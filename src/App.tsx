import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import { PublicRoutes } from '@/routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
