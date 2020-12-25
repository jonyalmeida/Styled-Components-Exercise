import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export const theme1 = {
    primary: "#ff0198",
    secondary: "#01c1d6",
    danger: "#eb238e",
    light: "#f4f4f4",
    dark: "#222",
};

export const theme2 = {
    primary: "#6e27c5",
    secondary: "#ffb617",
    danger: "#f16623",
    light: "#f4f4f4",
    dark: "#222",
};

const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    background-color: lightsalmon;
  }

  h1 {
    font-family: Montserrat;
  }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
