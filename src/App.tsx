import { createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import IngredientSearch from "./pages/IngredientSearch";
import PageNotFound from "./pages/PageNotFound";

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
                    <Router>
                        <Switch>
                            <Route path='/ingredientSearch/:component' exact component={IngredientSearch}/>
                            <Route path='*' exact component={PageNotFound}/>
                        </Switch>
                    </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
