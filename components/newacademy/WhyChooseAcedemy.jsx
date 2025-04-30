"use client"

import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";


const WhyChooseAcedemy = () => {


    const serviceCards = [
        {
          title: "Web Solution Development",
          link: "#",
          className: "web-solution-card",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          title: "Mobile Apps Development",
          link: "#",
          className: "mobile-apps-card",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          title: "Project & Product Consulting",
          link: "#",
          className: "consulting-card",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          title: "Web Solution Development",
          link: "#",
          className: "web-solution-card",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          title: "Mobile Apps Development",
          link: "#",
          className: "mobile-apps-card",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          title: "Project & Product Consulting",
          link: "#",
          className: "consulting-card",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
      ];


      const courseLearning = [
        {
          id: 1,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/digital-marketing-startegy.jpg",
          title: "10+ Industry-Recognized Certificates",
          link:"zing-digital-marketing-mastery",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 2,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/content-and-prompt-engineerings.jpg",
          title: "Weekend & Flexible Batches",
          link:"zing-digital-marketing-mastery",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 3,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/google-and-advance-web-analytics.jpg",
          title: "Gamified Learning with Scoreboards",
          link:"zing-digital-marketing-mastery",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 4,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/social-media-marketing.jpg",
          title: "100% Practical Learning",
          link:"zing-digital-marketing-mastery",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 5,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/search-engine-optimization.jpg",
          title: "Community & Mentorship",
          link:"zing-digital-marketing-mastery",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 6,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/funnel-building-lead-gen.jpg",
          title: "Weekly Quizzes & Monthly Assignments",
          link:"zing-digital-marketing-mastery",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 7,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/facebook-and-instagram-ads.jpg",
          title: "Weekly Student Presentations",
          link:"zing-digital-marketing-mastery",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 8,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/wix.jpg",
          title: "Wix",
          link:"Final Capstone Project",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
            id: 9,
            imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/whatsapp -marketing.jpg",
            title: "Certification on Completion",
            link:"zing-digital-marketing-mastery",
            src:"/images/zing-digital-marketing-mastery/unnamed.png"
          },
          {
            id: 9,
            imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/web-technology.jpg",
            title: "Zingers Alumni Community ",
            link:"zing-digital-marketing-mastery",
            src:"/images/zing-digital-marketing-mastery/unnamed.png"
          },
          {
            id: 10,
            imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/ai-automation-in-digital-marketing.jpg",
            title: "AI & Automation in Digital Marketing",
            link:"zing-digital-marketing-mastery",
            src:"/images/zing-digital-marketing-mastery/unnamed.png"
          },
          {
            id: 11,
            imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/job-freelancing-support.jpg",
            title: "Job & Freelancing Support",
            link:"zing-digital-marketing-mastery",
            src:"/images/zing-digital-marketing-mastery/unnamed.png"
          },
          {
            id: 12,
            imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/exclusive-industry-webinars-expert-sessions.jpg",
            title: "Exclusive Industry Webinars & Expert Sessions",
            link:"zing-digital-marketing-mastery",
            src:"/images/zing-digital-marketing-mastery/unnamed.png"
          },
          {
            id: 13,
            imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/scholarship-for-women-from-underprivileged-backgrounds.jpg",
            title: "10% Scholarship for Women from Underprivileged Backgrounds",
            link:"zing-digital-marketing-mastery",
            src:"/images/zing-digital-marketing-mastery/unnamed.png"
          },
      ];
  const AcademyContent={
    title:"Why Choose Zing Academy?",
    paragraph:"At Zing Academy, we don’t just teach digital marketing—we shape industry leaders. Our hands-on, practical approach ensures that you don’t just learn concepts but also apply them in real-world scenarios. Whether you're a student, entrepreneur, freelancer, or job seeker, our courses are designed to equip you with the most in-demand skills in digital marketing.",
    buttoncontent:"All Services",
  }


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
         
          <a href="service"><button className="btn ds-all-btn float-lg-end  text-black">{AcademyContent.button}</button></a>
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
