import React from "react";


const WhyChooseAcedemy = () => {


    const serviceCards = [
        {
          title: "Web Solution Development",
          link: "#",
          className: "web-solution-card"
        },
        {
          title: "Mobile Apps Development",
          link: "#",
          className: "mobile-apps-card"
        },
        {
          title: "Project & Product Consulting",
          link: "#",
          className: "consulting-card"
        }
      ];


  return (
    <div className="container py-5 WhyChooseAcedemy">
      <div className="row mb-4">
        <div className="col-12 text-black">
          <h2 className="ds-heading fw-bold fs-2">
            We Offer Digital Services <br /> Tailored to You
          </h2>
          <button className="btn ds-all-btn float-end text-black">All Services</button>
        </div>
      </div>
      <div className="row">
        {serviceCards.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className={`card ds-card text-white ${item.className}`}>
              <div className="card-body d-flex flex-column  h-100">
                <h5 className="ds-card-title fw-bold fs-5">{item.title}</h5>
                <span className="ds-arrow fs-4">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseAcedemy;
