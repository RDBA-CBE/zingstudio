import React from "react";

const NewFeatures = ({Features,Feaservices}) => {
//   const services = [
//     { title: "UI/UX Experience", icon: "UI", extraClass: "irregular-box tall-box" },
//     { title: "Web Development", icon: "</>", extraClass: "irregular-box medium-box" },
//     { title: "Digital Marketing", icon: "📊", extraClass: "irregular-box short-box" },
//     { title: "SEO Solutions", icon: "📈", extraClass: "irregular-box short-box" },
//     { title: "Digital Marketing", icon: "🖥️", extraClass: "irregular-box medium-box" },
//     { title: "SEO Solutions", icon: "🔍", extraClass: "irregular-box short-box" },
//   ];



  return (
    <section className="digital-services-section container-fluid py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-5 text-white digital-services-left">
          <p className="features-subtitle mb-3">{Features?.title}
          </p>
            <h2 className="services-title mb-3">{Features?.subtitle}</h2>
            <p className="services-description mb-4">
            {Features?.description}
            </p>
            <button className="view-services-btn">View All Services</button>
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
                <div className="service-grid">
                    {Feaservices.map((service, index) => (
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
