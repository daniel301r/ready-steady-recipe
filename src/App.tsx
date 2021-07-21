import {
    createGlobalStyle,
    ThemeProvider,
    DefaultTheme
} from "styled-components";
import SearchForm from './components/ingredientSearch/SearchForm';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const theme: DefaultTheme = {
    colors: {
        primary: "#156064",
        secondary: "#00C49A",
        yellow: "#F8E16C",
        lightORange: "#FFC2B4",
        orange: "#FB8F67",
        white: "#FFFFFF",
        black: "#000000",
    }
}

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <GlobalStyle />
                <SearchForm />
        </ThemeProvider>
    </div>
  );
};

export default App;
