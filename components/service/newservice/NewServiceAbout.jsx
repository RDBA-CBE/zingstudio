import React from 'react';

const NewServiceAbout = ({serviceAbout}) => {
  return (
    <div className="container-fluid about-agency-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 text-black mb-4 mb-lg-0">
            <p className="about-agency-subtitle mb-2" dangerouslySetInnerHTML={{__html:serviceAbout?.subtitle}}></p>
            <h2 className="about-agency-title mb-3 font-48" dangerouslySetInnerHTML={{__html:serviceAbout?.title}}>
            
            </h2>
            <a href="about">
            <button className="about-agency-btn fw-semibold px-4 py-3 rounded-pill mt-4" style={{fontSize:"16px"}}>
              About Company
            </button>
            </a>
            
          </div>

          {/* Right Content */}
          <div className="col-lg-6 text-black">
            <p className="about-agency-text mb-3">
           { serviceAbout?.descrip}
            </p>
            <p className="about-agency-text">
            { serviceAbout?.subDes}
            </p>
          </div>
        </div>

        {/* Video Thumbnail Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="about-agency-video-wrapper position-relative rounded overflow-hidden">
              {/* <img src="/images/services/web-deisgn/banner-vd.mp4" alt="About Us" className="img-fluid w-100" /> */}
              <video  src={ serviceAbout?.src}
                            loop autoPlay  muted
                                type="video/mp4"
                                className="rounded-5" style={{height:"100%", width:"100%",objectFit:"contain"}} >   
                                </video>
              {/* <div className="about-agency-video-overlay d-flex flex-column justify-content-center align-items-center">
                <div className="about-agency-play-circle mb-3"></div>
                <h3 className="about-agency-video-title text-white fw-bold">
                  View More About Us
                </h3>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewServiceAbout;
