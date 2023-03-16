import React, { useState, useRef } from "react";
import "../styles/submit.css";

export default function Submit(props) {
  // Make component reusable for comments
  const textareaRef = useRef(null);
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const handleTextSelect = () => {
    const textarea = textareaRef.current;
    setSelectionStart(textarea.selectionStart);
    setSelectionEnd(textarea.selectionEnd);
  };

  const handleBold = () => {
    let newText = text;
    const selectedText = text.slice(selectionStart, selectionEnd);
    if (bold) {
      newText = text.replace(`**${selectedText}**`, selectedText);
      setText(newText);
      setBold(false);
    } else {
      newText =
        text.slice(0, selectionStart) +
        `**${selectedText}**` +
        text.slice(selectionEnd);
      setText(newText);
      setBold(true);
    }
  };

  const handleItalic = () => {
    let newText = text;
    const selectedText = text.slice(selectionStart, selectionEnd);
    if (italic) {
      newText = text.replace(`<i>${selectedText}</i>`, selectedText);
      setText(newText);
      setItalic(false);
    } else {
      newText =
        text.slice(0, selectionStart) +
        `<i>${selectedText}</i>` +
        text.slice(selectionEnd);
      setText(newText);
      setItalic(true);
    }
  };

  return (
    <div className="createPost postPanel">
      <div className="createHead">
        <span>Create a post</span>
        <button
          type="button"
          className="closePanel"
          onClick={props.handlePosting}
        >
          X
        </button>
      </div>
      <div className="draftCt">
        <ul className="selectMode">
          <li>Post</li>
          <li>Media</li>
          <li>Link</li>
        </ul>
        <input className="postTitle" type="text" placeholder="Title" />
        <div className="postDraft">
          <div className="textTransform">
            <span>
              <button type="button" className="transBtn" onClick={handleBold}>
                <b>B</b>
              </button>
            </span>
            <span>
              <button type="button" className="transBtn" onClick={handleItalic}>
                <em>I</em>
              </button>
            </span>
            <span>
              <button type="button" className="transBtn">
                &#128279;
              </button>
            </span>
            <span>
              <button type="button" className="transBtn">
                S
              </button>
            </span>
            <span>
              <button type="button" className="transBtn">
                &lt;c&gt;
              </button>
            </span>
            <span>
              <button type="button" className="transBtn">
                A^
              </button>
            </span>
          </div>
          <textarea
            className="draftText"
            ref={textareaRef}
            placeholder="Text (optional)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onSelect={handleTextSelect}
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
  );
}
