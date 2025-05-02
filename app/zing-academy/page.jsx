
import Link from "next/link";

import ProjectDetails from "@/components/portfolio/ProjectDetails";
import React from "react";
import { allProjects } from "@/data/projects";
import WebDesignDetails from "@/components/service/WebDesignDetails";
import AcademyContent from "@/components/academy/AcademyContent";
import Header17 from "@/components/headers/Header17";
import Testimonials from "@/components/homes/home-6/Testimonials";
import Footer13 from "@/components/footers/Footer13";
import Cta from "@/components/homes/home-13/Cta";
import Insights from "@/components/service/Insights";
import LiveProjects from "@/components/service/liveProjects";
import CourseModules from "@/components/service/CourseModules";
import BrandCaseStudy from "@/components/service/BrandCaseStudy";
import ZingAcademyCta from "@/components/service/ZingAcademyCta";
import ZingAcademyCourseHero from "@/components/service/zingAcademyCourseHero";
import ZingAcademyFaq from "@/components/service/ZingAcademyFaq";
import ResponsiveAcademyBanner from "@/components/service/ResponsiveAcademyBanner";
import NewAcademyBanner from "@/components/service/NewAcademyBanner";
import NewWhyChooseAcademy from "@/components/service/NewWhyChooseAcademy";
import NewAcademyCourseModules from "@/components/service/NewAcademyCourseModules";
import Footer1 from "@/components/footers/Footer1";
import HomeCta from "@/components/service/HomeCta";
import NewFAQ from "@/components/service/newservice/NewFAQ";
import AcademyFAQ from "@/components/newabout/AcademyFAQ";
import NewGaruntee from "@/components/service/newservice/NewGaruntee";
export const metadata = {
  title: "Academy || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {

  const faqData = [
    {
      id: "faq6",
      question: "1. Who can enroll in Zing Academy’s digital marketing courses?",
      answer:
        "Our courses are designed for beginners, professionals, entrepreneurs, and anyone looking to enhance their digital marketing skills. No prior experience is required.",
      background: "#f4f2f2",
    },
    {
      id: "faq7",
      question: "2. Are the courses online or in-person?",
      answer:
        "We offer both online and in-person training options, allowing you to choose the format that best fits your schedule and learning preferences.",
    },
    {
      id: "faq8",
      question: "3. Will I get hands-on experience?",
      answer:
        "Yes! Our courses include live projects, case studies, and practical exercises to ensure real-world application of the skills you learn.",
      background: "#f4f2f2",
    },
    {
      id: "faq9",
      question: "4. Do I receive a certificate after completing the course?",
      answer:
        "Yes, upon successful completion, you will receive an industry-recognized certificate from Zing Academy.",
    },
    {
      id: "faq10",
      question: "5. Who are the trainers?",
      answer:
        "Our courses are led by experienced industry professionals and celebrity trainers with extensive expertise in digital marketing.",
      background: "#f4f2f2",
    },
    {
      id: "faq11",
      question: "6. What career opportunities can I pursue after this course?",
      answer:
        "After completing the course, you can explore roles such as digital marketer, social media strategist, SEO specialist, content marketer, and more.",
    },
    {
      id: "faq12",
      question: "7. How can I enroll?",
      answer:
        "You can enroll by visiting our website, filling out the registration form, and selecting your preferred course package. If you need assistance, our team is happy to guide you.",
      background: "#f4f2f2",
    },
  ];

  const Performance={
    head:"Ready to level up?",
    description:"Insights Lorem Lorem ",
    src:"/images/services/web-deisgn/vector-img.png",
    guarantee:[
      {
        icon:"/images/services/web-deisgn/responsive-design-icon.png",
        title:"Expert-Led Training", 
        caption:"Learn from top industry professionals with years of hands-on experience, offering you practical knowledge and valuable insights to excel in digital marketing."
      },
      {
        icon:"/images/services/web-deisgn/user-centric-interface-icon.png",
        title:"Real-World Projects", 
        caption:"Gain practical experience by working on live projects, applying your skills in real-time scenarios that prepare you for success in the digital world."
      },
      {
        icon:"/images/services/web-deisgn/seo-optimized-icon.png",
        title:"Career-Ready Skills", 
        caption:"Our courses are designed to equip you with the skills employers are looking for, from SEO and social media marketing to content strategy and analytics."
      },
      {
        icon:"/images/services/web-deisgn/custom-solution-icon.png",
        title:"Flexible <br/> Learning", 
        caption:"With online and in-person options, you can learn at your own pace, fitting your education into your busy schedule without compromising on quality."
      }
    ],
  
  }

  
  return (
    <>
      <div className="page-wraper  " style={{background:"#fff"}}>
        <Header17 />
         {/* <ZingAcademyCourseHero/> */}
        
        <NewAcademyBanner/>

       

        <NewAcademyCourseModules/>

        <NewWhyChooseAcademy/>

        <NewGaruntee Performance={Performance}/>


         {/* <div
              className="section-full content-inner-2  wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              style={{
                background:"#e21100"
              }}
             
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center ">
                    <h2 className="title text-white">
                      Why Zing Academy ?
                    </h2>
                    <p className="text-white mb-0">
                     Gain a competitive edge with expert-led digital marketing training that combines real-world experience and hands-on learning. Unlock the skills to thrive in today’s fast-moving digital landscape and take your career to the next level.

                    </p>
                  </div>
                </div>
              </div>
            </div>
        <CourseModules/>
        <Insights/>
       
        <div className="bg-white pt-5 pb-0 pb-sm-5" >
        <ZingAcademyFaq/>
        </div>
        
        <ZingAcademyCta/> */}

        <AcademyFAQ faqData={faqData}/>
        
        <HomeCta/>
        <Footer1 />
      </div>
    </>
  );
}
