import React from "react";
import { render } from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";

render(
  <>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
    ,
  </>,
  document.getElementById("root")
);
