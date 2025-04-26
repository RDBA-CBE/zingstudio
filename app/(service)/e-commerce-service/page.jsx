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
    caption:"E-Commerce",
    head:" Scalable and  <br /> <span class='highlight'>Seamless E-Commerce</span>",
    subtitle:"Solutions for Business Growth.",
    src:"/images/services/web-deisgn/banner-vd.mp4",
    listTitle:"Custom E-Commerce solutions for smooth operations, better user experiences, and faster growth.",  
    list:[
      {
        src:"/images/services/web-deisgn/1.png",
        item:"Seamless  <br/>Integration"
      },
      {
        src:"/images/services/web-deisgn/2.png",
        item:"User-Centric  <br/> Design"
      },
      {
        src:"/images/services/web-deisgn/7.png",
        item:"Scalable  <br/> Growth"
      }
    ],
    description:"Our Web Development experts are ready to assist you!",
    
}

const serviceAbout ={
  subtitle:"lorem lorem",
  title:"Special offer for new customers",
  descrip:"Zing Studio provides comprehensive E-Commerce solutions designed to meet the unique needs of your business. Our platforms offer seamless integration with payment gateways, logistics,and inventory management systems, ensuring operational efficiency. ",
  subDes:"Partner with us to build a robust online presence and achieve long-term success.",
  src:"/images/services/web-deisgn/banner-vd.mp4"
}

const Performance={
  head:"Seamless Solutions",
  description:" Every E-Commerce   <br /> plan includes",
  src:"/images/services/web-deisgn/vector-img.png",
  guarantee:[
    {
      icon:"/images/services/web-deisgn/responsive-design-icon.png",
      title:" Seamless Integration", 
      caption:"Seamless experience across all devices."
    },
    {
      icon:"/images/services/web-deisgn/user-centric-interface-icon.png",
      title:" User-Centric Design", 
      caption:"Intuitive interfaces for enhanced customer experience and engagement."
    },
    {
      icon:"/images/services/web-deisgn/seo-optimized-icon.png",
      title:"Scalable Solutions", 
      caption:"Flexible platforms that grow alongside your business."
    },
    {
      icon:"/images/services/web-deisgn/custom-solution-icon.png",
      title:"Robust Security", 
      caption:"Advanced security measures to protect customer data and transactions."
    }
  ],

}


const Features = {
  subtitle:"Smart E-Commerce Solutions",
  title:"Smart, secure, and scalable E-Commerce solutions to drive growth",
  description:"Zing Studio delivers customized E-Commerce solutions designed for performance, security, and user engagement. From intuitive design to seamless functionality, we create online stores that enhance customer experience and drive conversions. Partner with us to build a future-ready digital storefront.",


}

const Feaservices = [
    { title: "Consultation  &  <br/>  Planning", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium",description:"Understanding business goals and target audience to create a strategic roadmap." },
    { title: "Design &   <br/> Development", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall" ,description:"Crafting user-friendly, responsive, and visually appealing designs backed by robust development."},
    { title: "Customization   <br/> Integration", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium" , description:"Implementing tailored features and integrating essential third-party tools for seamless operations."},
    { title: "Testing & <br/> Quality Assurance ", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall",description:"Conducting rigorous testing to ensure a flawless user experience across devices and platforms." },
    { title: "Launch &  <br/> Optimization", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall" ,description:"Deploying the platform with post-launch support, ensuring performance tracking and continuous improvements."},
    { title: "Maintenance & <br/> Support", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium", description:"Offering reliable technical assistance, updates, and enhancements to keep the platform at its best." },
  ];


  const portfolioContent ={
    description: "Discover a portfolio of e-commerce projects engineered for optimal user experiences, secure transactions, and scalable growth. Each solution is tailored to enhance customer engagement, drive sales, and support sustained digital success."
   }
  const works = [
    {
        title: "Rhythm Fashion",
        image: "/images/services/E-commerce/mockup-5.jpg",
      tags: "Static"
    },
    {
        title: "Thangam Jewelry",
        image: "/images/services/E-commerce/mockup-2.jpg",
      tags: "CMS",
    },
    {
        title: "Faso",
        image: "/images/services/E-commerce/mockup-4.jpg",
      tags: "Static",
    },
  ];

  const pricingPlans = [
    {
      title: 'E-Commerce Web Design',
      price: '50,000',
      features: [
            "Administrator Dashboard",
             "Categories",
             "Secure Online Payment",
             "Product Reviews & Ratings",
             "Email Notifications",
             "Products & Inventory Management",
             "Orders & Shipping Management",
             "Stock,Order & Customer Report"
      ],
    },
    {
      title: 'Saas Platform',
      price: '50,000',
      features: [
        "Administrator Dashboard",
        "Categories",
        "Secure Online Payment",
        "Product Reviews & Ratings",
        "Email Notifications",
        "Products & Inventory Management",
        "Orders & Shipping Management",
        "Stock,Order & Customer Report"
      ],
    },
  ];

  const faqData = [
    {
      id: "faq6",
      question: "1. Can I upload & edit the products on my own?",
      answer:
        "Yes, you'll be able to upload and edit products on your own. <br/><br/> You'll also be able to add product pictures, videos, prices, discounts on your own without any coding. <br/><br/> We'll provide you with video tutorials to help you understand how to upload, edit and manage your products easily.",
    },
    {
      id: "faq7",
      question: "2. Will the website be secure?",
      answer:
        "All of our eCommerce websites come with an SSL secure certificate. An SSL certificate helps in keeping the website 100% encrypted and secure. <br/><br/> All of the payments on the website will also be 100% encrypted and secured.",
    },
    {
      id: "faq8",
      question: "3. Can I make changes to the website later?",
      answer:
        "All of our eCommerce websites are dynamic websites with integrated Content Management Systems (CMS). Through the CMS, you'll be able to add, edit, update all of the content on the website including pages, text, images, videos, products, etc. <br/><br/> You can also make changes to existing products listed on your website. You'll be able to update images, titles, prices, discounts & more directly through the CMS without having to code.",
    },
    {
      id: "faq9",
      question: "4. Can I add blogs to my eCommerce website?",
      answer:
        "Yes, you can add as many blogs as you like to your eCommerce website. <br/><br/> You can also organize your blogs into categories, sub-categories, and tags. <br/><br/> You can also add pictures, videos to the blogs and also embed social media posts directly on your website blogs.",
    },
    {
      id: "faq10",
      question: "5.  Do you provide technical support after project completion?",
      answer:
        "Yes, we provide up to 30 Days of free technical support after project completion.",
    },
    {
      id: "faq11",
      question: "6. Will I be able to track visitors on the website?",
      answer:
        "Yes, you'll be able to track visitors as well the key actions they take on the website. <br/><br/> We'll be integrating your website with Google Analytics. We'll also enable enhanced eCommerce tracking for your website. This helps in keeping track of all the visitors on the website as well as the key actions they are taking on the website like viewing a product, adding a product to the cart, reaching the checkout page, etc...",
    },
    // {
    //   id: "faq12",
    //   question: "7. How long does it take to develop an E-Commerce website?",
    //   answer:
    //     "Timelines vary depending on project complexity, but we provide clear milestones and updates throughout the development process.",
    // },
    // {
    //   id: "faq13",
    //   question: "8. Do you offer SEO and digital marketing support for my E-Commerce site?",
    //   answer:
    //     "Yes, we offer SEO, digital marketing, and content management services to help drive traffic and sales.",
    // },
  ]
  
  
    
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />

        <ServiceBanner bannerContent={bannerContent}/>

        <NewServiceAbout serviceAbout={serviceAbout}/>

        <NewPricingTable pricingPlans={pricingPlans}/>

        <NewGaruntee Performance={Performance}/>

        <MiddleCTA Cta="From concept to launch, we transform ideas into high-performing e-commerce platforms. Focused on customization, functionality, and growth, our expert approach ensures success. Launch, Grow, and Succeed Online — Get Started with Us!"/>

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
