"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function FamilyTree() {
  const [isFamilyEnabled, setIsFamilyEnabled] = useState(false);

  return (
    <div className="family-tree-container">
      <div className="family">
        <input className="families-input" name="heading" placeholder="Family" type="text" defaultValue="Family Tree" />
        <label className="toggle-switch">
          <input type="checkbox" onChange={(e) => setIsFamilyEnabled(e.target.checked)} />
          <span className="slider"></span>
        </label>
      </div>
      <hr className="design-line" />

      {isFamilyEnabled && (
        <div className="familytree">
          <div className="d-flex justify-between level-1">
            <div className="d-flex">
              <div className="card-wrapper left-card">
                <div className="main-card">
                  <div className="add-icon">
                    <i className="fa fa-add"></i>
                  </div>
                </div>
                <div className="line-right"></div>
                <div className="line-down"></div>
              </div>
              <div className="card-wrapper right-card">
                <div className="line-down"></div>
                <div className="line-left"></div>
                <div className="main-card">
                  <div className="add-icon">
                    <i className="fa fa-add"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="level-3 d-flex justify-between">
            <div className="siblings-wrapper">
              <div className="d-flex siblings">
                <div className="line-top"></div>
                <div className="line-left"></div>
                <div className="card-wrapper">
                  <div className="main-card">
                    <div className="add-icon">
                      <i className="fa fa-add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="card-wrapper">
                <div className="main-card">
                  <div className="card-image" style={{ transform: "translateY(-30px)" }}>
                    <Image src="/images/profile.jpg" width={200} height={200} alt="User" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
