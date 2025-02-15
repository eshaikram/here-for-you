"use client";
import React from "react";

export default function MadeSection({showMade=true}) {
  return (
    <div className="made-section">
      <div className="made">
        <p>
          Made With <span>Always Here</span>
        </p>
      </div>
      {showMade &&(
        <>
       
      <div className="page-btn">
        <button className="page-btn1">
          <i className="fa-solid fa-arrow-up-right-from-square"></i> View Live Page
        </button>
        <button className="page-btn2">
          Register Page <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
      </>
      )}
    </div>
  );
}
