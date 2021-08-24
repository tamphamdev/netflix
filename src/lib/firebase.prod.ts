import "firebase/firestore"
import "firebase/auth"

import Firebase from "firebase/app"

import { seedDatabase } from "../seed"

// we need to somehow seed the database

// we need a config here

const config = {
  apiKey: "AIzaSyBHubPB4XrAZTdz1HqtSfruA-Z4JpaYbfQ",
  authDomain: "netflix-f68c6.firebaseapp.com",
  projectId: "netflix-f68c6",
  storageBucket: "netflix-f68c6.appspot.com",
  messagingSenderId: "759589548265",
  appId: "1:759589548265:web:51ff10c1c6e6e2788a0078",
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }
