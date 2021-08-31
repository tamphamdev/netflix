import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/firebase"
import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import { Form } from "../components"
import * as ROUTES from "../constants/routes"

type ButtonEvent = React.MouseEvent<HTMLButtonElement>
type InputEvent = React.ChangeEvent<HTMLInputElement>

export default function Signup() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [firstName, setFirstName] = useState<string>("")
  const [emailAddress, setEmailAddress] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string | {}>("")

  const isInvalid = firstName === "" || password === "" || emailAddress === ""

  const hanldeSignup = (e: ButtonEvent) => {
    e.preventDefault()
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error> {error} </Form.Error>}

          <Form.Base onSubmit={hanldeSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }: InputEvent) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }: InputEvent) =>
                setEmailAddress(target.value)
              }
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="Password"
              onChange={({ target }: InputEvent) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user?{" "}
              <Form.Link to={ROUTES.SIGN_IN}>Sign in now</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
