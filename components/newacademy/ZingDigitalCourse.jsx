import React from "react";


const ZingDigitalCourse = ({title}) => {


  const courselist = [
    { id: "01", title: "Digital Marketing Foundations", 
      description: [
        " Understanding Digital Marketing & Trends",
      "Marketing Funnels & Customer Journey",
      "Brand Positioning & Market Research",
      "Competitor Analysis & Strategy"
  
    ] ,
    classname:"col-12 col-lg-6 col-xl-4  mt-5 mt-lg-3"
},
    { id: "02", title: "SEO Mastery",
       description:[
        "Keyword Research & Competitive Analysis",
        "On-Page & Off-Page SEO",
        "Technical SEO (Schema, Site Speed, Mobile Optimization)",
        "Local SEO & E-commerce SEO",
      ] ,
      classname:"col-12 col-lg-6 col-xl-4  mt-5 mt-lg-3"
    },
    { id: "03", title: "Social Media & Community Building",
       description: [
        "Instagram & Facebook Growth Strategies",
        "LinkedIn & Twitter for Personal Branding",
        "YouTube Marketing & Video SEO",
        "Social Media Monetization Techniques"
      ],
      classname:"col-12 col-lg-6 col-xl-4  mt-5 mt-lg-3"
     },
    { id: "04", title: "Paid Advertising & Google Ads", 
      description: [
        "Google Ads (Search, Display, Shopping)",
          "Facebook & Instagram Ads",
          "LinkedIn & Twitter Ads",
          "A/B Testing & Performance Analytics",
          "Retargeting & Budget Optimization"
      ] ,
      classname:"col-12 col-lg-6 col-xl-4  mt-5 mt-lg-3"
    },
    { id: "05", title: "Content Marketing & Copywriting", 
      description: [        
      "Crafting High-Converting Sales Copy",
      "Blogging & SEO Writing",
      "Storytelling & Brand Voice",
      "Video Content & Email Marketing"] ,
      classname:"col-12 col-lg-6 col-xl-4  mt-5 mt-lg-3"
    },
  
    { id: "06", title: " AI & Automation in Marketing", description: ["AI-Powered Tools for Marketing",
          "Chatbots & Email Automation",
          "Personalization & Predictive Analytics",],
          classname:"col-12 col-lg-6 col-xl-4  mt-5 mt-lg-3"
         },

          

    { id: "07", title: "Internship", 
            description: [        
            "Work on Live Projects",
            "Develop Digital Strategies for Real Businesses",
            "Create & Optimize Ad Campaigns",
            "SEO & Social Media Content Execution"],
            classname:"col-12 col-lg-6 col-xl-4"
         },

            {classname:"col-12 col-lg-6 col-xl-8 mt-5 mt-lg-3",
              img:"/images/services/web-deisgn/banner-vd.mp4"
            },
  ];
  const length = courselist.length;
  
  return (
    <section className="services-section py-5 NewCourseModules mt-5 mb-5">
      <div className="container-fluid">
        <div className="col-9 mx-auto">
        <div className="row gy-5 justify-content-center">
        <h2 className="section-title fw-bold font-48 text-center" >
        Zing Digital Marketing Mastery
         
         {/* Lorem ipsum dolor sit amet <br />
         <span className="highlighted-text">eum neque commodi</span> */}
       </h2>
          {/* <div className="col-10">
            <div className="container-fluid">
              <div className="row "> */}
              {courselist.map((service, index) => (
                <div className={service?.classname} key={index}>
                  <div className="service-box position-relative" >
                   {service?.img && 
                   <div className=" service-title" style={{height:"350px"}}>
                    <video  src={service?.img}
                            loop autoPlay  muted
                                type="video/mp4"
                                className="rounded-5" style={{height:"100%", width:"100%",objectFit:"cover"}} >   
                                </video>
                   </div>
                   } 
                    <span className="service-id">{service?.id}</span>
                    <h4 className="service-title fw-bold font-30">{service?.title}</h4>
                    <p className="service-desc">
                      <ul>
                        {service.description?.map((item)=>(
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
       
      </div>
    </section>
  );
};

export default ZingDigitalCourse;
