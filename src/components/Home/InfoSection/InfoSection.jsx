import React from "react";
import "./InfoSection.css";

const InfoSection = ({ icon, title, description, children }) => {
  return (
    <div className="info-section">
      <div className="info-icon">
        <i className={`fa ${icon}`}></i>
      </div>
      <div className="info-content">
        <h4>{title}</h4>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
