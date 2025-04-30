import React from "react";
const text={

}
const Textalign = () => {
  return (
    <div className="container-fluid  text-white d-flex align-items-center pt-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Side */}
          <div className="col-xl-7 col-lg-8">
            <h1 className="digital-intro-title">Student  </h1>

            <div className="digital-intro-subline d-flex align-items-center">
              <span className="arrow-line"></span>
              <span className="arrow-symbol">→</span>
              <h1 className="digital-intro-highlight">Journey at</h1>
            </div>

            <h1 className="digital-intro-title">Zing Studio</h1>
          </div>

          {/* Right Side */}
          <div className="col-12 col-lg-1 ">
            <p className="digital-intro-description">
            From newbie to digital pro—your journey starts here! With expert mentors, hands-on projects, and real-world skills, we’ll help you level up and make your mark in the digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textalign;
