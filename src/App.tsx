import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import { Home, Browse, Signin, Signup } from "./pages"
import * as ROUTES from "./constants/routes"
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"
function App() {
  const user = { name: "Karl" }
  return (
    <Router>
      <IsUserRedirect
        user={user}
        exact
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        exact
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>
      {/* <Route path="/user">
        <p>Hello</p>
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route> */}

      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.BROWSE}
      >
        <Home />
      </IsUserRedirect>
    </Router>
  )
}

export default App
