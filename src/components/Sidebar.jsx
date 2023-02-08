import React, { useState } from "react";
import { auth as authOut } from '../firebaseConfig'
import { signOut as signOutNow } from "firebase/auth";
import '../styles/Sidebar.css'


export default function Sidebar(props) {
    console.log(props.isLogin)

  const [ login, setLogin ] = useState(false)

  const toggleLog = () => props.setIsLogin(prevState => !prevState)

  const logoutUser = async () => {
    await signOutNow(authOut)
    props.setLoggedIn(prevState => !prevState)
}

    return (
        <div className="sidebar">
            <div className="nav">
                <ul>
                        <li><a>Profile</a></li>
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