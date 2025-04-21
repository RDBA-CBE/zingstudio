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
      <div className="row justify-content-center px-3 px-md-5">
        <div className="col-12 mx-0 ">
        <div className="info-section container-fluid d-flex justify-content-center align-items-center">
    <div className="row w-100 justify-content-center text-white text-center">

      

      {/* 01 - Market Research */}
      <div className="col-12 col-lg-4 d-flex flex-column align-items-start  justify-content-center">
        <div className="position-relative ">
          <h1 className="bg-number">10% OFF </h1>
          <img src="/images/Home-Page/wep.png" alt="" style={{width:"90%"}}/>
          {/* <img src="/images/Home-Page/entre-2.png" alt="" style={{width:"30%"}}/> */}
          {/* <h4 className="fw-bold" style={{fontSize:"50px"}}> <b style={{fontSize:"25px",color:"#000"}}>for</b>  <br /> Women <br /> Entrepreneurs</h4> */}
          {/* <h4 className=" position-absolute top-50 start-50 translate-middle text-center " >
            Market
             <br /> <br /> OFF
          </h4> */}
        </div>
        {/* <p className="desc-text mt-3 px-3">
          Creating visually appealing, user-friendly websites that align with the client's brand and objectives.
        </p> */}
      </div>

      {/* 02 - Design & Development */}
      <div className="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-end">
      <img src="/images/Home-Page/entre-2.png" alt="" style={{width:"70%",padding:"50px 0 0 0"}}/>
      </div>
     

      {/* 03 - Quality Assurance */}
      <div className="col-12 col-lg-4 mt-5 mt-lg-0 pe-5 d-flex flex-column align-items-center justify-content-around">
        <div className="position-relative">
          <h1 className="bg-number text-right " style={{lineHeight:'90px',fontSize:"100px"}}>Support <br />Career Break </h1>
          {/* <h4 className="fw-bold position-absolute top-50 start-50 translate-middle text-center">
            Quality <br /> Assurance
          </h4> */}
        </div>
        {/* <p className="desc-text mt-3 px-3">
          Creating visually appealing, user-friendly websites that align with the client's brand and objectives.
        </p> */}
      </div>

    </div>
  </div>
        </div>
      </div>
    </div>
  );
};

export default NewSupportWomen;
