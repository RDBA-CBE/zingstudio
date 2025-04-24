import React from "react";


const services = [
  { id: "01", title: "Market Research", description: "Creating visually appealing, user-friendly websites that align with the client's brand and objectives." },
  { id: "02", title: "Design & Development", description: "Creating visually appealing, user-friendly websites that align with the client's brand and objectives." },
  { id: "03", title: "Quality Assurance", description: "Creating visually appealing, user-friendly websites that align with the client's brand and objectives." },
  { id: "01", title: "Market Research", description: "Creating visually appealing, user-friendly websites that align with the client's brand and objectives." },
  { id: "02", title: "Design & Development", description: "Creating visually appealing, user-friendly websites that align with the client's brand and objectives." },
  { id: "03", title: "Quality Assurance", description: "Creating visually appealing, user-friendly websites that align with the client's brand and objectives." },
];

const NewCourseModules = () => {
  return (
    <section className="services-section py-5 NewCourseModules mt-5 mb-5">
      <div className="container">
        <div className="row gy-5">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="service-box position-relative">
                <span className="service-id">{service.id}</span>
                <h4 className="service-title fw-bold">{service.title}</h4>
                <p className="service-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCourseModules;
