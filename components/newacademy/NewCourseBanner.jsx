import React from 'react';

const NewCourseBanner = ({serviceAbout,bannerContent}) => {
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
                            
                                className="rounded-5" style={{ width:"40%",objectFit:"cover", }} >   
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

        <div className="row align-items-center mt-5" >

          
               {/* Left Content */}
          <div className="col-lg-6 text-black mb-4 mb-lg-0">
            <p className="about-agency-subtitle mb-2 text-white" dangerouslySetInnerHTML={{__html:serviceAbout?.subtitle}}></p>
            <h2 className="about-agency-title mb-3 text-white" dangerouslySetInnerHTML={{__html:serviceAbout?.title}}>
            
            </h2>
            <p className='text-white about-agency-p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae sapiente dolor cum vel tempora modi doloribus laborum voluptatum.
              </p>
           <a href="about"> <button className=" about-agency-btn fw-semibold px-4 py-3 rounded-pill mt-4" style={{fontSize:"16px"}}>
              About Company
            </button>
            </a>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 text-black">
            <p className="about-agency-text-des mb-3 text-white" dangerouslySetInnerHTML={{__html:serviceAbout?.subDes}}>
           
            </p>
            
            <ul className='list-unstyled'>
              {serviceAbout?.list.map((li)=>(
                <li className='about-agency-text text-white wow fadeInLeft'  data-wow-delay={li?.sec} >
                <span className="arrow-line"></span>
                <span className="arrow-symbol">→</span>
                {li?.item}
                </li>
              ))}
              
            
            </ul>
            {/* <p className="about-agency-text text-white" dangerouslySetInnerHTML={{__html: serviceAbout?.descrip}}> */}
            
            {/* </p> */}
          </div>
            </div>

            <div className='row mt-5'>
                  
                  <div className="hiw-stats w-100" style={{ margin:"auto",marginBottom:"5px",gap:"60px"}}>
                  {bannerContent?.list.map((list,index)=>(
                     <div className='d-flex align-items-center justify-content-between'>
                        <div className="icon-xl  m-b20 ">
                            <img src={list.src} alt="" style={{width:"100px",height:"100px"}}/>
                        </div>
                        <p className='text-start mx-3 pe-4 pe-md-0 ' dangerouslySetInnerHTML={{__html:list.item}} style={{marginTop:list?.top}}></p>
                      </div>
                  ))}
                     
                      
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
