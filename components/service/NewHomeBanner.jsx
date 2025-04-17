import React from "react";



const NewHomeBanner = () => {
  return (
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-11">
            <div className="digital-agency container-fluid d-flex align-items-center justify-content-center py-5">
      <div className="row align-items-center w-100 px-md-5 px-3">

        {/* Left - Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src="/images/Home-Page/mbl-banner/character-img-3.png" alt="Digital Agency Art" className="img-fluid hero-img" />
        </div>

        {/* Right - Text */}
        <div className="col-md-6 text-white text-md-start text-center">
          <h1 className="display-3 fw-bold m-0" style={{fontSize:"130px"}}>Digital </h1><p className="mt-3 " style={{position:"relative",top:"-140px", left:"450px",width:"40%"}}>
            We specialize in providing services related to digital marketing, web development, design, and technology.
          </p>
          <h1 className="display-3 fw-bold" style={{fontSize:"130px", position:"relative",top:"-150px",left:"200px"}}>Agency</h1>
          
        </div>

     


      </div>
    </div>
            </div>
        </div>
    </div>
  );
};

export default NewHomeBanner;
