import React from "react";

const NewInfluencerMarketingService = ({Features,Feaservices}) => {
//   const services = [
//     { title: "UI/UX Experience", icon: "UI", extraClass: "irregular-box tall-box" },
//     { title: "Web Development", icon: "</>", extraClass: "irregular-box medium-box" },
//     { title: "Digital Marketing", icon: "📊", extraClass: "irregular-box short-box" },
//     { title: "SEO Solutions", icon: "📈", extraClass: "irregular-box short-box" },
//     { title: "Digital Marketing", icon: "🖥️", extraClass: "irregular-box medium-box" },
//     { title: "SEO Solutions", icon: "🔍", extraClass: "irregular-box short-box" },
//   ];



  return (
    <section className="digital-services-section container-fluid py-5 mt-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-5 text-white digital-services-left">
          
            <h2 className="services-title mb-3 font-48">{Features?.subtitle}</h2>
            <p className="features-subtitle mb-3">{Features?.title}
          </p>
            <p className="services-description mb-4">
            {Features?.description}
            </p>
            
           
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
                <div className="service-grid">
                    {Feaservices.map((service, index) => (
                        <div className={`service-card ${service.extraClass}`} key={index}>
                        <div className="service-icon icon-md"><img src={service.icon} alt={service.title} /></div>
                        <h5 className="service-title font-22" dangerouslySetInnerHTML={{__html:service.title}}></h5>
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

export default NewInfluencerMarketingService;
