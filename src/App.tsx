import { ThemeProvider } from 'styled-components';
import { theme, type TTheme } from './styles/theme';
import { GlobalStyles } from './styles/mixins/GlobalStyles';
import { Header } from './components/Header';
import { Main } from './sections/Main';
import { About } from './sections/About';

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends TTheme {
    }
}

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Main />
        <About />
    </ThemeProvider>
  )
}
