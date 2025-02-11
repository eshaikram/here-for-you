"use client";
import React, { useEffect, useState } from "react";
import "./sidebar.css";

export default  function PageSettings ({ isOpen, onClose }){
  const [sections, setSections] = useState([
    "My Story",
    "Favorites",
    "Timeline",
    "Gallery",
    "Family Tree",
    "Memory Wall",
    "Videos",
  ]);
  const [randomColors, setRandomColors] = useState([]);
  const [pageColor, setPageColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [fontWeight, setFontWeight] = useState("normal");
  const [visibleSection, setVisibleSection] = useState(null);

  useEffect(() => {
    setRandomColors(
      Array.from({ length: 20 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`)
    );
  }, []);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className={`offcanvas offcanvas-start ${isOpen ? "show" : "hide"}`} tabIndex="-1">
      <div className="offcanvas-header">
        <div className="offcanvas-title">
          <h2>Page configurations</h2>
          <div className="viewline"></div>
        </div>
  
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>
      <div className="offcanvas-body">
        <div className="page-setting-body">
          <div className="tools">
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" onClick={() => toggleSection("reorder")}>
                    Re-order sections
                  </button>
                </h2>
                <div className={`accordion-body ${visibleSection === "reorder" ? "show" : "hide"}`}>
                  <p>Re-order the different sections of the page:</p>
                  <div className="change-orders">
                    <div className="list-group">
                      {sections.map((item, index) => (
                        <div key={index} className="list-item" draggable="true">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

 
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    onClick={() => toggleSection("pageColor")}
                  >
                    Page color
                  </button>
                </h2>
                <div
                  className={`accordion-body ${
                    visibleSection === "pageColor" ? "show" : "hide"
                  }`}
                >
                  <div className="color-pallets">
                    {randomColors.map((color, index) => (
                      <div
                        key={index}
                        className="pallet"
                        style={{ backgroundColor: color }}
                        onClick={() => setPageColor(color)}
                      />
                    ))}
                  </div>
                  <label className="color-picker">
                    <input
                      type="color"
                      value={pageColor}
                      onChange={(e) => setPageColor(e.target.value)}
                    />
                    <i className="fa-solid fa-palette"></i>
                  </label>
                </div>
              </div>

              {/* Background Color */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    onClick={() => toggleSection("bgColor")}
                  >
                    Background color
                  </button>
                </h2>
                <div
                  className={`accordion-body ${
                    visibleSection === "bgColor" ? "show" : "hide"
                  }`}
                >
                  <div className="color-pallets">
                    {randomColors.map((color, index) => (
                      <div
                        key={index}
                        className="pallet"
                        style={{ backgroundColor: color }}
                        onClick={() => setBgColor(color)}
                      />
                    ))}
                  </div>
                  <label className="color-picker">
                    <input
                      type="color"
                      value={pageColor}
                      onChange={(e) => setPageColor(e.target.value)}
                    />
                    <i className="fa-solid fa-palette"></i>
                  </label>
                </div>
              </div>

              {/* Text Color */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    onClick={() => toggleSection("textColor")}
                  >
                    Text color
                  </button>
                </h2>
                <div
                  className={`accordion-body ${
                    visibleSection === "textColor" ? "show" : "hide"
                  }`}
                >
                  <div className="color-pallets">
                    {randomColors.map((color, index) => (
                      <div
                        key={index}
                        className="pallet"
                        style={{ backgroundColor: color }}
                        onClick={() => setTextColor(color)}
                      />
                    ))}
                  </div>
                  <label className="color-picker">
                    <input
                      type="color"
                      value={pageColor}
                      onChange={(e) => setPageColor(e.target.value)}
                    />
                    <i className="fa-solid fa-palette"></i>
                  </label>
                </div>
              </div>

              {/* Font Weight */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    onClick={() => toggleSection("fontWeight")}
                  >
                    Font weight
                  </button>
                </h2>
                <div
                  className={`accordion-body ${
                    visibleSection === "fontWeight" ? "show" : "hide"
                  }`}
                >
                  <button onClick={() => setFontWeight("lighter")}>
                    Light
                  </button>
                  <button onClick={() => setFontWeight("bold")}>Bold</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-btns">
                <button className="btn btn-primary">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  View Live Page
                </button>
                <button className="btn btn-primary">
                  Register page
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


