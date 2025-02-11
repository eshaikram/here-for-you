import React from "react";
export default function Timeline() {
  return (
    <div className="timeline">
      {[...Array(4).keys()].map(i => (
        <div className="list-item" key={i}>
          <div className="number">{i + 1}</div>
          <p>{[
            "Select a design from our beautiful templates.",
            "Fill out all the information about your loved one like, their full name, date of birth and passing, location... Add sections like a family tree, photo gallery, life timeline, etc... you'll be done in just 3-5 mins.",
            "Choose an address for your Memorial page and save it with an e-mail and password. It takes less than a minute.",
            "YOUR MEMORIAL PAGE IS NOW READY."
          ][i]}</p>
        </div>
      ))}
      <p className="share">
        You can then share your page through our system (via Facebook, WhatsApp, e-mail, ...) - and invite Friends and Family to contribute.
      </p>
      <button className="my-btn">Get Started</button>
    </div>
  );
}
