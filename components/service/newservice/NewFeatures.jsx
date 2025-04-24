import React from "react";

const NewFeatures = () => {
//   const services = [
//     { title: "UI/UX Experience", icon: "UI", extraClass: "irregular-box tall-box" },
//     { title: "Web Development", icon: "</>", extraClass: "irregular-box medium-box" },
//     { title: "Digital Marketing", icon: "📊", extraClass: "irregular-box short-box" },
//     { title: "SEO Solutions", icon: "📈", extraClass: "irregular-box short-box" },
//     { title: "Digital Marketing", icon: "🖥️", extraClass: "irregular-box medium-box" },
//     { title: "SEO Solutions", icon: "🔍", extraClass: "irregular-box short-box" },
//   ];

const services = [
    { title: "Discovery &  <br/> Planning", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium",description:"Understanding goals, audience, and brand identity to create a tailored strategy." },
    { title: "Wireframing &  <br/> Prototyping", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall" ,description:"Designing a visual blueprint for seamless navigation and user experience."},
    { title: "Design  <br/> Creation", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium" , description:"Crafting visually engaging and brand-aligned designs using the latest design principles."},
    { title: "Development ", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall",description:"Converting designs into responsive, functional websites with clean and efficient code." },
    { title: "Testing &  <br/> Optimization", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-tall" ,description:"Conducting thorough testing for usability, compatibility, and performance across devices."},
    { title: "Launch &  <br/> Maintenance", icon: "/images/services/web-deisgn/i-1.png", extraClass: "card-medium", description:"Deploying the website and providing continuous support for updates and improvements." },
  ];

  return (
    <section className="digital-services-section container-fluid py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-5 text-white digital-services-left">
          <p className="features-subtitle mb-3">Design. Develop. Deliver.
          </p>
            <h2 className="services-title mb-3">Web design process for delivering exceptional websites</h2>
            <p className="services-description mb-4">
            You get speedier page-load times, tools to help grow your business, and essential security measures to build trust and help protect user data. Plus, you get peace of mind with a money-back guarantee.
            </p>
            <button className="view-services-btn">View All Services</button>
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
                <div className="service-grid">
                    {services.map((service, index) => (
                        <div className={`service-card ${service.extraClass}`} key={index}>
                        <div className="service-icon icon-md"><img src={service.icon} alt={service.title} /></div>
                        <p className="service-title" dangerouslySetInnerHTML={{__html:service.title}}></p>
                        <p className="service-card-des">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFeatures;
