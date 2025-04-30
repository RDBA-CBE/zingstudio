
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
        title:"Zing Digital Marketing Mastery",
        descrip:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae sapiente dolor cum vel tempora modi doloribus laborum voluptatum.",
        list :[
          {
            item:"Master industry-relevant skills with hands-on projects",
            sec:"0.2s"
          },
          {
            item:"Work with top digital marketing tools & strategies",
            sec:"0.4s"
          },
          {
            item:"Guaranteed placement support for top performers",
            sec:"0.6s"
          }
          
        ],
        subDes:"Course Highlight:",
        src:"/images/Home-Page/character-img-3.png"
      }
      const services = [
        { id: '001', title: 'Course Duration ', description: '3 Months + 3 Months Internship', sec:"0.2s" },
        { id: '002', title: 'Course Fees', description: '₹25,000',sec:"0.4s" },
        {
          id: '003',
          title: 'Application Closes On ',
          description:
            '31/05/2025',
            sec:"0.6s"
        },
        
      ];
      const courselist = [
        { id: "01", title: "Digital Marketing Foundations", 
          description: [
            " Understanding Digital Marketing & Trends",
          "Marketing Funnels & Customer Journey",
          "Brand Positioning & Market Research",
          "Competitor Analysis & Strategy"
      
        ] },
        { id: "02", title: "SEO Mastery",
           description:[
            " Keyword Research & Competitive Analysis",
            "Keyword Research & Competitive Analysis",
            "On-Page & Off-Page SEO",
            "Technical SEO (Schema, Site Speed, Mobile Optimization)",
            "Local SEO & E-commerce SEO",
          ] },
        { id: "03", title: "Social Media & Community Building",
           description: [
            "Instagram & Facebook Growth Strategies",
            "LinkedIn & Twitter for Personal Branding",
            "YouTube Marketing & Video SEO",
            "Social Media Monetization Techniques"
          ] },
        { id: "04", title: "Paid Advertising & Google Ads", 
          description: [
            "Google Ads (Search, Display, Shopping)",
              "Facebook & Instagram Ads",
              "LinkedIn & Twitter Ads",
              "A/B Testing & Performance Analytics",
              "Retargeting & Budget Optimization"
          ] },
        { id: "05", title: "Content Marketing & Copywriting", 
          description: [        
          "Crafting High-Converting Sales Copy",
          "Blogging & SEO Writing",
          "Storytelling & Brand Voice",
          "Video Content & Email Marketing"] },
      
        { id: "06", title: " AI & Automation in Marketing", description: ["AI-Powered Tools for Marketing",
              "Chatbots & Email Automation",
              "Personalization & Predictive Analytics",] },
      ];
      const pricingData = [
        {
          id: 1,
          title: "(Day 1-2)",
          price: "Orientation & Icebreaker",
          duration: "Per Week",
          features: [
            "Welcome session with an introduction to Zing Studio’s mission & goals",
            "Fun icebreaker activities & networking games",
            "Overview of the course structure, expectations, and outcomes",
            "Access to LMS (Learning Management System) and student portal"
          ],
          bgShape: "bubble1",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 2,
          title: "(Week 1 - Ongoing)",
          price: "Module-Based Practical Learning",
          duration: "Per Week",
          features: [
            "Engaging video lessons, live masterclasses & hands-on workshops",
              "Real-world applications & industry insights",
              "Interactive Q&A sessions after every module",
          ],
          bgShape: "bubble2",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 3,
          title: "(Every Weekend)",
          price: "Doubt Clearing & Weekly Q&A",
          duration: "Per Week",
          features: [
            "Dedicated live doubt-clearing sessions with mentors",
            "Discussion forums & peer-to-peer learning groups", 
          ],
          bgShape: "bubble3",
          src:"/images/zing-digital-marketing-mastery/unnamed.png",
        },
        {
          id: 4,
          title: "(Mid-Course)",
          price: "Assignments & Case Studies",
          duration: "Per Week",
          features: [
            "Individual & group assignments with real-world scenarios",
              "Case studies on successful digital campaigns & business strategies", 
              "Feedback & improvement sessions"
          ],
          bgShape: "bubble3",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 5,
          title: "",
          price: "Group Projects & Presentations",
          duration: "Per Week",
          features: [
            "Collaborative projects to apply learning",
              "Live presentations with expert feedback", 
              "Team-based problem-solving & innovation challenges"
          ],
          bgShape: "bubble3",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
      
        {
          id: 6,
          title: " ",
          price: "Guest Lectures & Industry Talks",
          duration: "Per Week",
          features: [
            "Sessions with industry leaders, influencers & successful entrepreneurs",
              "AMA (Ask Me Anything) sessions for deep insights", 
              
          ],
          bgShape: "bubble3",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 7,
          title: " ",
          price: "Internship & Real-World Application",
          duration: "Per Week",
          features: [
           "Live internship opportunities for top students",
              "Shadowing real businesses & executing digital strategies", 
          ],
          bgShape: "bubble3",
          src:"/images/zing-digital-marketing-mastery/unnamed.png"
        },
        {
          id: 8,
          title: " ",
          price: "Placement Assistance & Graduation",
          duration: "Per Week",
          features: [
           "Resume building & mock interviews",
              "Placement drives & networking events", 
              "Certification ceremony & alumni community access"
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
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-1.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-2.png"
        },
        {
          
          animation: "fadeInUp",
          delay: "0.3s",
          iconClass: "flaticon-settings",
          img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-3.png"
        },
        {
         
          animation: "fadeInRight",
          delay: "0.3s",
          iconClass: "flaticon-conveyor",
           img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-4.png"
        },
        {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
             img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-5.png"
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
             img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-6.png"
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
             img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-7.png"
          },
          {
           
            animation: "fadeInRight",
            delay: "0.3s",
            iconClass: "flaticon-conveyor",
             img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-8.png"
          },
          {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
             img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-9.png"
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
             img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-10.png"
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
             img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-11.png"
          },
          {
           
            animation: "fadeInRight",
            delay: "0.3s",
            iconClass: "flaticon-conveyor",
             img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-12.png"
          },
          {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
            img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-13.png"
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
            img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/essential-tools/tool-14.png"
          },
        
        ];

    const Tools2 = [
     
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
       img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-1.png"
    },
    {
     
      animation: "fadeInDown",
      delay: "0.3s",
      iconClass: "flaticon-worker",
      img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-2.png"
    },
    {
      
      animation: "fadeInUp",
      delay: "0.3s",
      iconClass: "flaticon-settings",
      img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-3.png"
    },
    {
     
      animation: "fadeInRight",
      delay: "0.3s",
      iconClass: "flaticon-conveyor",
      img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-4.png"
    },
    {
        animation: "fadeInLeft",
        delay: "0.3s",
        iconClass: "flaticon-factory",
        img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-5.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-6.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-7.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-8.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-9.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-10.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-11.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/zing-digital-marketing-mastery/zing-digital-marketing-mastery-Tools/AI-tools/tool-12.png"
      },
     
    ]

const faqData = [
      {
        id: "faq6",
        question: "1. Who is this course suitable for?",
        answer:
          "The course is ideal for students, marketing professionals, entrepreneurs, and anyone interested in mastering digital marketing skills.",
      },
      {
        id: "faq7",
        question: "2. What topics does the course cover?",
        answer:
          "The curriculum includes SEO, SEM, social media marketing, content marketing, email marketing, analytics, and paid advertising strategies.",
      },
      {
        id: "faq8",
        question: "3. Are there any prerequisites to enroll?",
        answer:
          "No prior experience is required. The course is designed for beginners as well as professionals looking to enhance their skills.",
      },
      {
        id: "faq9",
        question: "4. Will I get hands-on experience?",
        answer:
          "Yes. The course offers live projects and real-world case studies to ensure practical learning and application of strategies.",
      },
      {
        id: "faq10",
        question: "5. Is there a certification upon completion?",
        answer:
          "Yes. Participants will receive a certification upon successfully completing the course, validating their digital marketing expertise.",
      },
      {
        id: "faq11",
        question: "6. What career opportunities does this course open up?",
        answer:
          "Graduates can pursue roles such as digital marketing strategist, SEO specialist, social media manager, content marketer, and more.",
      },
      {
        id: "faq12",
        question: "7. How long is the course duration?",
        answer:
          "The course duration typically ranges from 8 to 12 weeks, depending on the learning mode (full-time or part-time).",
      },
      {
        id: "faq13",
        question: "8. Does the course provide placement assistance?",
        answer:
          "Yes. Participants will receive a certification upon successfully completing the course, validating their digital marketing expertise.",
      },
    ]


  return (
    <>
      <div className="page-wraper  " style={{background:"#fff"}}>
        <Header17 />
        
         <NewCourseBanner serviceAbout={serviceAbout}/>

         <BannerList course="Zing Digital <br/> Marketing Mastery" services={services} />

         <NewCourseModules courselist={courselist} title="Zing Digital Marketing Mastery"/>

         <FloatingBubble image="/images/Zing-Infographic-Students-Journey-2.png"/>

         <NewStudentJourney title="Lorem ipsum dolor sit amet <br /> <span className='highlighted-text'>eum neque commodi</span>" pricingData={pricingData}/>

         <WhyChooseAcedemy courseLearning={courseLearning} AcademyContent={AcademyContent}/>
          <div className="d-block d-lg-none">
          <AcademyTeamSection teamIntroData={teamIntroData} />
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
