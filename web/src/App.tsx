import { Routers } from "./routers/Routers"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from "./styles/GlobalStyle"
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/Theme/defaultTheme"
import { GitHubProvider } from "./context/GitHubContext"

export const App = () => {


  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GitHubProvider>
          <GlobalStyle />
          <Routers />
        </GitHubProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}


