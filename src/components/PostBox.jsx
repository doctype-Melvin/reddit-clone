import React, { useEffect, useState } from "react";

export default function PostBox(props) {
    
    

    return (
        <div className="postBox">
            <img className="userAv" src="reditman.png"  />
            <input className="postInput" 
            type="text" 
            placeholder="Create Post"  
            onClick={props.handlePosting}
            />
            <button className="postBtn" type="button" >Send</button>
        </div>
    )
}