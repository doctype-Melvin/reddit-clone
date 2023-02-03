import React from "react";

export default function Post() {
    return (
        <div className="postCt">
            <div className="counter">
                <img className="upArrow" src="up.png" />
                <span className="voteCount">0</span>
                <img className="downArrow" src="down.png" />
            </div>
            <div className="postBody">
                <span className="subreddit">r/Raiders</span>
                <h3 className="postTitle">Jimmy G fucking sucks</h3>
                <p className="postText">
                Jimmy G is 10-2 in game were he doesn’t throw a TD pass.
                He’s consistently injured, and can’t throw a deep ball to save
                his life. What weed are people on this sub smoking
                </p>
                <div className="postFoot">
                    <div className="footEl">
                        <img className="footIcon" src="comment.png" />
                        <span className="footText">10 Comments</span>
                    </div>
                    <div className="footEl">
                        <img className="footIcon" src="gift.png" />
                        <span className="footText">Award</span>
                    </div>
                    <div className="footEl">
                        <img className="footIcon" src="share.png" />
                        <span className="footText">Share</span>
                    </div>
                    <div className="footEl">
                        <img className="footIcon" src="bookmark.png" />
                        <span className="footText">Save</span>
                    </div>
                    <div className="footEl">
                        <img className="footIcon" src="more.png" />
                    </div>
                </div>

            </div>
        </div>
    )
}