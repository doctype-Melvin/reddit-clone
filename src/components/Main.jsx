import React from "react";
import PostBox from "./PostBox";

export default function Main() {
    return (
        <div className="mainCt">
            <div className="createPost">
                <PostBox />
            </div>
            <div className="filterPosts">Filter Posts Box</div>
            <div className="feed">Feed</div>
            <div className="sidebar">Sidebar on right</div>
        </div>
    )
}