import React from "react";

const NewJoinZing = ({Cta}) => {
  return (
    
    
    <div className="container-fluid  NewSupportWomen DefineZing  middleCta bg-white">
      <div className="row justify-content-center px-3 px-md-5 bg-white">
        <div className="col-12 mx-0 px-0">
        <div className="info-section container-fluid px-0">
            <div className="row justify-content-center text-white text-center px-0">

            

            {/* 01 - Market Research */}
            <div className="col-10 d-flex flex-column align-items-center  justify-content-center py-0  py-lg-5 pb-3 pb-lg-5">
            
            <h1 className="font-48 fw-bold" style={{fontSize:"48px", fontWeight:"700"}}>Job Openings</h1>
                <p className=" mt-2 px-0 px-md-0 font-16 why" style={{fontSize:"16px"}}>
                At Zing Studio, we’re seeking passionate individuals to join our innovative team. If you’re eager to make an impact in digital marketing, web design, or branding, we offer exciting opportunities for growth and collaboration. Explore our current openings and take the next step in your career with a company that values creativity and professional development.
                </p>
            </div>

            </div>

            <div className="row  justify-content-center pb-5">
                <div className="col-10 col-xl-5">
                    <div className="cf-heading">
                    <div className="cf-marker">
                        <span className="cf-dot" />
                        <div className="cf-line" />
                    </div>
                    <h3 className="text-white text-left fw-bold">
                    Join Our Team & Shine!
                    </h3>
                    <p className="text-left text-white fw-medium">
                    Got the skills? We’ve got the opportunities! Fill out the form and step into an exciting career with Zing Studio!
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

export default NewJoinZing;
