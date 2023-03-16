import React, { useState } from "react";
import FilterBox from "./FilterBox";
import Post from "./Post";
import PostBox from "./PostBox";
import Sidebar from "./Sidebar";
import Submit from "./Submit";

export default function Main(props) {
  const [isPosting, setIsPosting] = useState(0);

  // useEffect to rerender feed data

  const handlePosting = () => {
    setIsPosting((prevState) => !prevState);
  };

  return (
    <section className="main__container">
      {isPosting ? (
        <>
          <Submit handlePosting={handlePosting} />
          <div className="sidebar">
            <Sidebar
              setIsLogin={props.setIsLogin}
              isLogin={props.isLogin}
              loggedIn={props.loggedIn}
              user={props.user}
              setUser={props.setUser}
            />
          </div>
        </>
      ) : (
        <>
          <div className="createPost">
            <PostBox handlePosting={handlePosting} />
          </div>
          <div className="filterPosts">
            <FilterBox />
          </div>
          <div className="feed">
            <Post />
          </div>
          <div className="sidebar">
            <Sidebar
              setIsLogin={props.setIsLogin}
              isLogin={props.isLogin}
              setLoggedIn={props.setLoggedIn}
              loggedIn={props.loggedIn}
              user={props.user}
              setUser={props.setUser}
            />
          </div>
        </>
      )}
    </section>
  );
}
