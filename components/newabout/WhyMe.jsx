import React from 'react';

const WhyMe = () => {
    return (
        <section className="service-section container-fluid text-white py-5" >
            <div className='row justify-content-center px-3 px-md-5'>
                <div className='col-12 mx-0'>
                    <div className='container'>
                        <div className="row gx-5">
                            {/* Left Content */}
                            <div className="col-lg-4 text-center text-lg-start mb-5 mb-lg-0">
                                <div className="service-intro">
                                    
                                    <h2 className="service-title mt-3">Giving Your <br />Business Some <br />Great Ideas</h2>
                                    <button className="btn service-button mt-4">All Services</button>
                                </div>
                            </div>

                            {/* Right Grid */}
                            <div className="col-lg-8">
                                <div className="row gy-4">
                                    {[
                                        { number: '01', title: 'UI/UX Experience' },
                                        { number: '02', title: 'Web Development' },
                                        { number: '03', title: 'Digital Marketing' },
                                        { number: '04', title: 'Product Design' },
                                        { number: '05', title: 'Branding & Illustration' },
                                        { number: '06', title: 'Mobile Solutions' },
                                    ].map((item, index) => (
                                        <div className="col-md-6" key={index}>
                                            <div className="service-box">
                                                <span className="service-number">{item.number}</span>
                                                <h5 className="service-name">{item.title}</h5>
                                                <p className="service-desc">
                                                    Our expertise, as well as our passion for web design, sets us apart from other agencies.
                                                    Plus, our experience demonstrates our ability.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default WhyMe;
