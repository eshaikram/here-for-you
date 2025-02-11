import React from "react";
import Image from "next/image";


export default function ImageSection({ imageSrc, altText, width, height }) {
  return (
    <div className="col-lg-6">
      <div className="banner">
        <Image src={imageSrc} width={width} height={height} alt={altText} />
      </div>
    </div>
  );
}
