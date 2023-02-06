import React from "react";
import '../styles/Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="nav">
                <ul>
                    <li><a>Profile</a></li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
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