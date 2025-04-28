import React from "react";
import AcademyTeamSection from "./AcademyTeamSection";

const circles = [
  { id: "ecae91b", url: "/images/sample/homepage_1-7.webp", width: 375, height: 375 },
  { id: "a208805", url: "/images/sample/homepage_1-1.webp", width: 148, height: 148 },
  { id: "f773497", url: "/images/sample/homepage_1-2.webp", width: 225, height: 225 },
  { id: "778131d", url: "/images/sample/homepage_1-3.webp", width: 350, height: 350 },
  { id: "ae61a10", url: "/images/sample/homepage_1-7.webp", width: 225, height: 225 },
  { id: "bbfe833", url: "/images/sample/homepage_1-5.webp", width: 148, height: 148 },
  { id: "d921808", url: "/images/sample/homepage_1-6.webp", width: 450, height: 450 },
  { id: "0dfae77", url: "/images/sample/homepage_1-8.webp", width: 150, height: 150 },
  { id: "4326c43", url: "/images/sample/homepage_1-10.webp", width: 318, height: 318 },
  { id: "a087b13", url: "/images/sample/homepage_1-9.webp", width: 225, height: 225 },
 
];

const PhysicsCircles = () => {
  return (
    <div className="physics-wrapper d-none d-lg-block">
      <AcademyTeamSection/>
      {circles.map((circle, index) => (
        <div
          key={circle.id}
          className={`circle-item item-${index}`}
          style={{ width: circle.width, height: circle.height }}
        >
          <img src={circle.url} alt={`Circle ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default PhysicsCircles;
