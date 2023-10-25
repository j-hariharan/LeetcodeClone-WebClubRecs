import { initializeApp, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"


initializeApp({
    credential: cert("./leetcode-webclub-firebase-adminsdk-ythqa-6a891eb4f6.json")
})

let db = getFirestore()

export let questions = db.collection("questions")
export let users = db.collection("users")