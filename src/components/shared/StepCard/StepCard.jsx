import React from "react";
import "./StepCard.css";

const StepCard = ({ step, index, activeStep, setActiveStep }) => (
  <div
    className={`how-it-works-card ${activeStep === index ? "active" : ""}`}
    onClick={() => setActiveStep(activeStep === index ? null : index)}
  >
    <h3>{step.title}</h3>
    <i className="fa fa-chevron-down"></i>
  </div>
);

export default StepCard;
