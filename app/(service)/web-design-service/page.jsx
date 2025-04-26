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
    caption:"Web Design",
    head:" Craft Stunning  <br /> <span class='highlight'>Websites</span>",
    subtitle:"that Captivate, Engage, and Convert with our Web Designing Expertise!",
    src:"/images/services/web-deisgn/banner-vd.mp4",
    listTitle:"Designing Websites that Work, Impress, and Convert!",
  
    list:[
      {
        src:"/images/services/web-deisgn/1.png",
        item:"User-Centric  <br/>Design"
      },
      {
        src:"/images/services/web-deisgn/2.png",
        item:"Responsive &  <br/> Mobile-Friendly"
      },
      {
        src:"/images/services/web-deisgn/7.png",
        item:"SEO-Optimized <br/> for Visibility"
      }
    ],
    description:"Let our Web Design experts bring your vision to life!",
    
}

const serviceAbout ={
  subtitle:"lorem lorem",
  title:"Transform Your Online <br /> Presence with Expert <br />  Web Design.",
  descrip:"Create stunning, user-friendly websites that captivate and convert. Our web design solutions combine creativity with functionality, ensuring a seamless user experience across all devices.",
  subDes:" Let us build a digital presence that leaves a lasting impression.",
  src:"/images/services/web-deisgn/banner-vd.mp4"
}

const Performance={
  head:"Design Excellence",
  description:" Every Web Design <br /> plan includes",
  src:"/images/services/web-deisgn/vector-img.png",
  guarantee:[
    {
      icon:"/images/services/web-deisgn/responsive-design-icon.png",
      title:" Responsive Design", 
      caption:"Seamless experience across all devices."
    },
    {
      icon:"/images/services/web-deisgn/user-centric-interface-icon.png",
      title:" User-Centric Interface", 
      caption:"Engaging, intuitive, and easy to navigate."
    },
    {
      icon:"/images/services/web-deisgn/seo-optimized-icon.png",
      title:"SEO-Optimized", 
      caption:"Designed to rank higher on search engines."
    },
    {
      icon:"/images/services/web-deisgn/custom-solution-icon.png",
      title:"Custom Solutions", 
      caption:" Tailored to reflect brand identity and goals."
    }
  ],

}


const Features = {
  subtitle:"Design. Develop. Deliver.",
  title:"Web design process for delivering exceptional websites",
  description:"You get speedier page-load times, tools to help grow your business, and essential security measures to build trust and help protect user data. Plus, you get peace of mind with a money-back guarantee.",


}

const Feaservices = [
    { title: "Discovery &  <br/> Planning", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium",description:"Understanding goals, audience, and brand identity to create a tailored strategy." },
    { title: "Wireframing &  <br/> Prototyping", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall" ,description:"Designing a visual blueprint for seamless navigation and user experience."},
    { title: "Design  <br/> Creation", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium" , description:"Crafting visually engaging and brand-aligned designs using the latest design principles."},
    { title: "Development ", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall",description:"Converting designs into responsive, functional websites with clean and efficient code." },
    { title: "Testing &  <br/> Optimization", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall" ,description:"Conducting thorough testing for usability, compatibility, and performance across devices."},
    { title: "Launch &  <br/> Maintenance", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium", description:"Deploying the website and providing continuous support for updates and improvements." },
  ];


  const portfolioContent ={
    description: "Check out our lineup of stunning websites that pop, perform, and leave a mark! At Zing Studio, we blend bold designs with smooth vibes to craft digital spaces that turn clicks into customers. From trendy business sites to vibrant online stores, our creations are all about making your brand shine."
   }
  const works = [
    {
      image: '/images/services/web-deisgn/mockup-1.jpg',
      title: 'GMAK Fiber Laser',
      tags: "Static"
    },
    {
      image: '/images/services/web-deisgn/mockup-2.jpg',
      title: 'SKD Finedecor',
      tags: "CMS",
    },
    {
      image: '/images/services/web-deisgn/mockup-3.jpg',
      title: 'NVM Lifestyle Clinic',
      tags: "Static",
    },
  ];

  const pricingPlans = [
    {
      title: 'Static Website Design',
      price: '15,000',
      features: [
        '10 Page Static Website Design',
        'SEO Ready Website',
        '100% Mobile Friendly Website',
        'Quick Enquiry Form',
        'Map Listing & Social Media Integration',
        'Stock Images',
        '1st Year Hosting/SSL & Domain Free',
        '1 Revision',
      ],
    },
    {
      title: 'CMS Website Design',
      price: '30,000',
      features: [
        '10 Page Static Website Design',
        'SEO Ready Website',
        '100% Mobile Friendly Website',
        'Quick Enquiry Form',
        'Map Listing & Social Media Integration',
        'Stock Images',
        '1st Year Hosting/SSL & Domain Free',
        '1 Revision',
      ],
    },
  ];

  const faqData = [
    {
      id: "faq6",
      question: "1. What is the typical timeline for a web design project?",
      answer:
        "The timeline varies depending on the complexity and requirements of the project. On average, it takes 2 to 3 weeks to complete a standard website.",
    },
    {
      id: "faq7",
      question: "2. How involved will I be in the design process?",
      answer:
        "We encourage collaboration and will involve you at every major milestone, from concept approval to design review and final testing.",
    },
    {
      id: "faq8",
      question: "3. Will my website be mobile-friendly?",
      answer:
        "Absolutely! All our designs are responsive and optimized to work seamlessly across all devices, including smartphones and tablets.",
    },
    {
      id: "faq9",
      question: "4. Can I request changes once the design is complete?",
      answer:
        "Yes, we offer 1 revision during the design phase to ensure your satisfaction before proceeding to development.",
    },
    {
      id: "faq10",
      question: "5. Do you provide content for the website?",
      answer:
        "Content needs to be shared from client side. If required our team also offers copywriting services if needed at extra cost.",
    },
    {
      id: "faq11",
      question: "6. What platforms do you use for website development?",
      answer:
        "We work with a variety of platforms like WordPress and HTML5/CSS3 - Bootstrap depending on your needs.",
    },
    {
      id: "faq12",
      question: "7. Do you offer website maintenance and support?",
      answer:
        "Yes, we provide ongoing maintenance packages to keep your website updated, secure, and performing at its best at a additional nominal cost.",
    },
    {
      id: "faq13",
      question: "8. Will my website be SEO-friendly?",
      answer:
        "Definitely! We follow best practices for SEO during the design and development stages to enhance your website’s visibility.",
    },
   
    {
      id: "faq15",
      question: "9. How do I get started?",
      answer:
        "Simply contact us to schedule a consultation. We’ll discuss your vision, goals, and how we can bring your website to life!",
    },
  ]
  
  
    
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />

        <ServiceBanner bannerContent={bannerContent}/>

        <NewServiceAbout serviceAbout={serviceAbout}/>

        <NewPricingTable pricingPlans={pricingPlans}/>

        <NewGaruntee Performance={Performance}/>

        <MiddleCTA Cta="From understanding brand goals to delivering a responsive, user-friendly website, we ensure every step drives engagement and results. From Vision to Website — See the Magic of Our Design Process!"/>

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
