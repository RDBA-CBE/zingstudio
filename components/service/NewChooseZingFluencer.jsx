import React from "react";
import Image from "next/image";
export default function NewChooseZingFluencer() {
  return (
    <section
      className="content-inner-4 ev-aboutus  pt-5 bg-white container-fluid NewChooseZing"
      style={{
        
        backgroundPosition: "center",
       
      }}
    >
        <div className="row justify-content-center px-3 px-lg-5">
            <div className="col-12 mx-0 px-0">
            <div className="container-fluid">
                <div className="row p-3 p-lg-5" style={{background: "linear-gradient(to right, #984674, #4c48d0)",borderRadius:"30px"}}>
                    <div className="col-lg-6 col-xl-4 order-0 order-lg-1 order-xl-0 mt-0 mt-lg-5 mt-xl-0 ev-about-content d-flex flex-column align-items-center justify-content-center ">

                    <h5 className="font-30 fw-bold text-white mb-3" style={{fontSize:"30px"}}>Influencer Buzz</h5>
                    <p className=" text-center" style={{color:"#fff"}}>
                    At Zingfluence, we provide premium influencer marketing services by integrating strategic planning, creativity, and data-driven insights. Our process begins with carefully selecting influencers who align with your brand values and objectives, ensuring authentic and effective partnerships. We develop customized campaigns that engage your target audience and drive measurable results. 

                    </p>

                    <button className="btn btn-outline-light mt-2 custom-about-btn" style={{background:"#fff",border:"1px solid #fff", borderRadius:"30px",padding:"15px 30px"}}>
                            <a href="/influencer-buzz" style={{textDecoration:"none", color:"#000"}}>
                            Read more</a> 
                        </button>
                
                    
                    </div>

                    <div className="col-xl-4  mt-5 mt-lg-0 order-1 order-lg-0 order-xl-1">
                        <div className="d-flex flec-column justify-content-center align-items-center">
                        <img src="/images/Home-Page/character-img-3.png" alt="" style={{width:"70%"}} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 order-2 ev-about-content d-flex flex-column align-items-center justify-content-center mt-5 mt-xl-0">

                        <h5 className="font-30 fw-bold text-white mb-3" style={{fontSize:"30px"}}>Brand Buzz</h5>
                    
                        <p className=" text-center" style={{color:"#fff"}}>
                        At Zingfluence, we provide premium influencer marketing services by integrating strategic planning, creativity, and data-driven insights. Our process begins with carefully selecting influencers who align with your brand values and objectives, ensuring authentic and effective partnerships. We develop customized campaigns that engage your target audience and drive measurable results. 

                        </p>

                        <button className="btn btn-outline-light mt-2 custom-about-btn" style={{background:"#fff",border:"1px solid #fff", borderRadius:"30px",padding:"15px 30px"}}>
                            <a href="/brand-buzz" style={{textDecoration:"none", color:"#000"}}>
                            Read more</a> 
                        </button>

                    
                    
                    </div>
                    </div>
                    </div>
                </div>
        </div>
     
    </section>
  );
}
