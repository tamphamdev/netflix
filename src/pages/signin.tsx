import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Form } from "../components"
import * as ROUTES from "../constants/routes"
import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import { FirebaseContext } from "../context/firebase"

type ButtonEvent = React.MouseEvent<HTMLButtonElement>
type InputEvent = React.ChangeEvent<HTMLInputElement>

export default function Signin() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState<string>("test@gmail.com")
  const [password, setPassword] = useState<string>("123456")
  const [error, setError] = useState("")
  // check form input element are valid
  // email & password
  const isInvalid = password === "" || emailAddress === ""
  const handleSignIn = (event: ButtonEvent) => {
    event.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        //push to the browse page
        history.push(ROUTES.BROWSE)
      })
      .catch((error: any) => {
        console.log(error)
        setEmailAddress("")
        setPassword("")
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error} </Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }: InputEvent) =>
                setEmailAddress(target.value)
              }
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }: InputEvent) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix?
            <Form.Link to={ROUTES.SIGN_UP}> Sign up now.</Form.Link>
          </Form.Text>

          <Form.TextSmall>
            This page is protected by Google reCAPCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
