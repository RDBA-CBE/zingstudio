"use client"

import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";


const InHowDoesItWork = ({AcademyContent,courseLearning}) => {

  return (
    <div className="container py-5  WhyChooseAcedemy InHowDoesItWork">
      <div className="row mb-4 d-flex justify-content-between">
      <h2 className="ds-heading fw-bold fs-2 font-48 text-black text-center">
          Why Choose Zing Academy?
          </h2>
         
      
      </div>
      <div className="row">
      
        {courseLearning.map((item, index) => (
        
          <div className="col-md-3 mb-4" key={index}>
            <div className={` ds-card text-white `}>
              <div style={{
                 backgroundImage: `url(${item.src})`, 
                 // backgroundImage : "url(https://wgl-dsites.net/odefy/wp-content/uploads/2024/03/price_bg-2.webp)",
                 position: "absolute",
                 top: 0,
                 left: 0,
                 height: "100%",
                 width: "100%",
                 backgroundPosition: "bottom right",
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "250px auto",
                 zIndex: 100,
                 opacity: 1,
              }}></div>
              <div className=" d-flex flex-column  h-100" style={{padding:"30px 30px 0 30px"}}>
                <h5 className="ds-card-title fw-bold fs-5 font-30">{item.title}</h5>
                <a href={item.link}><span className="ds-arrow fs-4">→</span></a>
              </div>
              {/* <div className="d-flex justify-content-end">
              <img src="/images/elementbg/13.png" alt="" />
              </div> */}
             
            </div>
          </div>
          
        ))}
       

      </div>
    </div>
  );
};

export default InHowDoesItWork;
