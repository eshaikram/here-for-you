import React from "react";
import "./profileCard.css";

const Profile = ({ imageSrc, title, iconClass, description, reverse }) => {
  return (
    <div className={`profile-container ${reverse}`}>
      <div className="image-section">
        <img src={imageSrc} alt={title} className="profile-image" />
      </div>
      <div className="text-section">
        <h3>{title}</h3>
        <div className="icon">
          <i className={iconClass}></i>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Profile;
