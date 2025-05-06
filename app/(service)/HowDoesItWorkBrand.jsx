import React from 'react';


const HowDoesItWorkBrand = ({WhyChoose}) => {
  return (
    <section className="our-process-section  text-center">
        <div className='container-fluid'>
            <div className='row  px-3 px-lg-5 justify-content-center' >
                <div className='col-12 mx-0 px-0 py-5' style={{background:"linear-gradient(to right, #984674, #4c48d0)",borderRadius:"30px"}}>
                <div className="container" >
        <div className="row justify-content-center">
            <div className='text-center'>
            <h2 className='font-48 fw-bold text-white' style={{fontSize:"48px"}}>How does it work?</h2>
            
            </div>
        </div>

        <div className=' row justify-content-center mt-5'>
            {WhyChoose.map((item)=>(
                <div className="col-md-4 mb-4 our-process-box ">
                {/* <h2 className="our-process-number text-white">{item.id}</h2> */}
                <img src="/images/elementbg/2.png" alt="" style={{width:"100px"}}/>
                <h4 className="our-process-title text-white mt-2 font-30">{item.title} </h4>
                <p className="our-process-description text-white">
                {item.description}
                </p>
              </div>
            ))}
            
         
        </div>


        
        
        
      </div>
                </div>
            </div>
        </div>
      
    </section>
  );
};

export default HowDoesItWorkBrand;
