import React from "react";

const NewSupportWomen = () => {
  return (
    // <section className="support-women m-5 NewSupportWomen ">
    //  <div className="container">
    //     <div className="row">
    //         <div className="col-12 col-lg-6 d-flex  align-items-center">
    //             <div className=" text-start ">
    //                 <h2 className="newtitle text-start">I Support Women</h2>
                    
                
    //                 <p>I believe in supporting women entrepreneurs on their journey to success, and I prioritize hiring and providing a supportive platform for women and encouraging those who have taken a career break </p>
    //                 <button className="cta-button">Let's Get Started</button>
    //             </div>
    //         </div>

    //         <div className="col-12 col-lg-6 d-flex justify-cotent-center justify-content-lg-end">
    //             <img src="/images/Home-Page/supportwomen.png" alt="" />
    //         </div>
    //     </div>
    //  </div>
      
     
    // </section>
    
    <div className="container-fluid mb-5 NewSupportWomen">
      <div className="row justify-content-center">
        <div className="col-11 ">
        <div className="info-section container-fluid d-flex justify-content-center align-items-center">
    <div className="row w-100 justify-content-center text-white text-center">

      {/* 01 - Market Research */}
      <div className="col-md-4 d-flex flex-column align-items-center ">
        <div className="position-relative">
          <h1 className="bg-number">01</h1>
          <h4 className="fw-bold position-absolute top-50 start-50 translate-middle text-center">
            Market <br /> Research
          </h4>
        </div>
        <p className="desc-text mt-3 px-3">
          Creating visually appealing, user-friendly websites that align with the client's brand and objectives.
        </p>
      </div>

      {/* 02 - Design & Development */}
      <div className="col-md-4 d-flex flex-column align-items-center">
      <img src="/images/Home-Page/supportwomen.png" alt="" style={{width:"70%"}}/>
      </div>
     

      {/* 03 - Quality Assurance */}
      <div className="col-md-4 d-flex flex-column align-items-center">
        <div className="position-relative">
          <h1 className="bg-number">03</h1>
          <h4 className="fw-bold position-absolute top-50 start-50 translate-middle text-center">
            Quality <br /> Assurance
          </h4>
        </div>
        <p className="desc-text mt-3 px-3">
          Creating visually appealing, user-friendly websites that align with the client's brand and objectives.
        </p>
      </div>

    </div>
  </div>
        </div>
      </div>
    </div>
  );
};

export default NewSupportWomen;
