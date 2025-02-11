import DashboardSection from "../DashboardDescription/DashboardDescription";

export default function Dashboard() {
  const sectionData = [
    {
      heading: "Dashboard & page Management",
      paragraphs: [
        "You can manage all aspects of your Memorial page - all in one place with your own dedicated dashboard.",
        "Our dashboard allows you to update your page anytime, from your computer or on your mobile.",
        "You can update all the settings for your Memorial (custom address, privacy options, status) - but also all the statistics (traffic, memory wall, photos & videos).",
      ],
      imageSrc: "/images/dashboard.png",
      imageAlt: "Dashboard image",
    },
    {
      heading: "Invite friends & family to be part of their story",
      imageSrc: "/images/friends.png",
      paragraphs: [
        "Always-Here is a communal platform where friends and family can honor a loved one's life story. It transforms the Memorial into a shared tribute, weaving together an array of memories and stories. By contributing, friends and family help preserve these memories for future generations, ensuring the spirit of the departed remains vibrant.",
        "Encourage your loved ones to contribute by sharing stories, anecdotes, photos, and sharing your memorial page link.",
      ],
      imageAlt: "friends image",
    },
    {
      heading: "A Personal Online Memorial",
      paragraphs: [
        "Always-Here offers a beautifully designed, user-friendly, and highly customizable platform for your Online Memorial site.",
      ],
      imageSrc: "/images/online-memorial.png",
      imageAlt: "Online memorial image",
      points: [
        { icon: "fa-leaf", text: "Page Statistics" },
        { icon: "fa-book", text: "Dedicated Designs" },
        { icon: "fa-dice", text: "QR code generation" },
        { icon: "fa-desktop", text: "Customize your page" },
        { icon: "fa-bookmark", text: "Your own Address" },
        { icon: "fa-play", text: "Share on Social media" },
      ],
    },
  ];

  return (
    <div>
      {sectionData.map((section, index) => (
        <DashboardSection
          key={index}
          heading={section.heading}
          paragraphs={section.paragraphs}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          points={section.points}
          reverse = {index === 1 ? "reverse":""}
        />
      ))}
    </div>
  );
}
