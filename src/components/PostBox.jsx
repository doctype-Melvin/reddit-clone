import React from "react";

export default function PostBox() {
    return (
        <div className="postBox">
            <img className="userAv" src="reditman.png"  />
            <input className="postInput" type="text" placeholder="Create Post" />
            <button className="postBtn" type="button">Send</button>
        </div>
    )
}