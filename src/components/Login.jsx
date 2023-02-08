import React from "react";

export default function Login() {
    return (
        <div className="loginCt">
            <div className="form">
                <input type="email" name="email" placeholder="Email" ></input>
                <input type="password" name="password" placeholder="Password"></input>
                <button type="button">Sign In</button>
            </div>
            <button type="button">Google</button>
        </div>
    )
}