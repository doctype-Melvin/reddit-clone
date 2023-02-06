import React from "react";
import '../styles/Header.css'

export default function Header() {
    return (
        <div className="headerCt">
            <div className="logoCt">
                <img className="logo" src="logo.png" />
                <span className="appName">cloned<span className="redI">i</span>t</span>
            </div>
            <div className="searchCt">
                <input className="searchBar" placeholder="Search"/>
            </div>
        </div>
    )
}