import React from "react";

import Header17 from "@/components/headers/Header17";
import ServiceBanner from "@/components/service/newservice/ServiceBanner";
import NewServiceAbout from "@/components/service/newservice/NewServiceAbout";
import NewPricingTable from "@/components/service/newservice/NewPricingTable";
import NewGaruntee from "@/components/service/newservice/NewGaruntee";
import NewFeatures from "@/components/service/newservice/NewFeatures";
import NewServicePortfolio from "@/components/service/newservice/NewServicePortfolio";
import NewFAQ from "@/components/service/newservice/NewFAQ";
import Footer1 from "@/components/footers/Footer1";
import HomeCta from "@/components/service/HomeCta";
import MiddleCTA from "@/components/service/newservice/MiddleCTA";

export const metadata = {
  title: "Web Design Development || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {

  const bannerContent = {
    caption:"Digital Marketing",
    head:" Boost Visibility,  <br /> <span class='highlight'>Engage Audiences</span>",
    subtitle:"and Drive Results with Our Digital Marketing Expertise!",
    src:"/images/services/web-deisgn/banner-vd.mp4",
    listTitle:"Drive growth with targeted digital strategies that maximize impact.",
  
    list:[
      {
        src:"/images/services/web-deisgn/1.png",
        item:"Data-Driven   <br/>Campaigns"
      },
      {
        src:"/images/services/web-deisgn/2.png",
        item:"Multi-Channel <br/> Strategies"
      },
      {
        src:"/images/services/web-deisgn/7.png",
        item:"Performance  <br/> for Tracking"
      }
    ],
    description:"Our Digital Marketing pros are here to boost your brand!",
    
}

const serviceAbout ={
  subtitle:"lorem lorem",
  title:"Establish Your Brand   Digitally with Expert Digital   Marketing Solutions",
  descrip:"Drive measurable growth with our result-oriented digital marketing services. From data-driven strategies to optimized campaigns, we enhance your online visibility and ensure meaningful engagement. ",
  subDes:"  Partner with us to build a stronger digital presence and achieve your business goals efficiently.",
  src:"/images/services/web-deisgn/banner-vd.mp4"
}

const Performance={
  head:"Result Oriented",
  description:" Every Digital Marketing <br /> plan includes",
  src:"/images/services/web-deisgn/vector-img.png",
  guarantee:[
    {
      icon:"/images/services/web-deisgn/responsive-design-icon.png",
      title:" Tailored Strategies", 
      caption:"Personalized plans aligned with business goals."
    },
    {
      icon:"/images/services/web-deisgn/user-centric-interface-icon.png",
      title:" Targeted Reach", 
      caption:"Effective audience engagement through data insights."
    },
    {
      icon:"/images/services/web-deisgn/seo-optimized-icon.png",
      title:"Performance Tracking", 
      caption:"Real-time analytics for measurable growth."
    },
    {
      icon:"/images/services/web-deisgn/custom-solution-icon.png",
      title:"Multi-Channel Approach", 
      caption:"Integrated campaigns across platforms for maximum impact."
    }
  ],

}


const Features = {
  subtitle:"Strategize. Optimize. Achieve!",
  title:"Digital Marketing Service Process at Zing Studio",
  description:"You get speedier page-load times, tools to help grow your business, and essential security measures to build trust and help protect user data. Plus, you get peace of mind with a money-back guarantee.",


}

const Feaservices = [
    { title: "Understanding   <br/> Goals", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium",description:"Collaborating to define clear objectives and key performance indicators (KPIs)." },
    { title: "Market  <br/> Research", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall" ,description:"Analyzing competitors, audience behavior, and industry trends."},
    { title: "Strategy  <br/> Development", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium" , description:"Crafting data-driven marketing plans tailored to business goals."},
    { title: "Implementation ", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall",description:"Executing multi-channel campaigns across relevant platforms." },
    { title: "Monitoring & : <br/> Optimization", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall" ,description:"Tracking performance, analyzing insights, and making adjustments for continuous improvement."},
    { title: "Reporting", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium", description:"Providing transparent reports to measure success and refine strategies." },
  ];


  const portfolioContent ={
    description: "Check out how we turn clicks into connections! From buzzworthy social media campaigns to SEO strategies that rank, our digital marketing projects are all about making brands shine and results soar."
   }
  const works = [
    {
        title: "Kumar's Houston",
        image: "/images/services/digital-marketing/mockup-1.jpg",
      tags: "Static"
    },
    {
        title: "Torren Pumps",
      image: "/images/services/digital-marketing/mockup-2.jpg",
     
      tags: "CMS",
    },
    {
        title: "Tirumalai Textiles",
        image: "/images/services/digital-marketing/mockup-4.jpg",
      tags: "Static",
    },
  ];

  const pricingPlans = [
    {
      title: 'Basic',
      price: '10,000',
      features: [
        "Max Keywords - 8 Keywords",
        "Competitor Analysis - 1 Competitor",
        "Meta Tags Creation - 10 Page",
        "Blog Posting (500 – 700 words) - 1 Post",
        "Article Writing (500 – 700 words) - 1 Article",
        "Onsite Blog (1000 – 1500 words) - 1 Blog",
        "Guest Blogging - additional cost",
        "Paid Submissions - additional cost",
        "Backlinks Count - 40",
        "Minimum Contract Duration - 6 Months",
      ],
    },
    {
      title: 'Enterprise',
      price: '20,000',
      features:  [
        "Max Keywords - 15 Keywords",
        "Competitor Analysis - 3 Competitor",
        "Meta Tags Creation - 15 Page",
        "Blog Posting (500 – 700 words) - 3 Post",
        "Article Writing (500 – 700 words) - 2 Article",
        "Onsite Blog (1000 – 1500 words) - 2 Blog",
        "Guest Blogging - additional cost",
        "Paid Submissions - additional cost",
        "Backlinks Count - 70",
        "Minimum Contract Duration - 6 Months",
      ],
    },
  ];

  const SMOpricingPlans = [
    {
      title: 'Basic',
      price: '10,000',
      features:  [
        "Instagram - 3 reels , 3 posts",
        "Facebook - 3 reels , 3 posts",
        "Pinterest - 10 pins",
      ],
    },
    {
      title: 'Enterprise',
      price: '20,000',
      features:   [
        "Instagram - 3 reels , 3 posts",
        "Facebook - 3 reels , 3 posts",
        "Pinterest - 10 pins",
      ],
    },
  ];

  const CombopricingPlans = [
    {
      title: 'Grow Plan',
      price: '40,000',
      features:  [
        "Logo - 5 options",
        "Brochure - 8 Pages",
        "Business Card",
        "Basic Website - 8 Pages",
        "Google Maps",
        "Social Media Pages - Basic profile creation",
      ],
    },
    {
      title: 'Thrive Plan',
      price: '75,999',
      features:  [
        "Logo - 5 options",
        "Brochure - 8 Pages",
        "Business Card",
        "Google Maps",
        "Social Media Pages - Basic profile creation",
        "CMS Website - 12 pages",
        "SEO for 3 Months - 6 Keywords",
      ],
    },
    {
      title: 'Flourish Plan',
      price: '1,49,999',
      features:  [
        "Logo - 5 options",
        "Brochure - 8 Pages",
        "Business Card",
        "Google Maps",
        "Social Media Management (SMM) for 3 Months",
        "CMS Website - 12 pages",
        "SEO for 6 Months",
      ],
    },
  ];

  const faqData = [
    {
      id: "faq6",
      question: "1. What is digital marketing?",
      answer:
        " Digital marketing involves promoting products, services, or brands using online platforms such as search engines, social media, email, and websites. It’s a powerful way to reach and engage your target audience.",
    },
    {
      id: "faq7",
      question: "2. Why is digital marketing important for my business? ",
      answer:
        "Digital marketing helps businesses reach a broader audience, increase brand visibility, generate leads, and boost sales. It’s cost-effective and provides measurable results.",
    },
    {
      id: "faq8",
      question: "3. What services do you offer under digital marketing?",
      answer:
        "We offer a comprehensive range of services including:  <br/> <ul class='px-3 mt-2'><li >Search Engine Optimization (SEO)</li> <li >Social Media Marketing (SMM)</li><li >Pay-Per-Click Advertising (PPC)</li><li>Content Marketing </li><li>Email Marketing</li><li>Influencer Marketing</li><li>Web Design & Development</li><li>Analytics & Reporting</li></ul>",
    },
    {
      id: "faq9",
      question: "4. How do I know which digital marketing service is right for my business? ",
      answer:
        "We conduct a detailed analysis of your business, industry, and target audience to recommend a customized digital marketing strategy that aligns with your goals.",
    },
    {
      id: "faq10",
      question: "5. How long will it take to see results?",
      answer:
        "Results vary depending on the service and strategy applied. While paid advertising campaigns may show immediate results, SEO and organic marketing typically take 3 to 6 months to yield noticeable outcomes.",
    },
    {
      id: "faq11",
      question: "6. What platforms do you specialize in?",
      answer:
        "We work on various platforms including Google, Facebook, Instagram, LinkedIn, Twitter, YouTube, and more, ensuring a well-rounded digital presence.",
    },
    {
      id: "faq12",
      question: "7. Can you help with branding and website development?",
      answer:
        "Yes! We offer branding services, website design, and development to create a visually appealing and functional online presence for your business.",
    },
    {
      id: "faq13",
      question: "8. How much does digital marketing cost? ",
      answer:
        "The cost depends on the scope of services, the size of your business, and your goals. We offer flexible packages to suit different budgets.",
    },
    {
      id: "faq14",
      question: "9. How will I track the progress of my digital marketing campaigns?",
      answer:
        "We provide regular reports with key performance indicators (KPIs) and analytics to measure the effectiveness of your campaigns.",
    },
    {
      id: "faq15",
      question: "10. How can I get started?",
      answer:
        "Contact us today for a free consultation. Our team will guide you through the best digital marketing strategies to grow your business!",
    },
  ]
  
  
    
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />

        <ServiceBanner bannerContent={bannerContent}/>

        <NewServiceAbout serviceAbout={serviceAbout}/>

        <NewPricingTable pricingPlans={pricingPlans} title="Digital Marketing - SEO"/>

        <div className="mt-5">
        <NewPricingTable pricingPlans={SMOpricingPlans} title="Digital Marketing - SMO"/>
        </div>

        <div className="mt-5">
        <NewPricingTable pricingPlans={CombopricingPlans} title="Digital Marketing - <br/> Combo Packages for Startups"/>
        </div>

        <NewGaruntee Performance={Performance}/>

        <MiddleCTA Cta="From goal-setting and market analysis to campaign execution and performance tracking, we ensure measurable growth. Enhance Your Digital Presence with Confidence. Connect with us today!"/>

        <NewFeatures Features={Features} Feaservices={Feaservices}/>

        <NewServicePortfolio portfolioContent={portfolioContent} works={works}/>

        <NewFAQ faqData={faqData}/>

        
        <HomeCta />
        <div className="home-footer" >
        <Footer1/>
        </div>
      </div>
    </>
  );
}
