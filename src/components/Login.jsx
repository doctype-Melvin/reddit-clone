import React from "react";
import '../styles/Login.css'

export default function Login(props) {
    const toggleLogin = () => props.setIsLogin(prevState => !prevState)
    return (
        <div className="loginCt">
            <div className="form">
                <input type="email" name="email" placeholder="Email" ></input>
                <input type="password" name="password" placeholder="Password"></input>
                <button type="button" className="signInBtn" onClick={toggleLogin}>Sign In</button>
                <div className="divider"></div>
            <button type="button" onClick={toggleLogin}>Google</button>
            </div>
        </div>
    )
}