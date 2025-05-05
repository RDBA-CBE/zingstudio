import React from 'react';


const NewHowItWorks = ({HowItWorks,title}) => {
  
  return (
    <section className="container-fluid mt-5" style={{background:"#1a43bf", padding:"40px 0" }}>
    <div className=" rounded-lg pt-3 pb-5 " style={{width:"95%",margin:"auto"}} >
        <div>
            <h6 className="text-white text-center mb-4 font-50 fw-bold" style={{fontSize:"55px"}}>{title}</h6>
        </div>

        <div className='services-list-section BannerList'>
        
                


            
                {HowItWorks.map((service) => (
                <div key={service.id} className="service-box d-flex justify-content-center align-items-center border-bottom ">
            

                    <div className="service-content d-flex justify-content-center">
                    <h2 className="service-title mb-0 text-black fw-bold text-white font-48" dangerouslySetInnerHTML={{__html:service.title}}>
                    
                    </h2>
                    
                    
                    
                        <p className="service-desc mb-0 text-black-50">We match you with brands that align with your style, values, and audience for authentic collaborations.</p>
                    
                    </div>

                
                </div>

                    
                ))}
            </div>
        </div>
    
     
    </section>
  );
};

export default NewHowItWorks;
