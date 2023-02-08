import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { 
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider, 
  signInWithRedirect,
  getRedirectResult,
  connectAuthEmulator
} from 'firebase/auth'
import Login from './components/Login'

const firebaseConfig = {
  apiKey: "AIzaSyDgwMRwroLeGVLRdXUCfkZYo2wJZTlVb_o",
  authDomain: "clonedit-4d506.firebaseapp.com",
  projectId: "clonedit-4d506",
  storageBucket: "clonedit-4d506.appspot.com",
  messagingSenderId: "419064421501",
  appId: "1:419064421501:web:251c9f22fc216285aa6514"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const auth = getAuth(app)

// const provider = new GoogleAuthProvider();
// signInWithRedirect(auth)
// getRedirectResult(auth)
// .then((result) => {
//   const credential = GoogleAuthProvider.credentialFromResult(result)
//   const token = credential.accessToken
//   const user = result.user
// }).catch((error) => {
//   const errorCode = error.code
//   const errorMessage = error.message
//   const email = error.customData.email
//   const credential = GoogleAuthProvider.credentialFromError(error)
// })
// createUserWithEmailAndPassword(auth, email, password)
// .then((userCred) => {
//   const user = userCred.user
// })
// .catch((error) => {
//   const errorCode = error.code
//   const errorMessage = error.message
// })

function App() {

    const [ isLogin, setIsLogin ] = useState(false)

  return (
    <div className="App">
     <Header />
     {/* Conditionally render 
     the main section depending on if user 
     is logged in or not */}
     {
     isLogin ? 
     <Login
     setIsLogin={setIsLogin} /> : 
     <Main
     setIsLogin={setIsLogin}
     isLogin={isLogin}
      />
      }
    </div>
  )
}

export default App
