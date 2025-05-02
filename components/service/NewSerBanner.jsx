import Link from 'next/link';
import React from 'react';


const NewSerBanner = () => {
  return (
    <div className="container-fluid newServiceBanner h-50"  >
      <div className='row px-3 px-md-5'>
        <div className='col-12 m-0 p-0 hero-section' >
            <div className="container-fluid py-5">
              <div className='row justify-content-center'>
                <div className='col-11'>
                  <div className='container-fluid'>
                  <div className="row align-items-center justify-content-around py-5">
                  <div className="col-12 col-lg-6  text-white text-center text-lg-start mb-4 mb-lg-0" style={{zIndex:"100"}}>
                  
                    <h1 className="hero-title">
                   Service
                    </h1>
                    <p className="subheading mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum, eligendi totam quis obcaecati facere deserunt error, recusandae quae dolorum animi. Explicabo officiis sit architecto sequi, quidem obcaecati accusantium tempora.</p>

                    <a className='p-0 w-auto m-auto rounded-pill mt-2' href="contact" style={{lineHeight:"1", border:"none"}}>
                  <button className="btn btn-light fw-bold  rounded-pill mt-3" style={{width:"auto", margin:"auto",padding:"15px 30px"}}>
                  Get a quote
                    </button>
                  </a>


                   
            
                    {/* <button className="btn btn-light fw-bold px-4 py-2 rounded-pill">
                      Get a quote
                    </button> */}
                  </div>
                  <div className="col-12 col-lg-6 col-xxl-4 text-center">
                    <img src="/images/services/web-deisgn/vector-img.png" alt="Illustration" className="img-fluid hero-img" style={{height:"100%", width:"70%"}}/>
                    {/* <video  src={bannerContent?.src}
                            loop autoPlay  muted
                                type="video/mp4"
                                className="rounded-5" style={{height:"100%", width:"100%",objectFit:"contain"}} >   
                                </video> */}
                  </div>
                  </div>
                  <div className='row'>
                  {/* <div className='text-center'>
                    <p className='hero-subdes-text'>{bannerContent?.listTitle}
                    </p>
                  </div> */}

                  {/* <div className="hiw-stats" style={{borderBottom:"1px solid #b1aeae7d", width:"auto",margin:"auto",marginBottom:"5px"}}>
                  {bannerContent?.list.map((list,index)=>(
                     <div className='d-flex align-items-center justify-content-center'>
                        <div className="icon-xl  m-b20 ">
                            <img src={list.src} alt="" />
                        </div>
                        <p className='text-start mx-3 pe-4 pe-md-0 ' dangerouslySetInnerHTML={{__html:list.item}}></p>
                      </div>
                  ))}
                     
                      
                  </div> */}

                  {/* <div className='text-center mt-2'>
                    <p className='hero-des-text'>{bannerContent.description}
                    </p>
                  </div> */}

                  {/* <Link href="contact" style={{width:"auto", margin:"auto"}} > */}
                  
                  
                    {/* </Link> */}
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

export default NewSerBanner;
