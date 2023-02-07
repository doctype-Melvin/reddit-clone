import React, { useState } from "react";
import '../styles/Sidebar.css'

export default function Sidebar(props) {

  const [ login, setLogin ] = useState(false)

  const toggleLog = () => setLogin(prevState => !prevState)

    return (
        <div className="sidebar">
            <div className="nav">
                <ul>
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                    <li>
                        {login ? (
                            <a onClick={toggleLog}>Logout</a>
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