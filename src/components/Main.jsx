import React, { useState } from "react";
import FilterBox from "./FilterBox";
import Post from "./Post";
import PostBox from "./PostBox";
import Sidebar from "./Sidebar";
import Submit from "./Submit";

export default function Main() {

    const [ isPosting, setIsPosting ] = useState(0)
    
    // useEffect to rerender feed data

    const handlePosting = () => {
        setIsPosting(prevState => !prevState)
    }

      return (
        <div className="mainCt">
            { isPosting ? (
            <>
            <Submit
            handlePosting={handlePosting} /> 
            <div className="sidebar">
                <Sidebar />
            </div>
                </>
            ) : (
                <>
            <div className="createPost">
                <PostBox
                handlePosting={handlePosting}
                />
            </div>
            <div className="filterPosts">
                <FilterBox />
            </div>
            <div className="feed">
                <Post />
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
            </>
            )
            }
        </div>
        
    )
}