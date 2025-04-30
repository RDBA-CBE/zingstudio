import React from 'react';


const NewAboutHero = () => {
    return (
        <div className="container-fluid visually-appealing-section d-flex align-items-center">
            <div className='row justify-content-center mx-0 px-0'>
                <div className='col-10 col-lg-10 mx-0 px-0'>
                    <div className='container-fluid mx-0 px-0'>
                        <div className="row w-100 align-items-center mx-0 px-0">
                            <div className="col-12 col-lg-6 text-dark content-block">
                            
                                <h1 className="main-heading mb-4 font-48">
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                </h1>
                                {/* <h2 className="sub-heading mb-4">
                                    We work closely with clients to understand
                                    their goals, and unique challenges.
                                </h2>*/}
                                <p className="description text-dark mt-4">
                                New Age Digital Design, Development and Digital Marketing agency based in coimbatore, India.
                                I Works across globe.
                                    
                                </p> 
                            </div>
                            <div className=" col-12 col-lg-6 h-100">
                                <img src="/images/about-us/Infographics-01.png" alt="3D Spiral" className="spiral-img img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewAboutHero;
