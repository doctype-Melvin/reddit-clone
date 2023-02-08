import React, { useState } from "react";
import { auth as authCurrent } from '../firebaseConfig'
import { signOut as signOutNow, onAuthStateChanged } from "firebase/auth";
import '../styles/Sidebar.css'


export default function Sidebar(props) {

  const [ login, setLogin ] = useState(false)
  
  const toggleLog = () => props.setIsLogin(prevState => !prevState)

  const logoutUser = async () => {
    await signOutNow(authCurrent)
    props.setUser('')
    props.setLoggedIn(prevState => !prevState)
}

    return (
        <div className="sidebar">
            <div className="nav">
                <ul>
                    <li><a>Profile <span className="username">
                        {props.user !== '' ? props.user.user.displayName || props.user.user.email : null}
                        </span></a></li>
                    <li><a>Settings</a></li>
                    <li>
                        {props.loggedIn ? (
                            <a onClick={logoutUser}>Logout</a>
                        ) : (
                            <a onClick={toggleLog}>Login</a>
                        )
                        }
                    </li>
                </ul>
            </div>
            <div className="footer">
                <span>&copy; 2023
                    <a href="https://www.github.com/doctype-Melvin" target='_blank'>
                         doctypeMelvin
                        </a></span>
            </div>
        </div>
    )
}