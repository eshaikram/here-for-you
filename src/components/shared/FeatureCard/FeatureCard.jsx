import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({ icon, title, text }) => (
  <div className="feature-card">
    <i className={`fa ${icon} icon`}></i>
    <h5 className="feature-title">{title}</h5>
    <p className="feature-text">{text}</p>
  </div>
);

export default FeatureCard;
