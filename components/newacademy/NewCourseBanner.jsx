import React from 'react';

const NewCourseBanner = ({serviceAbout}) => {
  return (
    <div className="container-fluid about-agency-section  " >
      <div className='row'>
        <div className='col-12 px-3 px-md-5  '>
        <div className='newacademy-banner  pb-5'>
      <div className="container">
        

        {/* Video Thumbnail Section */}
        <div className="row">
          <div className="col-12">
            <div className="about-agency-video-wrapper position-relative rounded overflow-hidden" style={{display:"flex", justifyContent:"center"}}>
              {/* <img src="/images/services/web-deisgn/banner-vd.mp4" alt="About Us" className="img-fluid w-100" /> */}
              <img  src={ serviceAbout?.src}
                            
                                className="rounded-5" style={{ width:"50%",objectFit:"cover", }} >   
                                </img>
              {/* <div className="about-agency-video-overlay d-flex flex-column justify-content-center align-items-center">
                <div className="about-agency-play-circle mb-3"></div>
                <h3 className="about-agency-video-title text-white fw-bold">
                  View More About Us
                </h3>
              </div> */}
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-5">

          
               {/* Left Content */}
          <div className="col-lg-6 text-black mb-4 mb-lg-0">
            <p className="about-agency-subtitle mb-2 text-white" dangerouslySetInnerHTML={{__html:serviceAbout?.subtitle}}></p>
            <h2 className="about-agency-title mb-3 text-white" dangerouslySetInnerHTML={{__html:serviceAbout?.title}}>
            
            </h2>
            <button className=" about-agency-btn fw-semibold px-4 py-3 rounded-pill mt-4" style={{fontSize:"16px"}}>
              About Company
            </button>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 text-black">
            <p className="about-agency-text mb-3 text-white" dangerouslySetInnerHTML={{__html:serviceAbout?.subDes}}>
           
            </p>
            <p className="about-agency-text text-white" dangerouslySetInnerHTML={{__html: serviceAbout?.descrip}}>
            
            </p>
          </div>
            </div>
          


      </div>
      </div>
        </div>
      </div>
     
    
    </div>
  );
};

export default NewCourseBanner;
