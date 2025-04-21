"use client"

import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



const NewHomeBanner = () => {

  const slidesData = [
    {
      title1:"Digital",
      title2:"Agency",
      content:"We specialize in providing related to digital marketing, web development, design, and technology."
    },
    {
      title1:"Digital",
      title2:"Agency",
      content:"We specialize in providing related to digital marketing, web development, design, and technology."
    },
    {
      title1:"Digital",
      title2:"Agency",
      content:"We specialize in providing related to digital marketing, web development, design, and technology."
    }
  ]

  // const slidesData = [
  //   {
  //     title1:"I ",
  //     title2:"Make",
  //     content:"Websites <br/> Static Website <br/> CMS Website <br/> E-commerce Websites <br/> Creative Designs"
  //   },
  //   {
  //     title1:"I ",
  //     title2:"Spread",
  //     content:"Your Brand Digitally <b/> SEO <br/> SMM <br/> E-commerce Websites <br/> Digital Advertizing"
  //   },
  //   {
  //     title1:"I ",
  //     title2:"Teach ",
  //     content:"Digital Marketing <br/> Basics <br/> Advance <br/>AI & Tools in DM "
  //   }
  // ]
  return (

    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 4000,
      }}
      speed={2500}
      loop
      navigation={{ prevEl: ".snbph7", nextEl: ".snbnh7" }}
      style={{  width: "95%", borderRadius: "30px" }}
      className="home-ban swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress home-swiper-10 swiper-backface-hidden fadeInUp" data-wow-delay="0.2s"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="swiper-slide slider-content"
        // style={{ background: slide.backgroundImage, height: "700px" }}
        >
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11">
                <div className="digital-agency container-fluid d-flex align-items-center justify-content-center py-5">
                  <div className="row align-items-center w-100 px-md-5 px-3">

                    {/* Left - Image */}
                    <div className="col-md-6 text-center mb-4 mb-md-0">
                      <img src="/images/Home-Page/mbl-banner/character-img-3.png" alt="Digital Agency Art" className="img-fluid hero-img" />
                    </div>

                    {/* Right - Text */}
                    <div className="col-md-6 text-white text-md-start text-center d-none d-lg-block">
                      <h1 className="display-3 fw-bold m-0" style={{ fontSize: "130px" }}>{slide?.title1} </h1><p className="mt-3 " style={{ position: "relative", top: "-140px", left: "450px", width: "40%" }} dangerouslySetInnerHTML={{__html:slide?.content}}>
                      
                      </p>
                      <h1 className="display-3 fw-bold h-num2" style={{ fontSize: "130px", position: "relative", top: "-150px", left: "200px" }}>{slide?.title2}</h1>

                    </div>

                    <div className="col-md-6 text-white text-md-start text-center d-block d-lg-none">
                      <h1 className="display-3 fw-bold m-0" style={{ fontSize: "130px" }}>{slide?.title1}  </h1>
                      <h1 className="display-3 fw-bold" style={{ fontSize: "130px", position: "relative", top: "-150px", left: "200px" }}>{slide?.title2}</h1>

                      <p className="mt-3 mx-0" dangerouslySetInnerHTML={{__html:slide?.content}}>
                       
                      </p>

                    </div>




                  </div>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}



      <div className="swiper-button" style={{ zIndex: 1 }}>
        <div className="swiper-button-prev snbph7 previousButton">
          <i className="las la-angle-left" />
        </div>
        <div className="swiper-button-next snbnh7 nextButton swiper-button-disabled">
          <i className="las la-angle-right" />
        </div>
      </div>
    </Swiper>
  );
};

export default NewHomeBanner;