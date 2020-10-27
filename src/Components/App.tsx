import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routePaths } from './Routes'
//Components
import Header from './UI/Header';
import theme from './UI/Theme';
//Styles
import { ThemeProvider } from '@material-ui/core/styles'

const App: React.FC = () => {

  const routes = (
    routePaths.map((routePath, idx: number) => {
      return (
        <Route key={routePath.name + idx} exact path={routePath.path} component={() => <div>{routePath.name}</div>} />
      )
    })
  )

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
