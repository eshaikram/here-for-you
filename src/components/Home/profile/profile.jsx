import React from "react";
import Profile from "@/components/shared/profileCard/profileCard";

const MainAppProfile = () => {
  const profiles = [
    {
      imageSrc: "/images/name.png",
      title: "Start the story..",
      iconClass: "fas fa-pencil-alt",
      description: "Add your loved one's name, date of birth & passing, and where they lived and died. Upload a photo, and start to write their always here story."
    },
    {
      imageSrc: "/images/ownUrl.png",
      title: "Get your very own website address",
      iconClass: "fas fa-globe",
      description: "Create a unique web address for your memorial like: www.always-here.co.uk/tom-freddy",
    },
    {
      imageSrc: "/images/password.png",
      title: "Keep your page private",
      iconClass: "fas fa-lock",
      description: "You have the option to add a password to your Memorial page to maintain privacy, or you can leave it open for everyone to view and share"
    }
  ];

  return (
    <div className="app-container">
      {profiles.map((profile, index) => (
        <Profile
          key={index}
          imageSrc={profile.imageSrc}
          title={profile.title}
          iconClass={profile.iconClass}
          description={profile.description}
          reverse={index === 1 ? "reverse" : ""} 
        />
      ))}
    </div>
  );
};

export default MainAppProfile;
