import React from 'react';


const NewAboutHero = () => {
    return (
        <div className="container-fluid visually-appealing-section d-flex align-items-center">
            <div className='row justify-content-center mx-0 px-0'>
                <div className='col-10 col-lg-10 mx-0 px-0'>
                    <div className='container-fluid mx-0 px-0'>
                        <div className="row w-100 align-items-center mx-0 px-0">
                            <div className="col-lg-9 col-md-12 text-dark content-block">
                            
                                <h1 className="main-heading mb-4 ">
                                    We endeavor to craft visually appealing
                                    and intuitive websites tailored to the unique
                                    requirements of our users.
                                </h1>
                                {/* <h2 className="sub-heading mb-4">
                                    We work closely with clients to understand
                                    their goals, and unique challenges.
                                </h2>
                                <p className="description">
                                    Through our years of experience, we’ve also<br />
                                    learned that while each channel has its own set of<br />
                                    advantages, they all work best when strategically<br />
                                    paired with other channels.
                                </p> */}
                            </div>
                            <div className="col-lg-3 col-md-12 text-center">
                                <img src="/images/Home-Page/entre-2.png" alt="3D Spiral" className="spiral-img img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewAboutHero;
