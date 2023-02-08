import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDgwMRwroLeGVLRdXUCfkZYo2wJZTlVb_o",
    authDomain: "clonedit-4d506.firebaseapp.com",
    projectId: "clonedit-4d506",
    storageBucket: "clonedit-4d506.appspot.com",
    messagingSenderId: "419064421501",
    appId: "1:419064421501:web:251c9f22fc216285aa6514"
  }

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
