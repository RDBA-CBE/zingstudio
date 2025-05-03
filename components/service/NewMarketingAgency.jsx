import React from "react";
import Image from "next/image";
export default function NewMarketingAgency() {
  return (
    <section
      className="content-inner-4 ev-aboutus pb-5 pt-5 bg-white"
      style={{
        backgroundImage: "",
        backgroundPosition: "center",
       
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="">
              <img src="/images/Home-Page/special-program-img.png" alt="" style={{width:"70%"}} />
            </div>
          </div>
          <div className="col-lg-6 ev-about-content d-flex flex-column align-items-center justify-content-center">
           
            <p className="wow fadeInRight" style={{color:"#282222"}}>
            At Zingfluence, we provide premium influencer marketing services by integrating strategic planning, creativity, and data-driven insights. Our process begins with carefully selecting influencers who align with your brand values and objectives, ensuring authentic and effective partnerships. We develop customized campaigns that engage your target audience and drive measurable results. 

            </p>

            {/* <a href="/influencer-buzz" className="site-button outline outline-2 btnhover11">
              Read More
              <i className="fas fa-angle-double-right ms-2" />
            </a> */}

            {/* <div className="section-head style-2 mt-5">
              <h2 className="title">
              Brand Buzz
                
              </h2>
            </div> */}

            <p className="wow fadeInRight " style={{color:"#282222"}}>
            Our content creation focuses on producing high-quality, relevant content that resonates with followers, fostering trust and engagement. Additionally, we monitor campaign performance closely, utilizing analytics to optimize strategies and maximize ROI. With Zingfluence, you can trust that every influencer marketing campaign is designed for tangible and sustained success.

            </p>
            
           
            
            {/* <a href="/brand-buzz" className="site-button outline outline-2 btnhover11">
              Read More
              <i className="fas fa-angle-double-right ms-2" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
