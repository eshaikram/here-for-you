"use client"

import { useState } from "react";
export default function FavoritesSection({ showInputs = true }) {
  const [inputs, setInputs] = useState([]);
  const [isFavEnabled, setIsFavEnabled] = useState(false);

  const addInputField = () => {
    setInputs([...inputs, { id: Date.now(), question: "", response: "" }]);
  };

  const removeInputField = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  return (
    <div className="favorites-container">
  <div className="favs">
    <input className="fav-input" placeholder="Favorites" defaultValue="Favorites" />
    
    {showInputs && (
      <label className="toggle-switch">
        <input type="checkbox" onChange={(e) => setIsFavEnabled(e.target.checked)} />
        <span className="slider"></span>
      </label>
    )}
  </div>
  
  <hr className="design-line" />

  {showInputs && (
    <>
      {inputs.map((input) => (
        <div key={input.id} className="input-box">
          <input type="text" placeholder="What was {firstname}’s favorite ..... " className="fav-question" />
          <textarea placeholder="Your Response here" className="fav-response"></textarea>
          <button onClick={() => removeInputField(input.id)} className="delete-btn"><i className="fa-solid fa-trash"></i></button>
        </div>
      ))}
      {isFavEnabled && <button className="addmore" onClick={addInputField}><i className="fa-solid fa-plus"></i> Add More</button>}
    </>
  )}
</div>

  );
}
