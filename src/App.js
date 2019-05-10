import React, { Component } from 'react';
import Routes from './Routes';
import './stylesheets/application.scss'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#39D4AB",
      main: "#2CB591",
      dark: "#259F7F",
      contrastText: "#FFFFFF"
    },
    secondary: {
      light: "#7ba0d8",
      main: "#5A759E",
      dark: "#3d5372",
      contrastText: "#FFFFFF"
    },
    error: {
      light: "#FF5764",
      main: "#F14D5A",
      dark: "#CC4550",
      contrastText: "#FFFFFF",
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default App;
