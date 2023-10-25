import { readable } from "svelte/store"
import { getAuth, onAuthStateChanged, type User } from "firebase/auth"
import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebaseConfig"

  
let user = readable<User | null> (null, set => {

    initializeApp(firebaseConfig)
    const auth = getAuth()

    onAuthStateChanged(auth, user => {
        set(user)
    })
})

export default user