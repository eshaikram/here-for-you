"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./design.css";
import PageSettings from "../sidebar/page";
import axios from "axios";

export default function Page() {
  const [inputs, setInputs] = useState([]);
  const [timelines, setTimelines] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const editorRef = useRef(null);
  const quillInstance = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

useEffect(() => {
  if (editorRef.current && !quillInstance.current) {
    quillInstance.current = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
        ],
      },
    });
  }
}, []);

  return (
    <div className="pagedesign">
      <div className="my-layout">
        <div className="banner">
          <Image src="/images/background.jpg" width={1350} height={500} alt="#" />
        </div>
        <div className="fixed-buttons">
          <button className="btn6" onClick={() => setIsSidebarOpen(true)}>
            <i className="fa-solid fa-sliders"></i> Page Setting
          </button>
          {isSidebarOpen && <PageSettings isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />}
          <button className="btn6">
            <i className="fa fa-arrow-left"></i> Back To Dashboard
          </button>
        </div>
      </div>


      <div className="user-header-edit">
        <div className="profile-section">
          <div className="profile">
            <div className="profile-image">
              <Image
                src="/images/profile.jpg"
                alt="Profile Image"
                width={300}
                height={300}
              />
            </div>
            <button className="btn-edit">
              <i className="fa-solid fa-image"></i> Change Image
            </button>
          </div>

          <div className="detailss">
            <div className="name-editor">
              <input
                placeholder="F Name"
                name="firstName"
                type="text"
                className="name-input"
                defaultValue="F Nam"
              />
              <input
                placeholder="M Name"
                name="middleName"
                type="text"
                className="name-input"
                defaultValue="M Nan"
              />
              <input
                placeholder="L Name"
                name="lastName"
                type="text"
                className="name-input"
                defaultValue="L Nam"
              />
            </div>

            <div className="dob-container">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
              </span>
              <div className="dob-outer">
                <div className="dob-input">
                  <label>Date of Birth</label>
                  <input
                    id="dob"
                    type="text"
                    readOnly
                    defaultValue="02/01/2025"
                  />
                </div>
              </div>

              <div className="dob-outer">
                <div className="dob-input">
                  <label>Date of Passing</label>
                  <input
                    id="dod"
                    type="text"
                    readOnly
                    defaultValue="02/01/2025"
                  />
                </div>
              </div>
            </div>

            <div className="location-container">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <input
                placeholder="Last location"
                name="location"
                type="text"
                className="location-input"
                defaultValue="Location"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="top-nav">
        <div className="nav-itemss">
          <a href="#obituary" className="nav-linkss">
            <i className="fa-solid fa-book-open"></i> My Story
          </a>
        </div>
        <div className="nav-itemss">
          <a href="#favorite" className="nav-linkss">
            <i className="fa-solid fa-star"></i> Favorites
          </a>
        </div>
        <div className="nav-itemss">
          <a href="#timeline" className="nav-linkss">
            <i className="fa-solid fa-arrow-right-to-bracket"></i> Timeline
          </a>
        </div>
        <div className="nav-itemss">
          <a href="#gallery" className="nav-linkss">
            <i className="fa-solid fa-film"></i> Gallery
          </a>
        </div>
        <div className="nav-itemss">
          <a href="#family-tree" className="nav-linkss">
            <i className="fa-solid fa-tree"></i> Family Tree
          </a>
        </div>
        <div className="nav-itemss">
          <a href="#memory-wall" className="nav-linkss">
            <i className="fa-solid fa-comment"></i> Memory Wall
          </a>
        </div>
      </div>
      <div className="editorr">
        <input
          className="story-input"
          name="heading"
          placeholder="My Story"
          type="text"
          defaultValue="My Story"
        />
      </div>
      <hr className="linee" />
      <div style={{ maxWidth: "80%", margin: "2rem auto" }}>
        <div style={{ height: "400px" }} ref={editorRef}></div>
      </div>

      <div className="favorites-container">
      <div className="favs">
        <input
          className="fav-input"
          name="heading"
          placeholder="Favorites"
          type="text"
          defaultValue="Favorites"
        />
      </div>
      <hr className="lineee" />

      {inputs.map((input) => (
        <div key={input.id} className="input-box">
          <div className="input-wrapper">
            <span className="input-number">66</span>
            <input
              type="text"
              placeholder="What was {firstname}’s favorite ..... "
              className="fav-question"
            />
          </div>
          <textarea
            placeholder="Your Response here"
            className="fav-response"
          ></textarea>
          <button onClick={() => removeInputField(input.id)} className="delete-btn">
          <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}

      <button className="addmore" onClick={addInputField}>
        <i className="fa-solid fa-plus"></i> Add More
      </button>
    </div>
    <div className="timeline-container">
      <div className="time">
        <input
          className="time-input"
          name="heading"
          placeholder="Timeline"
          type="text"
          defaultValue="Timeline"
        />
      </div>
      <hr className="lineee2" />

      {timelines.map((timeline) => (
        <div key={timeline.id} className="timeline-box">
          <div className="timeline-left">
            <select className="timeline-select">
              <option>Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select className="timeline-select">
              <option>Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select className="timeline-select">
              <option>Day</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div className="timeline-right">
            <input type="text" placeholder="Headline" className="timeline-headline" />
            <div className="my-timliness">
               <i className="fa-solid fa-location-dot"></i>
              <input type="text" placeholder="Description" className="timeline-description"/>
              </div>
            
          </div>

          <button onClick={() => removeTimeline(timeline.id)} className="delete-timeline">
          <i className="fa-solid fa-trash"></i>
            
          </button>
        </div>
      ))}

      <button className="addmoretimeline" onClick={addTimeline}>
        <i className="fa-solid fa-plus"></i> Add More Timeline
      </button>
      <div className="gallery">
        <input
          className="galleries-input"
          name="heading"
          placeholder="gallery"
          type="text"
          defaultValue="Gallery"
        />
      </div>
      <hr className="lineeee" />
      <div className="my-buttons">
        <button className="btn1">
          <i className="fa-solid fa-folder"></i>All
        </button>
        <button className="btn2" onClick={() => setFolders([...folders, ""])}>
          <i className="fa-solid fa-plus"></i>Add Folder
        </button>
      </div>

      {folders.map((folder, index) => (
        <div key={index} className="folder-container">
          <input
            className="folder-input"
            type="text"
            value={folder}
            onChange={(e) => {
              const updatedFolders = [...folders];
              updatedFolders[index] = e.target.value;
              setFolders(updatedFolders);
            }}
            placeholder="New Folder"
          />
          <button
            className="delete-folder"
            onClick={() => {
              setFolders(folders.filter((_, i) => i !== index));
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}

      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="imageInput"
        onChange={handleImageUpload}
      />

      <button className="photo" onClick={() => document.getElementById("imageInput").click()}>
        <i className="fa-solid fa-film"></i>Add A Photo
      </button>

    
      {selectedImage && (
        <div className="image-preview">
          <img src={selectedImage} alt="Selected" />
        </div>
      )}


      <div className="family">
        <input
          className="families-input"
          name="heading"
          placeholder="family"
          type="text"
          defaultValue="Family Tree"
        />
      </div>
      <hr className="lineeeee" />
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

        <div className="d-flex justify-between level-2">
          <div className="d-flex main-container">
            <div className="card-wrapper left-card">
              <div className="main-card">
                <div className="add-icon">
                  <i className="fa fa-add"></i>
                </div>
              </div>
              <div className="line-right"></div>
              <div className="line-down"></div>
            </div>
          </div>
          <div className="d-flex main-container">
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
                <div
                  className="card-image"
                  style={{ transform: "translateY(-30px)" }}
                >
                  <Image
                    src="/images/profile.jpg"
                    width={200}
                    height={200}
                    alt="User"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="spouse-wrapper">
            <div className="d-flex wifes">
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
        </div>

        <div className="level-4-wrapper">
          <span className="line-up"></span>
          <div className="level-4">
            <div className="card-wrapper">
              <div className="main-card">
                <div className="add-icon">
                  <i className="fa fa-add"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="memory-container">
      <div className="Memory">
        <input
          className="memories-input"
          name="heading"
          placeholder="memory"
          type="text"
          defaultValue="Memory Wall"
        />
      </div>
      <hr className="lineeeee" />
      <div className="memory-detail">
        <p>
          To live in the hearts we leave behind is not to die.
          <br />
          Please share your Photos and Memories about the beloved.
        </p>
        <button className="memory-button" onClick={openModal}>
          Contribute
        </button>
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
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  </div>
</div>
<hr className="lineeeeee" />


      <div className="made">
        <p>
          Made With <span>Always Here</span>
        </p>
      </div>
      <div className="page-btn">
        <button className="page-btn1">
          <i className="fa-solid fa-arrow-up-right-from-square"></i> View Live
          Page
        </button>
        <button className="page-btn2">
          Register Page<i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  );
}
