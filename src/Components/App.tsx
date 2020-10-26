import React from 'react';
//Components
import Header from './UI/Header';
import theme from './UI/Theme';
//Styles
import {ThemeProvider} from '@material-ui/core/styles'



const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
