import React from "react";
import FeatureCard from "@/components/shared/FeatureCard/FeatureCard";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      icon: "fa-light fa-paint-brush",
      title: "Modern & Sophisticated",
      text: "Professionally designed templates that look stunning on any device.",
    },
    {
      icon: "fa-users",
      title: "Share & Smile",
      text: "Allow friends and family to share photos and messages from fun times together.",
    },
    {
      icon: "fa-pen",
      title: "Highly Customizable",
      text: "Choose colours, add photos and videos, and customize the layout easily. It takes 5 mins to set up and customize.",
    },
    {
      icon: "fa-expand",
      title: "QR Memorial Code",
      text: "A specially generated code that can be placed on headstones, plaques, and memorial benches, when scanned it will load your memorial page.",
    },
  ];
  return (
    <div className="details-container">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesSection;
