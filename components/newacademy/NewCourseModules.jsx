import React from "react";


const NewCourseModules = ({courselist,title}) => {

  const length = courselist.length;
  
  return (
    <section className="services-section py-5 NewCourseModules mt-5 mb-5">
      <div className="container-fluid">
        <div className={`${length === 4 ? "col-11 mx-auto": "col-9 mx-auto"}`}>
        <div className="row gy-5 justify-content-center">
        <h2 className="section-title fw-bold font-48 text-center" dangerouslySetInnerHTML={{__html:title}}>
         
         {/* Lorem ipsum dolor sit amet <br />
         <span className="highlighted-text">eum neque commodi</span> */}
       </h2>
          {/* <div className="col-10">
            <div className="container-fluid">
              <div className="row "> */}
              {courselist.map((service, index) => (
                <div className={`${length === 4 ? "col-12 col-md-6 col-xl-3" : "col-12 col-md-6 col-xl-4"} mt-5 mt-lg-3`} key={index}>
                  <div className="service-box position-relative">
                    <span className="service-id">{service.id}</span>
                    <h4 className="service-title fw-bold font-30">{service.title}</h4>
                    <p className="service-desc">
                      <ul>
                        {service.description.map((item)=>(
                          <li>{item}</li>
                        ))}
                        
                      </ul>
                      </p>
                  </div>
                </div>
               ))}
              {/* </div>
            </div>
          </div> */}
         
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default NewCourseModules;
