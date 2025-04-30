
import React from "react";
import Header17 from "@/components/headers/Header17";
import NewCourseBanner from "@/components/newacademy/NewCourseBanner";
import BannerList from "@/components/newacademy/BannerList";
import FloatingBubble from "@/components/newacademy/FloatingBubble";
import NewCourseModules from "@/components/newacademy/NewCourseModules";
import Footer1 from "@/components/footers/Footer1";
import HomeCta from "@/components/service/HomeCta";
import NewStudentJourney from "@/components/newacademy/NewStudentJourney";
import WhyChooseAcedemy from "@/components/newacademy/WhyChooseAcedemy";
import NewTools from "@/components/newacademy/NewTools";
import AcademyFAQ from "@/components/newabout/AcademyFAQ";
import PhysicsCircles from "@/components/newabout/AcademyTeamSection-1";
import AcademyTeamSection from "@/components/newabout/AcademyTeamSection";
export const metadata = {
  title: "Zing Digital Marketing Mastery || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {

    const serviceAbout ={
        subtitle:"lorem lorem",
        title:"Zing Digital Sprint – Essentials of Marketing",
        descrip:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae sapiente dolor cum vel tempora modi doloribus laborum voluptatum.",
        list :[
          {
            item:"Strong foundation in digital marketing fundamentals",
            sec:"0.2s"
          },
          {
            item:"Hands-on training with essential marketing tools",
            sec:"0.4s"
          },
          {
            item:"Placement support for top performers",
            sec:"0.6s"
          }
          
        ],
        subDes:"Course Highlight:",
        src:"/images/Home-Page/character-img-3.png"
      }
      const services = [
        { id: '001', title: 'Course Duration ', description: ' 15 Days', sec:"0.2s" },
        { id: '002', title: 'Course Fees', description: '₹7,000',sec:"0.4s" },
        {
          id: '003',
          title: 'Application Closes On ',
          description:
            '31/05/2025',
            sec:"0.6s"
        },
        
      ];
      const courselist = [
        { id: "01", title: "Marketing Fundamentals", 
          description: [
            " Understanding Online & Offline Marketing",
          "Customer Journey & Funnels",
          
      
        ] },
        { id: "02", title: "SEO Basics & Content Marketing",
           description:[
            " Basics of Search Engine Optimization",
            "Writing Content That Ranks on Google",
           
          ] },
        { id: "03", title: "Social Media Marketing",
           description: [
            "Creating Engaging Instagram & Facebook Content",
            "Running Basic Ad Campaigns",
            
          ] },
       
      ];
      const pricingData = [
        {
          id: 1,
          title: "(Day 1)",
          price: "Orientation & Icebreaker",
          duration: "Per Week",
          features: [
            "Welcome session & networking",
            "Overview of the essentials course structure",
          
          ],
          bgShape: "bubble1",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 2,
          title: "(Week 1)",
          price: "Marketing Fundamentals",
          duration: "Per Week",
          features: [
            "Introduction to digital marketing concepts",
              "Customer journey mapping",
              "Case study analysis of beginner campaigns",
          ],
          bgShape: "bubble2",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 3,
          title: " (Week 2)",
          price: "SEO & Social Media Marketing",
          duration: "Per Week",
          features: [
            "Basics of SEO & content optimization",
            "Crafting social media strategies", 
            "Small social media campaign project"
          ],
          bgShape: "bubble3",
          src:"/images/zing-digital-marketing-mastery/unnamed.png",
        },
        {
          id: 4,
          title: "(Final Day)",
          price: "Project Presentations ",
          duration: "Per Week",
          features: [
            "Feedback on projects",
              "Certification distribution", 
              
          ],
          bgShape: "bubble3",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
       
      ];
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

      const circles = [
        { id: "ecae91b", url: "/images/sample/homepage_1-7.webp", width: 375, height: 375 },
        { id: "a208805", url: "/images/sample/homepage_1-1.webp", width: 148, height: 148 },
        { id: "f773497", url: "/images/sample/homepage_1-2.webp", width: 225, height: 225 },
        { id: "778131d", url: "/images/sample/homepage_1-3.webp", width: 350, height: 350 },
        { id: "ae61a10", url: "/images/sample/homepage_1-7.webp", width: 225, height: 225 },
        { id: "bbfe833", url: "/images/sample/homepage_1-5.webp", width: 148, height: 148 },
        { id: "d921808", url: "/images/sample/homepage_1-6.webp", width: 400, height: 400 },
        { id: "0dfae77", url: "/images/sample/homepage_1-8.webp", width: 150, height: 150 },
        { id: "4326c43", url: "/images/sample/homepage_1-10.webp", width: 318, height: 318 },
        { id: "a087b13", url: "/images/sample/homepage_1-9.webp", width: 225, height: 225 },
       
      ];
      const teamIntroData = {
        title: "Who can apply <br/>  for this course?",
        description1:
          "Students, professionals, entrepreneurs, or content creators—this course is for anyone ready to boost their digital skills. No experience needed, just a passion to learn and grow!",
        description2:
          "Through our years of experience, we’ve also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels.",
        buttonText: "About Company",
        stats: [
          { id: 1, value: "15", label: "Years of Experience" },
          { id: 2, value: "1K+", label: "Projects Worldwide" },
        ],
      };
      
      

      const ToolsContent = {
        tool1Num:"20+",
        tool1Title :"Free Essential Digital Marketing Tools",
        tool1worth :"Worth Of 6 Lakhs",
        tool2Num:"20+",
        tool2Title :"Digital Marketing AI Tools",
        tool2worth :"Worth Of 6 Lakhs"
      }
      const Tools1 = [
          {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
            img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/essential-tools/tool-1.png",
            // img:"/images/logo.png"
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
            img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/essential-tools/tool-2.png"
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
            img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/essential-tools/tool-3.png"
          },
          {
           
            animation: "fadeInRight",
            delay: "0.3s",
            iconClass: "flaticon-conveyor",
             img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/essential-tools/tool-4.png"
          },
          {
              animation: "fadeInLeft",
              delay: "0.3s",
              iconClass: "flaticon-factory",
               img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/essential-tools/tool-5.png"
            },
            {
             
              animation: "fadeInDown",
              delay: "0.3s",
              iconClass: "flaticon-worker",
               img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/essential-tools/tool-6.png"
            },
            {
              
              animation: "fadeInUp",
              delay: "0.3s",
              iconClass: "flaticon-settings",
               img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/essential-tools/tool-7.png"
            },
            {
             
              animation: "fadeInRight",
              delay: "0.3s",
              iconClass: "flaticon-conveyor",
               img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/essential-tools/tool-8.png"
            },
           
          
          ];
  
      const Tools2 = [
        {
             
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-14.png"
        },
        {
          
          animation: "fadeInUp",
          delay: "0.3s",
          iconClass: "flaticon-settings",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-15.png"
        },
        {
         
          animation: "fadeInRight",
          delay: "0.3s",
          iconClass: "flaticon-conveyor",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-16.png"
        },
        {
          animation: "fadeInLeft",
          delay: "0.3s",
          iconClass: "flaticon-factory",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-17.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-18.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-19.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-20.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-21.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-22.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-23.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-24.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-25.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-26.png"
        },
    ];
  
      const Tools3 = [
      {
        animation: "fadeInLeft",
        delay: "0.3s",
        iconClass: "flaticon-factory",
         img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/AI-tools/tool-1.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/AI-tools/tool-2.png"
      },
      {
        
        animation: "fadeInUp",
        delay: "0.3s",
        iconClass: "flaticon-settings",
        img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/AI-tools/tool-3.png"
      },
      {
       
        animation: "fadeInRight",
        delay: "0.3s",
        iconClass: "flaticon-conveyor",
        img:"/images/Zing-Digital-Sprint-Essentials-of-Marketing/Zing-Digital-Sprint-Essentials-of-Marketing-Tools/AI-tools/tool-4.png"
      },
    
       
      ]

      const faqData = [
        {
          id: "faq6",
          question: "1. Who can enroll in this course?",
          answer:
            "The course is ideal for students, fresh graduates, entrepreneurs, and professionals looking to build foundational skills in digital marketing.",
        },
        {
          id: "faq7",
          question: "2. What topics does the course cover?",
          answer:
            "Key areas include SEO, social media marketing, content creation, email marketing, paid advertising, and analytics essentials.",
        },
        {
          id: "faq8",
          question: "3. Is any prior experience required?",
          answer:
            "No prior experience is needed. The course is designed to cover fundamental concepts, making it suitable for beginners.",
        },
        {
          id: "faq9",
          question: "4. How long does the course take to complete?",
          answer:
            "The course typically runs for 4–6 weeks, allowing participants to learn at a structured yet flexible pace.",
        },
        {
          id: "faq10",
          question: "5. Will I get a certificate after completion?",
          answer:
            "Yes. Participants who successfully complete the course will receive a certificate of completion, validating their digital marketing skills.",
        },
        {
          id: "faq11",
          question: "6. Does the course include practical projects?",
          answer:
            "Absolutely. The course features hands-on projects that enable learners to apply theoretical knowledge in real-world scenarios.",
        },
        {
          id: "faq12",
          question: "7. Is this course self-paced or instructor-led?",
          answer:
            "The course offers a blend of self-paced learning modules and live sessions with industry experts for better understanding.",
        },
        {
          id: "faq13",
          question: "8. Are there any assessments during the course?",
          answer:
            "Yes. Quizzes, assignments, and project evaluations are included to track learning progress and application of concepts.",
        },
        {
          id: "faq14",
          question: "9. What makes this course unique?",
          answer:
            "The course combines essential digital marketing knowledge with practical exposure, ensuring learners gain actionable skills in a short time frame.",
        },
        {
          id: "faq15",
          question: "10. How do I enroll?",
          answer:
            "Enrollment can be done through our official website by filling out the registration form and selecting the preferred batch schedule.",
        },
      ];

    

  return (
    <>
      <div className="page-wraper  " style={{background:"#fff"}}>
        <Header17 />
        
         <NewCourseBanner serviceAbout={serviceAbout}/>

         <BannerList course="Zing Digital Sprint – <br/> Essentials of Marketing" services={services} />

         <NewCourseModules courselist={courselist} title="Zing Digital Sprint – <br/> Essentials of Marketing"/>

         <FloatingBubble image="/images/Zing-Infographic-Students-Journey-2.png"/>

         <NewStudentJourney title="Lorem ipsum dolor sit amet <br /> <span className='highlighted-text'>eum neque commodi</span>" pricingData={pricingData}/>

         <WhyChooseAcedemy courseLearning={courseLearning} AcademyContent={AcademyContent}/>
          <div className="d-block d-lg-none">
          <AcademyTeamSection teamIntroData={teamIntroData}/>
          </div>
         <PhysicsCircles circles={circles} teamIntroData={teamIntroData}/>       
         <NewTools ToolsContent={ToolsContent} Tools1={Tools1} Tools2={Tools2} Tools3={Tools3}/>
         <AcademyFAQ faqData={faqData}/>
        <HomeCta />
        <div className="home-footer" >
        <Footer1 />
        </div>
      </div>
    </>
  );
}