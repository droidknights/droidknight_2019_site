import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @font-face {
    font-family: "DungGeunMo";
    src: url(${require("./assets/fonts/DungGeunMo/DungGeunMo.eot")}) format("embedded-opentype"),
        url(${require("./assets/fonts/DungGeunMo/DungGeunMo.woff")}) format("woff"),
        url(${require("./assets/fonts/DungGeunMo/DungGeunMo.woff2")}) format("woff2")
  }

  @font-face {
    font-family: "SilkScreen";
    src: url(${require("./assets/fonts/SilkScreen/silkscreen.eot")}) format("embedded-opentype"),
        url(${require("./assets/fonts/SilkScreen/silkscreen.ttf")}) format("truetype"),
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;

    background-color: #0f1723;
    font-family: "DungGeunMo";
    height: 100%;
  }
`;
ReactDOM.render(
  <Router>
    <>
      <Global />
      <App />
    </>
  </Router>,
  document.getElementById("root") as HTMLElement
);
