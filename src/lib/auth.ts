import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCBHkv3KfgFNA25PhGazBkWqK_PFyjDO8g",
    authDomain: "leetcode-webclub.firebaseapp.com",
    projectId: "leetcode-webclub",
    storageBucket: "leetcode-webclub.appspot.com",
    messagingSenderId: "329806574865",
    appId: "1:329806574865:web:3796ae685a9ebc7cb748b0"
}


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
console.log("Firebase initialized!")

export default auth