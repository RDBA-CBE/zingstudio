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
    { title: "UI/UX <br/> Experience", icon: "UI", extraClass: "card-medium" },
    { title: "Web <br/> Development", icon: "</>", extraClass: "card-tall" },
    { title: "Digital <br/> Marketing", icon: "📊", extraClass: "card-medium" },
    { title: "SEO <br/> Solutions", icon: "📈", extraClass: "card-tall" },
    { title: "Digital <br/> Marketing", icon: "🖥️", extraClass: "card-tall" },
    { title: "SEO <br/> Solutions", icon: "🔍", extraClass: "card-medium" },
  ];

  return (
    <section className="digital-services-section container-fluid py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-5 text-white digital-services-left">
            <div className="mb-3 star-icon">★</div>
            <h2 className="services-title mb-3">Digital Services<br />Tailored to You</h2>
            <p className="services-description mb-4">
              A digital agency, also known as a digital marketing agency or a digital marketing firm, is a specialized company that provides a range of services to help businesses establish.
            </p>
            <button className="view-services-btn">View All Services</button>
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
                <div className="service-grid">
                    {services.map((service, index) => (
                        <div className={`service-card ${service.extraClass}`} key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <p className="service-title" dangerouslySetInnerHTML={{__html:service.title}}></p>
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
