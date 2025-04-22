import React from "react";


const services = [
  {
    id: "01",
    title: "Website Design",
    description: "Starting @ ₹ 15,000",
    image: "/images/Home-Page/web.png",
    link:"web-design-service"
  },
  {
    id: "02",
    title: "Digital Marketing",
    description: "Starting @ ₹ 12,000",
    image: "/images/Home-Page/digital.png",
    link:"digital-marketing-service"
  },
  {
    id: "03",
    title: "Ecommerce",
    description: "Starting @ ₹ 50,000",
    image: "/images/Home-Page/ecomm.png",
    link:"e-commerce-service"
  },
];


const NewSpecialize = () => {
  return (
    <section className="services-section text-white py-5 NewSpecialize" style={{marginTop:"40px", background:"#1a43bf"}}>
      <div className="container-fluid">
        <div className="row justify-content-center">
        <div className="col-10 col-lg-8">
            <div className="d-flex justify-content-between align-items-center  flex-wrap">
              <div>
                <h2 className="section-title  mb-1 mb-3 mb-md-5">
                Lorem ipsum dolor sit amet<br className="d-none d-md-block"/> consectetur adipis
                </h2>
              </div>
              <button className="btn btn-outline-light mb-3 mb-md-5  service-btn">
                <a href="/services" className="text-white " style={{textDecoration:"none"}}>
                All Services</a>
              </button>
            </div>

            {services.map((service) => (
              <div key={service.id} className="service-item border-top border-secondary py-4">
              <div className="service-content d-flex align-items-start cursor-pointer">
                <div className="service-image-wrapper mt-0 mt-lg-0">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-id text-white mx-3 mt-xl-4 mt-4  ">({service.id})</div>
                <div className="service-text">
                  <h3 className="fw-bold display-5 service-title mb-2 "><a href={service.link} className="text-white">{service.title}</a></h3>
                  <p className=" mb-0">{service.description}</p>
                </div>
              </div>
            </div>
            
            ))}
        </div>
        </div>
      
       
      </div>
    </section>
  );
};

export default NewSpecialize;
