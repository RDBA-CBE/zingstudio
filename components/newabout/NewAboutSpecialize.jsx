import React from "react";


const services = [
  {
    id: "01",
    title: "Website Design",
    description: "Starting @ ₹ 15,000",
    image: "/images/Home-Page/development.png",
     link:"web-design-service"
  },
  {
    id: "02",
    title: "CMS Websites",
    description: "Starting @ ₹ 12,000",
    image: "/images/Home-Page/marketing.png",
     link:"web-design-service"
  },
  {
    id: "03",
    title: "Ecommerce",
    description: "Starting @ ₹ 50,000",
    image: "/images/Home-Page/graphic-design.png",
     link:"e-commerce-service"
  },
  {
    id: "04",
    title: "Digital Marketing",
    description: "Starting @ ₹ 50,000",
    image: "/images/Home-Page/graphic-design.png",
     link:"digital-marketing-service"
  },
  {
    id: "05",
    title: "Creative Design",
    description: "Starting @ ₹ 50,000",
    image: "/images/Home-Page/graphic-design.png",
     link:"web-design-service"
  },
];


const NewAboutSpecialize = () => {
  return (
    <section className="services-section text-white py-5 NewAboutSpecialize" style={{marginTop:"40px", background:"#1a43bf"}}>
      <div className="container-fluid">
        <div className="row justify-content-center">
        <div className="col-11 col-lg-10 col-xl-8">
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
              <div className="service-content d-flex align-items-start">
                {/* <div className="service-image-wrapper mt-0 mt-lg-4">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div> */}
                <div className="service-id text-white mx-3 mt-lg-4 mt-2 ">({service.id})</div>
                <div className="service-text">
                  <h3 className="fw-bold display-5 service-title mb-2 "><a href={service.link} className="text-white">{service.title}</a></h3>
                  {/* <p className=" mb-0">{service.description}</p> */}
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

export default NewAboutSpecialize;
