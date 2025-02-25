import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './Style'
import Color from './containers/Theme/color'

function App() {
  return (
    <>
      <ThemeProvider theme={Color}>
        <EstiloGlobal></EstiloGlobal>
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
