import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  "palette": {
    "common": {
      "black": "rgba(0, 0, 0, 0.63)",
      "white": "#fff"
    },
    "background": {
      "paper": "rgba(250, 250, 250, 1)",
      "default": "#fafafa"
    },
    "primary": {
      "light": "rgba(12, 239, 89, 1)",
      "main": "rgba(29, 185, 84, 1)",
      "dark": "rgba(59, 127, 83, 1)",
      "contrastText": "#fff"
    },
    "secondary": {
      "light": "rgba(111, 111, 111, 1)",
      "main": "rgba(19, 19, 19, 0.81)",
      "dark": "rgba(0, 0, 0, 1)",
      "contrastText": "#fff"
    },
    "error": {
      "light": "rgba(255, 121, 97, 1)",
      "main": "rgba(244, 67, 54, 1)",
      "dark": "rgba(186, 0, 13, 1)",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    }
  }
});

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
