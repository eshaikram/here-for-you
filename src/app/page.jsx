import React from "react";
import HeroSection from "@/components/Home/hero-content/heroContent";
import FeaturesSection from "@/components/Home/FeaturesSection/FeaturesSection";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import MainAppProfile from "@/components/Home/profile/profile";
import Reviews from "@/components/Home/reviews/reviews";
import "./page.css";
import Features from "@/components/Home/Featues/feature";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <MainAppProfile />
      <Reviews />
      <Features/>
    </div>
  );
}
