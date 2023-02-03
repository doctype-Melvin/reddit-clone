import React from "react";
import FilterBox from "./FilterBox";
import Post from "./Post";
import PostBox from "./PostBox";

export default function Main() {
    return (
        <div className="mainCt">
            <div className="createPost">
                <PostBox />
            </div>
            <div className="filterPosts">
                <FilterBox />
            </div>
            <div className="feed">
                <Post />
            </div>
            <div className="sidebar">Sidebar on right</div>
        </div>
    )
}