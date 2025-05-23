// src/components/TouchPanel.jsx
import React from "react";

const ContactHeader = () => (
  <section className="tp-wrap d-flex align-items-center">
    <div className="container-fluid">
        {/* <div className="row px-3 px-lg-5">
            <div className="col-12 mx-0 px-0"> */}
                <div className="container">
                <div className="row g-5">
        {/* Left column ------------------------------------------------ */}
                    <div className="col-lg-6">
                    <h2 className="tp-heading mb-4 font-48" style={{fontSize:"48px"}}>
                        Let’s Start Work Together. <br />
                        Get in Touch
                    </h2>

                    <a href="#newcontact">
                    <button className="tp-cta-btn btn fw-semibold" style={{padding:"15px 30px"}}>
                        Get in Touch
                    </button>
                    </a>
                   
                    </div>

                    {/* Right column ----------------------------------------------- */}
                    <div className="col-lg-6">
                    <p className="tp-lead mb-5">
                        Get in touch to discuss your employee wellbeing needs today.
                        Please give us a call, drop us an email.
                    </p>

                    <div className="row gy-4">
                        <div className="col-sm-6">
                        <h6 className="tp-label  fw-bold">ADDRESS:</h6>
                        <address className="mb-0" style={{fontSize:"16px"}}>
                        5A-1, 4th Street, Chinthamani Nagar, K.K.Pudur, Saibaba Colony,<br />Coimbatore – 641 038.<br/>Tamil Nadu, India.
                        </address>
                        </div>

                        <div className="col-sm-6">
                        <h6 className="tp-label fw-bold text-black">PHONE:</h6>
                        <a href="tel:+91(422)4980307"  className="tp-link"  style={{fontSize:"16px",color:"#000"}}>
                        04224379826
                        </a>
                        

                        

                        
                        <h6 className="tp-label mt-3  fw-bold text-black">EMAIL:</h6>
                        <a href="mailto:support@zingstudio.in"  style={{fontSize:"16px",color:"#000"}}>support@zingstudio.in</a>
                        </div>
                       
                    </div>
                    </div>
                </div>
                </div>
            {/* </div>
        </div> */}
     
    </div>
  </section>
);

export default ContactHeader;
