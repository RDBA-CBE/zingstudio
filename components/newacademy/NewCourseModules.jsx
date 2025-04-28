import React from "react";


const services = [
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

const NewCourseModules = () => {
  return (
    <section className="services-section py-5 NewCourseModules mt-5 mb-5">
      <div className="container">
        <div className="row gy-5 justify-content-center">
          {/* <div className="col-10">
            <div className="container-fluid">
              <div className="row "> */}
              {services.map((service, index) => (
                <div className="col-12 col-md-6 col-xl-4" key={index}>
                  <div className="service-box position-relative">
                    <span className="service-id">{service.id}</span>
                    <h4 className="service-title fw-bold font-30">{service.title}</h4>
                    <p className="service-desc">
                      <ul>
                        {service.description.map((item)=>(
                          <li>{item}</li>
                        ))}
                        
                      </ul>
                      </p>
                  </div>
                </div>
               ))}
              {/* </div>
            </div>
          </div> */}
         
        </div>
      </div>
    </section>
  );
};

export default NewCourseModules;
