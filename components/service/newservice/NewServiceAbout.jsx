import React from 'react';


const NewServiceAbout = () => {
  return (
    <div className="container-fluid about-agency-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 text-black mb-4 mb-lg-0">
            <p className="about-agency-subtitle mb-2">About Agency</p>
            <h2 className="about-agency-title mb-3">
              Your Digital Success<br />Starts Here
            </h2>
            <button className="btn btn-primary about-agency-btn fw-semibold px-4 py-2 rounded-pill">
              About Company
            </button>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 text-black">
            <p className="about-agency-text mb-3">
              This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.
            </p>
            <p className="about-agency-text">
              Through our years of experience, we’ve also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels.
            </p>
          </div>
        </div>

        {/* Video Thumbnail Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="about-agency-video-wrapper position-relative rounded overflow-hidden">
              {/* <img src="/images/services/web-deisgn/banner-vd.mp4" alt="About Us" className="img-fluid w-100" /> */}
              <video  src="/images/services/web-deisgn/banner-vd.mp4"
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
