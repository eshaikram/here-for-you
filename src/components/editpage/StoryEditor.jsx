"use client"
import { useState, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default function StoryEditor({ showEditor = true }) {
  const [isStoryEnabled, setIsStoryEnabled] = useState(false);
  const editorRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (showEditor && editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
          ],
        },
      });
    }
  }, [showEditor]);
  useEffect(() => {
    if (isStoryEnabled) {
      console.log("Editor Enabled");
    } else {
      console.log("Editor Disabled");
    }
  }, [isStoryEnabled]);
  return (
    <div className="editorr">
      <input className="story-input" placeholder="My Story" defaultValue="My Story" />
      {showEditor && (
        <>
          <label className="toggle-switch">
            <input type="checkbox" checked={isStoryEnabled} onChange={(e) => setIsStoryEnabled(e.target.checked)} />
            <span className="slider"></span>
          </label>
          {isStoryEnabled && <div style={{ height: "400px" }} ref={editorRef}></div>}
        </>
      )}
    </div>
  );
}
