import React from 'react';


const BannerList = ({services}) => {
  return (
    <section className="services-list-section BannerList mt-3">
    
      <div className="container-fluid rounded-lg mt-5" style={{background:"#1a43bf", padding:"40px 0" ,width:"95%",borderRadius:"30px"}}>
        <div className='row  px-0' >
        {services.map((service) => (
          <div className='col-lg-4 text-center wow fadeInDown'  data-wow-delay={service?.sec}>
          <h2 className=" mb-0 text-black fw-bold text-white mt-4 mt-lg-0 font-30" style={{fontSize:"30px"}}>{service.title} <br /> <span className='service-title-p' style={{fontSize:"18px", color:"#fed81a"}}>{service.description}</span>
              
              </h2>

              {/* {course && (
                <p className=" mb-0 text-black-50" dangerouslySetInnerHTML={{__html:course}}></p>
              )} */}
          </div>
        ))}
          
          
        </div>


        {/* <h6 className="text-black text-center mb-5">Our Services</h6> */}
        {/* {services.map((service) => (
          <div key={service.id} className="service-box d-flex justify-content-center align-items-center border-bottom ">
      

            <div className="service-content d-flex justify-content-center">
              <h2 className="service-title mb-0 text-black fw-bold">{service.title} <br /> <span className='service-title-p'>{service.description}</span>
              
              </h2>
             
              
              {course && (
                <p className="service-desc mb-0 text-black-50" dangerouslySetInnerHTML={{__html:course}}></p>
              )}
            </div>

           
          </div>

               
        ))} */}
      </div>
    </section>
  );
};

export default BannerList;
