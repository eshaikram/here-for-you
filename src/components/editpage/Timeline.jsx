"use client";
import React, { useState } from "react";

export default function Timeline({showTimeline=true}) {
  const [timelines, setTimelines] = useState([]);
  const [isTimelineEnabled, setIsTimelineEnabled] = useState(false);

  const addTimeline = () => {
    setTimelines([
      ...timelines,
      { id: Date.now(), year: "", month: "", day: "", headline: "", description: "" },
    ]);
  };

  const removeTimeline = (id) => {
    setTimelines(timelines.filter((item) => item.id !== id));
  };

  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="timeline-container">
    
      <div className="time">
        <input className="time-input" name="heading" placeholder="Timeline" type="text" defaultValue="Timeline" />
      { showTimeline  &&(
        <>
  
        <label className="toggle-switch">
          <input type="checkbox" onChange={(e) => setIsTimelineEnabled(e.target.checked)} />
          <span className="slider"></span>
        </label>
        </>
)}
</div>
<hr className="design-line" />
{ showTimeline  &&(
  <>
      {timelines.map((timeline) => (
        <div key={timeline.id} className="timeline-box">
          <div className="timeline-left">
            <select className="timeline-select">
              <option>Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select className="timeline-select">
              <option>Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            <select className="timeline-select">
              <option>Day</option>
              {days.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>

          <div className="timeline-right">
            <input type="text" placeholder="Headline" className="timeline-headline" />
            <div className="my-timeliness">
              <i className="fa-solid fa-location-dot"></i>
              <input type="text" placeholder="Description" className="timeline-description" />
            </div>
          </div>

          <button onClick={() => removeTimeline(timeline.id)} className="delete-timeline">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
      
      {isTimelineEnabled && (
        <button className="addmoretimeline" onClick={addTimeline}>
          <i className="fa-solid fa-plus"></i> Add More Timeline
        </button>
      )}
    </>
    )}
    </div>
  );
}
