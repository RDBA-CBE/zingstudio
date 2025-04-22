import React from 'react';

const WhyMe = () => {
    return (
        <section className="service-section container-fluid text-dark py-5 new-why-me" >
            <div className='row justify-content-center px-3 px-md-5'>
                <div className='col-12 mx-0'>
                    <div className='container'>
                        <div className="row gx-5">
                            {/* Left Content */}
                            <div className="col-lg-4 text-center text-lg-start mb-5 mb-lg-0 d-flex flex-column justify-content-between">
                                <div className="service-intro">
                              
                                    <h2 className="service-title mt-3"> Lorem ipsum  <br />  dolorsit amet <br /> conse ctetur  </h2>
                                    <button className="btn service-button mt-4 "><a href="/services" className='text-white'>All Services</a></button>
                                </div>

                                <div >
                                    <img src="/images/elementbg/7.png" alt="" style={{width:"70%"}}/>
                                </div>
                            </div>

                            {/* Right Grid */}
                            <div className="col-lg-8 pt-3">
                                <div className="row gy-4">
                                    {[
                                        { number: '01', title: 'Two Decades of Experience' },
                                        { number: '02', title: 'Thorough in what I do' },
                                        { number: '03', title: 'Creative and Interesting' },
                                        { number: '04', title: 'Result Driven' },
                                        { number: '05', title: 'Cost Effective' },
                                        { number: '06', title: 'Ethical' },
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
