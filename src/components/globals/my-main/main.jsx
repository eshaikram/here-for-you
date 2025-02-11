import React from "react";
import Image from "next/image";
import "./main.css"
export default function Main({ title, description }) {
  return (
    <div className="work-container">
      <Image
        className="my-imag"
        src="/images/always-here.png"
        alt="here for you"
        style={{ zIndex: -1 }}
        fill={true}
        objectFit="contain"
      />
      <div className="text-container">
        <p>{description}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
