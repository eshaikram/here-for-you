import React from "react";
import "./works.css";
import Hero from "@/components/work/hero/hero";
import Timeline from "@/components/work/timeline/timeline";
import ImageSection from "@/components/work/imagesection/imagesection";
import Dashboard from "@/components/work/dashboards/dashboards";
import WhyUsSection from "@/components/work/whyussection/whyussection";

export default function Page() {
  return (
    <div className="container">
      <Hero />
      <div className="my-content">
        <div className="left">
          <h2>How does it work?</h2>
          <Timeline />
        </div>
        <div className="right">
          <ImageSection imageSrc="/images/right.png" altText="Right Image" width={550} height={400} />
        </div>
      </div>
      <Dashboard />
      <div className="why-use">
      <h2>How does it work?</h2>
      <WhyUsSection />
      </div>      
    </div>
  );
}
