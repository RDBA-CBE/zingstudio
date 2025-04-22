import React from "react";


const services = [
  {
    id: "01",
    title: "Website Design",
    description: "Starting @ ₹ 15,000",
    image: "/images/Home-Page/development.png",
  },
  {
    id: "02",
    title: "CMS Websites",
    description: "Starting @ ₹ 12,000",
    image: "/images/Home-Page/marketing.png",
  },
  {
    id: "03",
    title: "Ecommerce",
    description: "Starting @ ₹ 50,000",
    image: "/images/Home-Page/graphic-design.png",
  },
  {
    id: "04",
    title: "Digital Marketing",
    description: "Starting @ ₹ 50,000",
    image: "/images/Home-Page/graphic-design.png",
  },
  {
    id: "05",
    title: "Creative Design",
    description: "Starting @ ₹ 50,000",
    image: "/images/Home-Page/graphic-design.png",
  },
];


const NewAboutSpecialize = () => {
  return (
    <section className="services-section text-white py-5 NewAboutSpecialize" style={{marginTop:"40px", background:"#1a43bf"}}>
      <div className="container-fluid">
        <div className="row justify-content-center">
        <div className="col-11 col-md-10 col-lg-8">
            <div className="d-flex justify-content-between align-items-center  flex-wrap">
              <div>
                <h2 className="section-title  mb-1 mb-3 mb-md-5">
                Solving Design Problems at<br className="d-none d-md-block"/> a Race Car Speed
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
                  <h3 className="fw-bold display-5 service-title mb-2 ">{service.title}</h3>
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
