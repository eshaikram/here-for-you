"use client";
import React, { useState, useEffect } from "react";
import StepCard from "@/components/shared/StepCard/StepCard";
import "./HowItWorks.css";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null);

 
  useEffect(() => {
    const storedStep = localStorage.getItem("activeStep");
    if (storedStep !== null) {
      setActiveStep(parseInt(storedStep, 10)); 
    }
  }, []);


  useEffect(() => {
    if (activeStep !== null) {
      localStorage.setItem("activeStep", activeStep);
    }
  }, [activeStep]);

  const steps = [
    {
      title: "Create Your Memorial Page",
      content: (
        <div className="content-container">
          <div className="text-section">
            <h3>Choose a Design</h3>
            <div className="icon">
              <i className="fa fa-paint-brush"></i>
            </div>
            <p>
              Select your design from either the male or female design templates. If this is for your furry friend, try our specialty animal design.
            </p>
          </div>
          <div className="image-section">
            <img src="/images/design.png" alt="Design Example" className="design-image" />
          </div>
        </div>
      ),
    },
    {
      title: "Personalize It",
      content: (
        <div className="content-container">
          <div className="text-section">
            <h3>Add photos & videos</h3>
            <div className="icon">
              <i className="fa fa-pencil-alt"></i>
            </div>
            <p>Keep memories alive with Photos and Videos. Upload photos in 2 clicks or integrate videos from Youtube.</p>
          </div>
          <div className="image-section">
            <img src="/images/design1.jpg" alt="Personalization Example" className="design-image" />
          </div>
        </div>
      ),
    },
    {
      title: "Share With Others",
      content: (
        <div className="content-container">
          <div className="text-section">
            <h3>Share your page</h3>
            <div className="icon">
              <i className="fa fa-share-alt"></i>
            </div>
            <p>Share your Online Memorial on Social Media (Facebook, Twitter) or send it directly via WhatsApp, Messenger, or E-mail.</p>
          </div>
          <div className="image-section">
            <img src="/images/design2.png" alt="Sharing Example" className="design-image" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="how-it-works-container">
      <h2>How Does It Work</h2>
      <div className="how-it-works-cards">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            step={step}
            index={index}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        ))}
      </div>
      {activeStep !== null && <div className="how-it-works-content">{steps[activeStep].content}</div>}
    </div>
  );
};

export default HowItWorks;
