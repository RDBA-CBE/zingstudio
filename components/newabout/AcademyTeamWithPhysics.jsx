import React from "react";
import PhysicsCircles from "./AcademyTeamSection-1";
import AcademyTeamSection from "./AcademyTeamSection";


const AcademyTeamWithPhysics = () => {
  return (
    <div className="academy-team-wrapper position-relative">
      <PhysicsCircles />
      <div className="content-layer position-relative" style={{ zIndex: 2 }}>
        <AcademyTeamSection />
      </div>
    </div>
  );
};

export default AcademyTeamWithPhysics;
