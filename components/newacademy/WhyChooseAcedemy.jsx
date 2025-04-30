"use client"

import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";


const WhyChooseAcedemy = ({AcademyContent,courseLearning}) => {

  return (
    <div className="container py-5 WhyChooseAcedemy">
      <div className="row mb-4">
        <div className="col-12 text-black">
          <div></div>
          <h2 className="ds-heading fw-bold fs-2 font-48">{AcademyContent.title}
          {/* Why Choose Zing Academy? */}
          </h2>
          <p style={{width:"80%"}}>{AcademyContent.paragraph}
            {/* At Zing Academy, we don’t just teach digital marketing—we shape industry leaders. Our hands-on, practical approach ensures that you don’t just learn concepts but also apply them in real-world scenarios. Whether you're a student, entrepreneur, freelancer, or job seeker, our courses are designed to equip you with the most in-demand skills in digital marketing. */}
            </p>
         
          <a href="service"><button className="btn ds-all-btn float-lg-end  text-black">{AcademyContent.buttoncontent}</button></a>
        </div>
      </div>
      <div className="row">
      <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop
              autoplay={{
                delay: 4000,
              }}
              navigation={{
                prevEl: ".snbp35",
                nextEl: ".snbn35",
              }}
              speed={2500}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              className="img-carousel-dots-nav owl-theme owl-dots-none owl-carousel owl-btn-center-lr owl-btn-3 btn-white"
            >
        {courseLearning.map((item, index) => (
          <SwiperSlide className="item" key={index} style={{width:"100%"}}>
          <div className="col-md-12 mb-4" key={index}>
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
                 zIndex: -100,
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
          </SwiperSlide>
        ))}
        </Swiper>

      </div>
    </div>
  );
};

export default WhyChooseAcedemy;
