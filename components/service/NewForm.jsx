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
  // return (
  //   <div className="newsletter-container">
  //     <div className="newsletter-box mx-auto p-4 ">
        
  //       <div className="container">
  //       {/* <h6 className="text-uppercase text-primary">Subscribe to Newsletter</h6> */}
       
  //     <div className="row justify-content-between">
  //       {/* Form Section */}
  //       <div className="col-lg-6 col-md-12">
  //         <div className=" border rounded text-white">

  //           <div className="inquiry-form wow box-shadow  fadeInUp p-0" style={{backgroundColor:"transparent", boxShadow:"none"}}>
  //           <h2 className="fw-bold pt-4">AM-A-ZING – Made Just for Women! </h2>
  //             <p>
  //             Boss lady or making a comeback? We’ve got an exclusive offer designed to power up your next big move!
  //             </p>

  //         <iframe
  //           src="https://connect.irepute.in/file/am-a-zing/"
  //           width="100%"
  //           height="380px"
  //           // style="border: none;"
  //           allowfullscreen
  //           scrolling="no"
  //           ></iframe>
  //           </div>

          
         
           

{/* 
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form wow box-shadow  fadeInUp p-0" style={{backgroundColor:"transparent", boxShadow:"none"}}
              data-wow-delay="0.2s"
            >
              <h2 className="fw-bold pt-4">AM-A-ZING – Made Just for Women! </h2>
              <p>
              Boss lady or making a comeback? We’ve got an exclusive offer designed to power up your next big move!
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group text-white">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-check-box text-white" />
                      </span>
                      <select id="role" className="form-select form-select-lg type-3 ml-2" value={role} onChange={handleRoleChange} placeholder="Iam a" style={{borderTop:"none", borderLeft:"none", borderRight:"none"}}>
                        <option value="Boss Lady">Boss Lady</option>
                        <option value="Career Comeback">Career Comeback</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-user text-white" />
                      </span>
                      <input type="text" className="form-control" id="name" required placeholder="Name" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-mobile text-white" />
                      </span>
                      <input type="tel" className="form-control" id="mobile" required placeholder="Mobile No." />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-email text-white" />
                      </span>
                      <input type="email" className="form-control" id="email" required placeholder="Email ID" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-check-box text-white" />
                      </span>
                      <input type="text" className="form-control" id="lookingFor" value={`Looking For - ${lookingFor}`} readOnly placeholder="Looking for" disabled style={{backgroundColor:"transparent"}}/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-comment text-white" />
                      </span>
                      <textarea className="form-control" id="remark" rows="3" placeholder="Remark"></textarea>
                    </div>
                  </div>
                </div>
                {role === "Career Comeback" && (
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-upload text-white" />
                        </span>
                        <input type="file" className="form-control" id="resume" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-lg-12 col-md-12 mb-4">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="site-button btnhover20 m-t10 bg-white " 
                  >
                    <span className="text-dark">Submit</span>
                  </button>
                </div>
              </div>
            </form> */}


  //         </div>
  //       </div>
  //       {/* Image Section */}
  //       <div className="col-lg-4 col-md-12 text-center">
          
  //         <img src="/images/Am-a-Zing/am-a-zing-image.png" alt="Newsletter" className="img-fluid rounded" style={{position:"relative", bottom:"-58px"}}/>
  //       </div>
  //     </div>
  //   </div>
  //     </div>
  //   </div>
  // );


  return (
    
    
    <div className="container-fluid  NewSupportWomen DefineZing  middleCta bg-white pb-30">
      <div className="row justify-content-center px-3 px-md-5 bg-white">
        <div className="col-12 mx-0 px-0">
        <div className="info-section container-fluid ">
            <div className="row justify-content-center text-white text-center ">

            

            {/* 01 - Market Research */}
            <div className="col-10 d-flex flex-column align-items-center  justify-content-center py-5 ">
            
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

