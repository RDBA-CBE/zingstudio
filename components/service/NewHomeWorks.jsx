import React from "react";


const NewHomeWorks = () => {
  return (
    <section className="digital-works-section container-fluid py-5 NewSpecialize">
      <div className="row justify-content-center px-3 px-md-5">
        <div className="col-12 mx-0">
          <div className="container-fluid">
          <div className="row m-0 ">
        <div className="col-lg-5 col-md-12 text-section mb-4">
          {/* <h2 className="heading-digital">
            Our Digital <span className="highlight-works ">Works.</span>
          </h2> */}
          <div class="headline">
            <span class="black-text">Our Digital</span><br/>
            <span class="gradient-text">Works.</span>
          </div>
          <p className="subtext-digital">
            They delve into market research and audience insights, helping clients refine their digital strategies.
          </p>
          <button className="btn btn-dark mt-3  service-btn text-black" style={{fontWeight:700}}>View All Projects</button>
          <div className="illustration mt-4">
            <img
              src="/images/Home-Page/WorksIDid-New.png"
              alt="Illustration"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="col-lg-7 col-md-12">
          <div className="row gx-5">
            {[
              {
                title: "Magnum Spinning Millss",
                img: "/images/Home-Page/our-work/Mockup-2.jpg",
               
              },
              {
                title: "Shree Sudharsan Engineering",
                img: "/images/Home-Page/our-work/Mockup-3.jpg",
                 top:"100px"
              },
              {
                title: "GMAK Fiber Laser",
                img: "/images/Home-Page/our-work/Mockup-4.jpg",
                 top:"0px"
              },
              {
                title: "Motherland Textiles",
                img: "/images/Home-Page/our-work/Mockup-5.jpg",
                 top:"50px"
              },
            ].map((item, index) => (
              <div className="col-sm-6 work-card-slider pe-0 ps-0 ps-md-4" key={index} style={{marginTop: item.top}}>
                <div className="work-card">
                  <img src={item.img} alt={item.title} className="img-fluid rounded-4" />
                  <p className="category-label mt-2 text-uppercase small mb-0" style={{fontSize:"14px"}}>Service</p>
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
