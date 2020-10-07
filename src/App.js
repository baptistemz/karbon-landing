import React, { Component } from 'react';
import Routes from './Routes';
import './stylesheets/application.scss'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        textTransform: 'inherit',
        paddingLeft: 20,
        paddingRight: 20
      },
      label:{
        fontSize: '0.8rem',
        letterSpacing: 1
      }
    },
    MuiCard: {
      // Name of the rule
      root: {
        // Some CSS
        boxShadow: '0px 20px 40px -12px rgba(0,0,0,0.16)',
      },
    },
  },
  palette: {
    primary: {
      main: "#0A4350",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#7CBE69",
      contrastText: "#FFFFFF"
    },
    success: {
      main: "#7CBE69",
      contrastText: "#FFFFFF"
    },
    warning: {
      main: "#F1B430",
      contrastText: "#FFFFFF"
    },
    danger: {
      main: "#D85D6E",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#2FA4C6",
      contrastText: "#FFFFFF"
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
