import React, { useContext, useEffect, useState } from "react"
import { SelectProfileContainer } from "./profile"
import { FirebaseContext } from "../context/firebase"
import { Card, Header, Loading } from "../components"
import logo from "../logo.svg"
import * as ROUTES from "../constants/routes"

type Profile = {
  displayName: string
  photoURL: string
}
export function BrowseContainer({ slides }) {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [profile, setProfile] = useState<Profile>({} as Profile)
  const [loading, setLoading] = useState<boolean>(true)
  const { firebase }: any = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Film</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            optio alias unde modi dolorem in exercitationem voluptatibus
            explicabo ut quidem laborum ipsam sint minima porro asperiores,
            aliquam quae quibusdam et.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}
