"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Gallery({showGallery = true}) {
    const [isGalleryEnabled, setisGalleryEnabled] = useState(false);
    const [folders, setFolders] = useState([]);
    const [newFolderName, setNewFolderName] = useState("");
    const [selectedImages, setSelectedImages] = useState([])
    useEffect(() => {
        const fetchGallery = async () => {
          try {
            const response = await axios.get("/api/auth/getGallery");
            if (response.data.folders) {
              setFolders(response.data.folders);
              setSelectedImages(response.data.images || {}); 
            }
          } catch (error) {
            console.error("Error fetching gallery data:", error);
          }
        };
        fetchGallery();
      }, []);
    
    
      const addFolder = (folderName = "New Folder") => {
        setFolders((prevFolders) => {
          const updatedFolders = [...prevFolders, folderName];
          saveToGallery(updatedFolders, selectedImages);
          return updatedFolders;
        });
      };
      const saveToGallery = async (folders, images) => {
        try {
          const response = await axios.post("/api/auth/getGallery", { folders, images });
          console.log("Saved Successfully:", response.data);
        } catch (error) {
          console.error("Error saving to gallery:", error);
        }
      };
      
      const handleImageUpload = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
          const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
          
          setSelectedImages((prevImages = []) => [...prevImages, ...newImages]); // ✅ Ensure prevImages is always an array
          
          saveToGallery(folders, [...selectedImages, ...newImages]); // ✅ Ensure images are saved correctly
        }
      };
      
    
  return (
    <div>
       
       <div className="gallery">
        <input
          className="galleries-input"
          name="heading"
          placeholder="gallery"
          type="text"
          defaultValue="Gallery"
        />
        {showGallery &&(
        <>
        <label className="toggle-switch">
            <input
              type="checkbox"
              onChange={(e) => setisGalleryEnabled(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </>
       )}
              </div>
              <hr className="design-line" />
          {showGallery &&(
            <>
      <div className="my-buttons">
      {isGalleryEnabled &&(
        <button className="btn1">
          <i className="fa-solid fa-folder"></i>All
        </button>
      )}
       {isGalleryEnabled &&(
        <button className="btn2" onClick={() => addFolder(newFolderName)}>
          <i className="fa-solid fa-plus"></i>Add Folder
        </button>
       )}
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

      {selectedImages.length > 0 && (
  <div className="image-preview">
    {selectedImages.map((image, index) => (
      <img key={index} src={image} alt={`Selected ${index}`} />
    ))}
  </div>
)}
 {isGalleryEnabled &&(
      <button className="photo" onClick={() => document.getElementById("imageInput").click()}>
        <i className="fa-solid fa-film"></i>Add A Photo
      </button>
 )}

</>
          )}

    </div>
  )
}
