import React from "react";
import '../styles/Submit.css'

export default function Submit(props) {

    return (
        <div className="createPost postPanel">
            <div className="createHead">
                <span>Create a post</span>
                <button type="button"
                className="closePanel"
                onClick={props.handlePosting}
                >X</button>
            </div>
            <div className="draftCt">
                <ul className="selectMode">
                    <li>Post</li>
                    <li>Media</li>
                    <li>Link</li>
                </ul>
                <input className="postTitle"
                type="text"
                placeholder="Title"
                />
                <div className="postDraft">
                    <div className="textTransform">
                        <span><button type="button">B</button></span>
                        <span><button type="button">I</button></span>
                        <span><button type="button">Link</button></span>
                        <span><button type="button">S</button></span>
                        <span><button type="button">C</button></span>
                        <span><button type="button">A^</button></span>
                    </div>
                    <textarea className="draftText"
                    placeholder="Text (optional)"
                    />
                </div>
            </div>
            <div className="draftBtns">
                {/* Save to user drafts */}
                <button type="button">Save Draft</button>
                {/* Save to user posts and rerender feed */}
                <button type="button">Post</button> 
            </div>
        </div>
    )
}