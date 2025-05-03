import React from 'react';


const NewHowItWorks = () => {
    const services = [
        { id: '001', title: 'Right Brands ', 
            description: '3 Months + 3 Months Internship', sec:"0.2s" },
        { id: '002', title: 'Plan & Collaborate',
             description: '₹25,000',sec:"0.4s" },
        {
          id: '003',
          title: 'Create & Share',
          description:
            '31/05/2025',
            sec:"0.6s"
        },
        { id: '002', title: 'Measure & Grow',
             description: '₹25,000',sec:"0.4s" },
        
      ];
  return (
    <section className="container-fluid mt-5" style={{background:"#1a43bf", padding:"40px 0" }}>
    <div className=" rounded-lg pt-3 pb-5 " style={{width:"95%",margin:"auto"}} >
        <div>
            <h6 className="text-white text-center mb-5 font-48 fw-bold" style={{fontSize:"48px"}}>How Does It Work ?</h6>
        </div>

        <div className='services-list-section BannerList'>
        
                


            
                {services.map((service) => (
                <div key={service.id} className="service-box d-flex justify-content-center align-items-center border-bottom ">
            

                    <div className="service-content d-flex justify-content-center">
                    <h2 className="service-title mb-0 text-black fw-bold text-white" dangerouslySetInnerHTML={{__html:service.title}}>
                    
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
