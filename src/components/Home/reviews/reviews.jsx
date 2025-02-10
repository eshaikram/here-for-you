import React from "react";
import "./reviews.css";

export default function Reviews() {
  return (
    <div className="reviews-container">
      <div className="center-heading edit-section">
        <h2>Our User Reviews</h2>
        <div className="line"></div>
      </div>

      <div className="reviews-cap">
        <div className="pos">

        <i className="fa-solid fa-quote-left left"></i>
        <i className="fa-solid fa-quote-right right"></i>
        </div>
        <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p>
          Always-Here has made such a difference in how we remember our loved
          one. The digital memorial is beautifully designed, and sharing it
          with friends and family through social media has been so meaningful.
          It’s a comforting and timeless way to keep their memory alive.
        </p>
        <div className="review">
          <div className="dp">
            <img
              src="https://alwayshere.fra1.cdn.digitaloceanspaces.com/alwayshere-1727285999134-Screenshot%202024-09-25%20at%2018-38-52%20free%20profile%20pictures%20-%20Google%20Search.png"
              alt="Emily R"
              width="50"
              height="50"
            />
          </div>
          <div className="detail">
            <h3>
              Emily R<span>, Newcastle</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
