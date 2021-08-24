import React from "react"
import "normalize.css"
import { render } from "react-dom"
import { GlobalStyles } from "./global-styles"
import App from "./App"
import { firebase } from "./lib/firebase.prod"
import { FirebaseContext } from "./context/firebase"
render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
)
