"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./livePage.css"; 

const TemplatePreview = () => {
  const [galleryFolders, setGalleryFolders] = useState([]);


  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get("/api/auth/getGallery"); 
        setGalleryFolders(response.data.folders || []);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };
    fetchGallery();
  }, []);


  return (
    <div className="page-container active" id="sticky">
      {/* Banner Section */}
      <div className="hero-section">
        <div className="hero-wrapper">
          <img 
            src="https://alwayshere.fra1.digitaloceanspaces.com/admin_alwayshere--1722321313686_cherry-blossoms-2218781_1920.jpg" 
            alt="Banner"
            className="hero-image"
          />
        </div>
      </div>

      {/* User Header */}
      <div className="profile-section">
        <div className="avatar-box">
          <img src="/_next/static/media/user.afac4556.jpg" alt="User Profile" />
        </div>
        <div className="profile-details">
          <h1>First Name Last Name</h1>
          <p><i className="fa-solid fa-calendar"></i> February 11, 2025</p>
          <p><i className="fa-solid fa-map-marker-alt"></i> Location</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <div className="container-fluid">
          <div className="navigation-bar">
            {[
              { id: "story", icon: "fa-book", text: "My Story" },
              { id: "favorites", icon: "fa-star", text: "Favorites" },
              { id: "history", icon: "fa-clock", text: "Timeline" },
              { id: "pictures", icon: "fa-images", text: "Gallery" },
              { id: "family", icon: "fa-tree", text: "Family Tree" },
              { id: "memories", icon: "fa-heart", text: "Memory Wall" },
            ].map(({ id, icon, text }) => (
              <div className="tab-item" key={id}>
                <a href={`#${id}`} className="tab-link">
                  <i className={`fa ${icon}`}></i> {text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      {[
        { id: "story", title: "My Story", content: <div className="text-box" id="message"></div> },
        { id: "favorites", title: "Favorites", content: (
          <div className="grid-layout">
            <div className="grid-item">
              <div className="fav-card">
                <h6><i className="fa-solid fa-quote-left"></i></h6>
                <p></p>
              </div>
            </div>
          </div>
        )},
        { id: "pictures", title: "Gallery", content: (
          <>
            <div className="filter-options">
              <button className="filter-btn"><i className="fa fa-folder"></i> All</button>
            </div>
            <div className="image-gallery">
              {galleryFolders.length > 0 ? (
                galleryFolders.map((folder, index) => (
                  <div key={index} className="gallery-folder">
                    <img 
                      src={`https://via.placeholder.com/150?text=${folder}`} 
                      alt={folder} 
                    />
                    <p>{folder}</p>
                  </div>
                ))
              ) : (
                <p>No folders added yet.</p>
              )}
            </div>
          </>
        )},
        { id: "memories", title: "Memory Wall", content: (
          <div className="memory-box">
            <p>To live in the hearts we leave behind is not to die.<br />Please share your Photos and Memories about Grace.</p>
            <button className="contribute-btn">Contribute</button>
          </div>
        )},
        { id: "history", title: "Timeline", content: (
          <div className="timeline-container">
            <div className="timeline-content">
              <ul className="timeline-list"></ul>
            </div>
          </div>
        )},
      ].map(({ id, title, content }) => (
        <div className="container-fluid" id={id} key={id}>
          <div className={`section-box pt-120`}>
            <div className="section-header">
              <div>
                <h2>{title}</h2>
                <div className="divider"></div>
              </div>
            </div>
            {content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplatePreview;
