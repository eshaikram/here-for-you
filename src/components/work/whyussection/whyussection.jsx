import React from "react";
import WhyUsCard from "../WhyUsCard/WhyUsCard";
import "./whyussection.css"
export default function WhyUsSection() {
  const cards = [
    {
      icon: "fa-paint-brush",
      title: "Editable Designs",
      description:
        "Choose from professional themes that look great on all devices.",
    },
    {
      icon: "fa-edit",
      title: "Fully Customizable",
      description:
        "Choose a template, change the colours and customize the content to what you need.",
    },
    {
      icon: "fa-expand",
      title: "Memorial QR Code",
      description:
        "A specially generated code that can be placed on headstones, plaques, and memorial benches.",
    },
    {
      icon: "fa-calendar",
      title: "Personal Content",
      description:
        "Add the photos & videos as you need with No limits to the number of posts, or messages, from your users.",
    },
    {
      icon: "fa-user",
      title: "No Registration Needed",
      description:
        "Friends & family don't need to create an account to visit the Memorial or share their memories.",
    },
    {
      icon: "fa-cloud",
      title: "Private & Secure",
      description:
        "Add a password to your Memorial page, or you can leave it open for everyone to view and share.",
    },
  ];

  return (
    <div className="row3">
      {cards.map((card, index) => (
        <WhyUsCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
