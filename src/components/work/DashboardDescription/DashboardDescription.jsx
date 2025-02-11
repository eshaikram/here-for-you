import React from "react";
import Image from "next/image";
import "./dashboard.css";

export default function DashboardSection({ heading, paragraphs = [],imageSrc,imageAlt,points = [], reverse }) {
  return (
    <div className={`row ${reverse}`}>
      <div className="col-lg-6">
        <div className="banner">
          <Image src={imageSrc} width={650} height={450} alt={imageAlt} />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="dash position-relative">
          <h2>{heading}</h2>
          <hr className="divider" />
        
          <div className="description">
            {paragraphs.length > 0 ? (
              paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>No content available.</p>
            )}
          </div>

          {points.length > 0 && (
            <div className="points">
              <div className="row1">
                {points.map((point, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="point">
                      <p>
                        <i className={`fa-solid ${point.icon}`}></i> {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
