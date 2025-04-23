import React from 'react';



const ServiceBanner = () => {
  return (
    <div className="container-fluid ">
      <div className='row px-3 px-md-5 '>
        <div className='col-12 m-0 p-0 hero-section'>
            <div className="container py-5">
                <div className="row align-items-center py-5">
                  <div className="col-lg-6 text-white text-center text-lg-start mb-4 mb-lg-0">
                    <p className="subheading mb-2">Our Mission: Your Online Triumph</p>
                    <h1 className="hero-title">
                      Transforming <br />
                      <span className="highlight">Online Vision</span>
                    </h1>
                    <p className="hero-description mt-3 mb-4">
                      Our Digital agency offers a wide array of services,
                      tailored to the unique needs of each client.
                    </p>
                    <button className="btn btn-light fw-bold px-4 py-2 rounded-pill">
                      Discuss a Project
                    </button>
                  </div>
                  <div className="col-lg-6 text-center">
                    {/* <img src="/images/services/web-deisgn/vector-img.png" alt="Illustration" className="img-fluid hero-img" style={{height:"100%", width:"70%"}}/> */}
                    <video  src="/images/services/web-deisgn/banner-vd.mp4"
                            loop autoPlay  muted
                                type="video/mp4"
                                className="rounded-5" style={{height:"100%", width:"100%",objectFit:"contain"}} >   
                                </video>
                  </div>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceBanner;
