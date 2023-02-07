import React from "react";
import '../styles/Submit.css'

export default function Submit(props) {

    return (
        <div className="createPost">
            <div className="createHead">
                Create a post
            </div>
            <div className="draftCt">
                <ul className="selectMode">
                    <li>Post</li>
                    <li>Media</li>
                    <li>Link</li>
                </ul>
            </div>
        </div>
    )
}