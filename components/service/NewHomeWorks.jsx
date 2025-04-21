import React from "react";


const NewHomeWorks = () => {
  return (
    <section className="digital-works-section container-fluid py-5 NewSpecialize">
      <div className="row justify-content-center">
        <div className="col-11">
          <div className="container-fluid">
          <div className="row m-0">
        <div className="col-lg-5 col-md-12 text-section mb-4">
          <h2 className="heading-digital">
            Our Digital <span className="highlight-works ">Works.</span>
          </h2>
          <p className="subtext-digital">
            They delve into market research and audience insights, helping clients refine their digital strategies.
          </p>
          <button className="btn btn-dark mt-3  service-btn">View All Projects</button>
          <div className="illustration mt-4">
            <img
              src="/images/Home-Page/WorksIDid-New.png"
              alt="Illustration"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="col-lg-7 col-md-12">
          <div className="row g-5">
            {[
              {
                title: "Art of Graphic",
                img: "/images/Home-Page/our-work/Mockup-2.jpg",
               
              },
              {
                title: "Product Design",
                img: "/images/Home-Page/our-work/Mockup-3.jpg",
                 top:"100px"
              },
              {
                title: "Motion Integration",
                img: "/images/Home-Page/our-work/Mockup-4.jpg",
                 top:"0px"
              },
              {
                title: "App for Watch",
                img: "/images/Home-Page/our-work/Mockup-5.jpg",
                 top:"50px"
              },
            ].map((item, index) => (
              <div className="col-sm-6 work-card-slider" key={index} style={{marginTop: item.top}}>
                <div className="work-card">
                  <img src={item.img} alt={item.title} className="img-fluid rounded-4" />
                  <p className="category-label mt-2 text-uppercase small mb-0" style={{fontSize:"14px"}}>Case Study / Showcase</p>
                  <h6 className="work-title">{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default NewHomeWorks;
