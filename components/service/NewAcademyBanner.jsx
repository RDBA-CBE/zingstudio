import Link from 'next/link';
import React from 'react';


const NewAcademyBanner = () => {
  return (
    <div className="container-fluid newServiceBanner h-50 academyBan"  >
      <div className='row px-3 px-md-5'>
        <div className='col-12 m-0 p-0 hero-section' >
            <div className="container-fluid py-5">
              <div className='row justify-content-center'>
                <div className='col-11'>
                  <div className='container-fluid'>
                  <div className="row align-items-center justify-content-around py-5">
                  <div className="col-12 col-lg-6  text-white text-center text-lg-start mb-4 mb-lg-0" style={{zIndex:"100"}}>
                  
                    <h1 className="hero-title">
                    Power Up Your Skills, Power Up Your Career!

                    </h1>
                    <p className="subheading mb-2">Zing Academy – Master Digital Marketing with Industry Experts!</p>

                    <a className='p-0 w-auto m-auto rounded-pill mt-2 me-2' href="contact" style={{lineHeight:"1", border:"none"}}>
                  <button className="btn btn-light fw-bold  rounded-pill mt-3" style={{width:"auto", margin:"auto",padding:"15px 30px"}}>
                  Free Career Counselling
                    </button>
                  </a>

                    <a className='p-0 w-auto m-auto rounded-pill mt-2' href="contact" style={{lineHeight:"1", border:"none"}}>
                  <button className="btn btn-light fw-bold  rounded-pill mt-3 text-white" style={{width:"auto", margin:"auto",padding:"15px 30px",background:"none"}}>
                    Connect Us
                    </button>
                  </a>


                   
            
          
                  </div>
                  <div className="col-12 col-lg-6 col-xxl-4 text-center">
                    <img src="/images/Academy/banner/banner-vector-img.png" alt="Illustration" className="img-fluid hero-img" style={{height:"100%", width:"100%"}}/>
                    
                  </div>
                  </div>
                  <div className='row'>
                 
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default NewAcademyBanner;
