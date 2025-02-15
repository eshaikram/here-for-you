"use client";
import React, { useState } from "react";

export default function VideoSection() {
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);

  return (
    <div className="video-container">
    <div className="video">
      <input
        className="videos-input"
        name="heading"
        placeholder="video"
        type="text"
        defaultValue="Videos"
      />
      <label className="toggle-switch">
        <input
          type="checkbox"
          onChange={(e) => setIsVideoEnabled(e.target.checked)}
        />
        <span className="slider"></span>
      </label>
    </div>
    
    {isVideoEnabled && (
      <button className="addmorevideo">
        <i className="fa-solid fa-plus"></i> Add Video
      </button>
    )}
  </div>
  );
}
