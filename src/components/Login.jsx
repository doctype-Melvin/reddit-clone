import React, { useState } from "react";
import { createUserWithEmailAndPassword,
onAuthStateChanged,
signInWithEmailAndPassword,
signOut
} from 'firebase/auth'
import { auth } from '../firebaseConfig'
import '../styles/Login.css'

export default function Login(props) {

    const [ regEmail, setRegEmail ] = useState('')
    const [ regPass, setRegPass ] = useState('')
    const [ userEmail, setUserEmail ] = useState('')
    const [ userPassword, setUserPassword ] = useState('')
    const [ user, setUser ] = useState({})

    // onAuthStateChanged(auth, (currentUser) => {
    //     console.log(currentUser)
    // })

    const registerUser = async () => {
        try { 
            const user = await createUserWithEmailAndPassword(auth, regEmail, regPass)
        } catch (error) {
            console.log(error.message)
        }
    }

    const loginUser = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, userEmail, userPassword)
            console.log(`signed in as ${user}`)
        } catch (error) {
            console.log(error.message)
        }
    }

    const logoutUser = async () => {
        await signOut(auth)
    }

    const toggleLogin = () => props.setIsLogin(prevState => !prevState)
    return (
        <div className="loginCt">
            <div className="form">
                <span>Sign Up </span>
                <input type="email" name="email" placeholder="Email"
                onChange={(e) => setRegEmail(e.target.value)}
                />
                <input type="password" name="password" placeholder="Password"
                onChange={(e) => setRegPass(e.target.value)}
                />
                <button type="button" className="signInBtn" onClick={registerUser}>Sign Up</button>
                <div className="divider"></div>
                
                <span>Sign In </span>
                <input type="email" name="email" placeholder="Email"
                onChange={(e) => setUserEmail(e.target.value)}
                />
                <input type="password" name="password" placeholder="Password" 
                onChange={(e) => setUserPassword(e.target.value)}
                />
                <button type="button" className="signInBtn" onClick={loginUser}>Sign In</button>
                <div className="divider"></div>
            <button type="button" onClick={toggleLogin}>Google</button>
            </div>
        </div>
    )
}