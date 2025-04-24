import React from "react";

const MiddleCTA = ({Cta}) => {
  return (
    
    
    <div className="container-fluid  pb-5 NewSupportWomen DefineZing  middleCta bg-white">
      <div className="row justify-content-center px-3 px-md-5 bg-white">
        <div className="col-12 mx-0 ">
        <div className="info-section container-fluid d-flex justify-content-center align-items-center">
    <div className="row w-100 justify-content-center text-white text-center">

      

      {/* 01 - Market Research */}
      <div className="col-10 d-flex flex-column align-items-center  justify-content-center py-4 ">
      
        <h1 className="head mt-2 px-3">
        {Cta}
        </h1>
      </div>

    </div>
  </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleCTA;
