"use client"
import React, { useState } from "react";


const Amazingform = () => {
  const [role, setRole] = useState(" ");
  const [lookingFor, setLookingFor] = useState("Expertise");

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    setLookingFor(selectedRole === "Boss Lady" ? "Expertise" : "Job Opportunity");
  };
  

  return (
    
    
    <div className="container-fluid  NewSupportWomen DefineZing  middleCta bg-white pb-30">
      <div className="row justify-content-center px-3 px-md-5 bg-white">
        <div className="col-12 mx-0 px-0">
        <div className="info-section container-fluid ">
            <div className="row justify-content-center text-white text-center ">

            

            {/* 01 - Market Research */}
            <div className="col-10 d-flex flex-column align-items-center  justify-content-center py-lg-5 ">
            
            <h1 className="font-48 fw-bold" style={{fontSize:"48px", fontWeight:"700"}}>AM-A-ZING - Made Just for Women! </h1>
                {/* <p className=" mt-2 px-3 font-16 why" style={{fontSize:"16px"}}>
                Boss lady or making a comeback? We’ve got an exclusive offer designed to power up your next big move!
                </p> */}
            </div>

            </div>

            <div className="row  justify-content-center pb-5">
                <div className="col-10 col-xl-5">
                    <div className="cf-heading">
                    <div className="cf-marker">
                        <span className="cf-dot" />
                        <div className="cf-line" />
                    </div>
                    {/* <h3 className="text-white text-left fw-bold">
                   
                    </h3> */}
                    <p className="text-left text-white fw-medium">
                    Boss lady or making a comeback? We’ve got an exclusive offer designed to power up your next big move!
                    </p>
                    </div>
            
                    <form className="">
                    <div className="cf-row">
                        <input
                        type="text"
                        className="cf-input"
                        placeholder="First Name *"
                        required
                        />
                        <input
                        type="tel"
                        className="cf-input"
                        placeholder="Phone *"
                        required
                        />
                    </div>
                    <div className="cf-row">
                        <input
                        type="email"
                        className="cf-input"
                        placeholder="Email *"
                        required
                        />
                        <input
                        type="file"
                        className="cf-input cf-upload"
                        />
                    </div>
                    <div className="cf-row">
                        <textarea
                        rows="4"
                        className="cf-textarea"
                        placeholder="Project Details *"
                        required
                        ></textarea>
                    </div>
            
                    <div className="cf-submit-wrapper mt-5">
                        <button type="submit" className="cf-submit">
                        Get a quote
                        </button>
                    </div>
                    </form>
                </div>

                <div className="col-10 col-xl-4 mt-5 mt-xl-0">
                    <div style={{height:"100%"}}>
                    <video src="/images/elementbg/vid-1.mp4"
               loop autoPlay  muted
                type="video/mp4"
                 className="img-cover radius-sm" style={{objectFit:"contain",height:"500px"}} >   
                 </video>
                    </div>
                
                </div>
            </div>
        </div>
        </div>
      </div>

      
    </div>
  );
};

export default Amazingform;

