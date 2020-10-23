import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import {configureStore} from "@reduxjs/toolkit";
import signInSliceReducer from 'features/SignIn/signInSlice'


const theme = createMuiTheme({
    palette: {
        primary: {
            main:   orange[500]
        },
    },
});

const store = configureStore({
    reducer: signInSliceReducer,
})

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
    <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
