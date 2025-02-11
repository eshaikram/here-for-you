import React from "react";
import "./whyuscard.css"

export default function WhyUsCard({ icon, title, description }) {
  return (
    <div className="col-lg-4 false">
      <div className="why-us-card">
        <div className="icon-use">
          <i className={`fa-solid ${icon}`}></i>
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
