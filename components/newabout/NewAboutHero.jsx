import React from 'react';


const NewAboutHero = () => {
    return (
        <div className="container-fluid visually-appealing-section d-flex align-items-center">
            <div className='row justify-content-center mx-0 px-0'>
                <div className='col-10 col-lg-10 mx-0 px-0'>
                    <div className='container-fluid mx-0 px-0'>
                        <div className="row w-100 align-items-center mx-0 px-0">
                            <div className="col-lg-6 col-lg-12 text-dark content-block">
                            
                                <h1 className="main-heading mb-4 ">
                                    We endeavor to craft visually appealing
                                    and intuitive  
                                </h1>
                                {/* <h2 className="sub-heading mb-4">
                                    We work closely with clients to understand
                                    their goals, and unique challenges.
                                </h2>*/}
                                <p className="description text-dark mt-4">
                                    Through our years of experience, we’ve also<br />
                                    learned that while each channel has its own set of<br />
                                    
                                </p> 
                            </div>
                            <div className="col-lg-6 col-lg-12 h-100">
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
