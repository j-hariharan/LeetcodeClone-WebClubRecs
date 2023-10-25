import { readable } from "svelte/store"
import { onAuthStateChanged, type User } from "firebase/auth"
import auth from "./auth"

  
let user = readable<User | null> (null, set => {

    onAuthStateChanged(auth, user => {
        set(user)
    })
})

export default user