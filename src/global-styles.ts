import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: #0e0e0e;
    color: #333;
    font-size: 16px;
  }
`;
