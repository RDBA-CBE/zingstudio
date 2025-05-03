import Link from 'next/link';
import React from 'react';


const NewWhyChooseInfluence = ({title,WhyChoose}) => {
   
      
  return (
    <div className="container-fluid newServiceBanner h-50 academyBan zingfluence"   >
      <div className='row px-3 px-md-5'>
        <div className='col-12 m-0 p-0 hero-section' >
            <div className="container-fluid py-5">
              <div className='row justify-content-center'>
                <div className='col-11'>
                  <div className='container-fluid'>
                  <div className="row align-items-center justify-content-start py-5">
                  <div className="col-12 col-lg-6  text-white text-center text-lg-start mb-4 mb-lg-0" style={{zIndex:"100"}}>
                  
                    <h1 className="hero-title font-48 text-black" >
                    {title}
                    </h1>
                    {/* <p className="subheading mb-2 fw-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum, eligendi totam quis obcaecati facere deserunt error, recusandae quae dolorum animi. Explicabo officiis sit architecto sequi, quidem obcaecati accusantium tempora.</p> */}

                    {/* <a className='p-0 w-auto m-auto rounded-pill mt-2' href="contact" style={{lineHeight:"1", border:"none"}}>
                  <button className="btn btn-light fw-bold  rounded-pill mt-3" style={{width:"auto", margin:"auto",padding:"15px 30px"}}>
                  Get a quote
                    </button>
                  </a> */}

                    {WhyChoose.map((reason, index) => (
                        <div key={index} className="mt-4">
                          <h4 className="fw-bold text-black">{reason.title}</h4>
                          <p className="zingfluence-p">{reason.description}</p>
                        </div>
                      ))}
                 


                   
            
                
                  </div>
                 
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

export default NewWhyChooseInfluence;
