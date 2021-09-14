import React, { useContext, useEffect, useState } from "react"
import { SelectProfileContainer } from "./profile"
import { FirebaseContext } from "../context/firebase"
import { Header, Loading } from "../components"
export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
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

      <Header src="joker1">
        <p>helllo</p>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}
