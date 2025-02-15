"use client";
import React, { useState } from "react";

export default function MemoryWall({ showToggle = true }) {
  const [isMemoryEnabled, setIsMemoryEnabled] = useState(true); // Always enabled when toggle is hidden
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  return (
    <div className="memory-container">
      <div className="Memory">
        <input
          className="memories-input"
          name="heading"
          placeholder="memory"
          type="text"
          defaultValue="Memory Wall"
        />
        
        {showToggle && (
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={isMemoryEnabled}
              onChange={(e) => setIsMemoryEnabled(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        )}
      </div>
      <hr className="design-line" />

      <div className="memory-detail">
        {isMemoryEnabled && (
          <p>
            To live in the hearts we leave behind is not to die.
            <br />
            Please share your Photos and Memories about the beloved.
          </p>
        )}

        {isMemoryEnabled && (
          <button className="memory-button" onClick={openModal}>
            Contribute
          </button>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={() => setIsModalOpen(false)}>✖</button>
            <h2 className="modal-title">Contribute</h2>

            <div className="modal-body">
              <div className="input-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-group">
                <label>Your Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="input-group">
                <label>Your Message</label>
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <div className="input-group">
                <label>Your Images</label>
                <button className="add-image">Add Image →</button>
              </div>
            </div>

            <div className="modal-footer">
              <button className="close-modal" onClick={() => setIsModalOpen(false)}>Close</button>
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
