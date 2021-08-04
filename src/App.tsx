import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { Home, Browse, Signin, Signup } from "./pages"
import * as ROUTES from "./constants/routes"
function App() {
  return (
    <Router>
      <Route path="/user">
        <p>Hello</p>
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  )
}

export default App
