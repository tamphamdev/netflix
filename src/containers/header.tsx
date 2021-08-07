import React from "react"
import { Header } from "../components"
import * as ROUTES from "../constants/routes"

type Props = {
  children: React.ReactChild
}

export function HeaderContainer({ children }: Props) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src="." />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}
