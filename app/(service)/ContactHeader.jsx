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
                    <h2 className="tp-heading mb-4">
                        Let’s Start Work Together. <br />
                        Get in Touch
                    </h2>

                    <button className="tp-cta-btn btn px-5 py-3 fw-semibold">
                        Get in Touch
                    </button>
                    </div>

                    {/* Right column ----------------------------------------------- */}
                    <div className="col-lg-6">
                    <p className="tp-lead mb-5">
                        Get in touch to discuss your employee wellbeing needs today.
                        Please give us a call, drop us an email.
                    </p>

                    <div className="row gy-4">
                        <div className="col-sm-6">
                        <h6 className="tp-label">ADDRESS:</h6>
                        <address className="mb-0">
                            27 Division St, New York,<br />
                            NY&nbsp;10002,&nbsp;USA
                        </address>
                        </div>

                        <div className="col-sm-6">
                        <h6 className="tp-label">PHONE:</h6>
                        <a href="tel:+1800123456789" className="tp-link">
                            +1&nbsp;800&nbsp;123&nbsp;456&nbsp;789
                        </a>
                        </div>

                        <div className="col-sm-6">
                        <h6 className="tp-label">WORKING&nbsp;HOURS:</h6>
                        <p className="mb-0">Mon – Fri: 9 am – 6 pm</p>
                        </div>

                        <div className="col-sm-6">
                        <h6 className="tp-label">IN&nbsp;SOCIALS:</h6>
                        <div className="d-flex gap-3 mt-2">
                            <i className="fab fa-facebook-f" />
                            <i className="fab fa-linkedin-in" />
                            <i className="fab fa-instagram" />
                            <i className="fab fa-twitter" />
                        </div>
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
