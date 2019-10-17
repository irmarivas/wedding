import React from 'react';
import TopAppBar from './components/layout/TopAppBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

  const theme = createMuiTheme({
    palette: {
      primary: {
        main:'#FFFFF0',
      }
    }
  });

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TopAppBar />
    </ThemeProvider>
  );
}

export default App;
