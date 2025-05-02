import WhyChooseAcedemy from "@/components/newacademy/WhyChooseAcedemy";
import React from "react";


const NewDedicatedSupport = () => {

    const AcademyContent={
        title:"Why Choose Zing Academy?",
        paragraph:"At Zing Academy, we don’t just teach digital marketing—we shape industry leaders. Our hands-on, practical approach ensures that you don’t just learn concepts but also apply them in real-world scenarios. Whether you're a student, entrepreneur, freelancer, or job seeker, our courses are designed to equip you with the most in-demand skills in digital marketing.",
        buttoncontent:"All Services",
      }
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

  return (
    <div className="unique-wrapper text-white mb-5 mt-5">
      {/* Why Us Section */}
      <div className="container-fluid   px-5 flex-wrap">
        <div className="row justify-content-center px-3 px-lg-5 ">
            <div className="col-12 px-0 mx-0 section-pink">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <div className="content-area" style={{width:"100%"}}>
                            <h2 className="fw-bold display-5">Dedicated Support</h2>
                            <div
                        className="icon-bx-wraper m-b30 left wow fadeInUp px-0 mt-5 "
                        data-wow-delay="0.6s"
                        >
                        <div className="icon-lg">
                

                  {/* <img src="images/Influence-Buzz/Dedicated-Support/icon-1.png" alt="" /> */}
                  <img src="/images/brand-buzz/Colored-icons/colored-icon-02.png" alt="colored-icon" />
                
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte mb-2 fw-bold font-48" style={{fontSize:"30px"}}>
                We've Got Your Back
                </h4>
                <p className="text-white" style={{color:"#282222"}}>
                From start to finish, our support squad is here to keep things running smoothly and answer your questions—fast and hassle-free.
                </p>
              </div>
                            </div>
                            <div
                            className="icon-bx-wraper m-b30 left wow fadeInUp px-0"
                            data-wow-delay="0.8s"
                            >
                            <div className="icon-lg">
                                
                                {/* <i className="flaticon-settings"></i> */}
                                {/* <img src="images/Influence-Buzz/Dedicated-Support/icon-2.png" alt="" /> */}
                                <img src="/images/brand-buzz/Colored-icons/colored-icon-01.png" alt="colored-icon" />
                                
                            </div>
                            <div className="icon-content mb-5">
                                <h4 className="dlab-tilte mb-2 fw-bold font-48" style={{fontSize:"30px"}}>
                                You Create, We Handle the Rest
                                </h4>
                                <p className="text-white " style={{color:"#282222"}}>
                                Focus on delivering standout content while we take care of the details. Smooth plans, flawless execution—your success, our mission.
                                </p>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center ">
                        <div className="img-area "
                        //  style={{height:"100%",width:"100%"}}
                         >
                        <img src="/images/services/web-deisgn/vector-img.png" alt="Illustration" className="img-fluid hero-img img-fluid " style={{height:"100%", width:"70%"}}/>
                            {/* <img
                                src="/images/Academy/banner/banner-vector-img.png"
                                alt="character"
                                className="img-fluid unique-illustration"
                            /> */}
                            </div>
                        </div>
                    </div>
              
        
                </div>
            </div>
        </div>
       
      </div>


      <WhyChooseAcedemy courseLearning={courseLearning} AcademyContent={AcademyContent}/>

      {/* Discuss Project Section */}
      <div className="container-fluid position-relative text-center px-4 mt-5">
        <div className="row justify-content-center  px-3 px-lg-5 ">
            <div className="col-12 px-0 mx-0 ">
                <div className="container">

                <div className="light-cone mx-auto d-flex flex-column align-items-center justify-content-center">
          <div className="light-icon mb-3">
            <i className="bi bi-lightbulb-fill fs-1 text-warning"></i>
          </div>
          <h2 className="fw-bold font-48" style={{fontSize:"60px"}}>What are You <br /> waiting For ?</h2>
          {/* <h2 className="fw-bold display-6">Your Project</h2> */}
          <a className=' rounded-pill mt-2' href="contact" style={{lineHeight:"1", border:"none"}}>
                  <button className="btn btn-light fw-bold  rounded-pill mt-3" style={{width:"auto",padding:"15px 30px"}}>
                 Join Now
                    </button>
                  </a>
        </div>
        <div className="lamp-base mx-auto ">
          <div className="lamp-glow"></div>
        </div>

                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default NewDedicatedSupport;
