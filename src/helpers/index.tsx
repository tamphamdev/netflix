import React from "react"
import { Route, Redirect } from "react-router-dom"

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />
        }

        return null
      }}
    />
  )
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children
        }
        if (!user) {
          return (
            <Redirect to={{ pathname: "signin", state: { from: location } }} />
          )
        }

        return null
      }}
    />
  )
}

// Convert time to hours and minutes
export const calcTime = (time: number): string => {
  const hours: number = Math.floor(time / 60)
  const mins: number = time % 60

  return `${hours}h ${mins}m`
}
// Convert a number to money formatting
export const convertMoney = (money: number): string => {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  })
  return formatter.format(money)
}

// Persist state in localstorge
export const isPersistedState = (stateName: string): any => {
  const sessionState = sessionStorage.getItem(stateName)
  return sessionState && JSON.parse(sessionState)
}
