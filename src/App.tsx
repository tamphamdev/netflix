import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { Home, Browse, Signin, Signup } from "./pages"
import * as ROUTES from "./constants/routes"
import { IsUserRedirect } from "./helpers/routes"
function App() {
  const user = {}
  return (
    <Router>
      <Route path={ROUTES.SIGN_IN}>
        <IsUserRedirect
          user={user}
          exact
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route path="/user">
        <p>Hello</p>
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route>

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  )
}

export default App
