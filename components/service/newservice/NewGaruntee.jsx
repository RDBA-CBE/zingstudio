import React from "react";

const NewGaruntee = () => {
  return (
    <section className="features-section py-5">
      <div className="container text-center">
        <p className="features-subtitle">Design Excellence
        </p>
        <h2 className="features-title">
        Every Web Design <br /> plan includes
        </h2>

        <div className="row align-items-center mt-5">
          {/* Left side features */}
          <div className="col-md-4 text-md-start text-center" >
            <div className="feature-item mb-5">
              <h5 className="feature-title">Responsive Design
              </h5>
              <p className="feature-desc">
              Seamless experience across all devices.
              </p>
            </div>
            <div className="feature-item">
              <h5 className="feature-title">User-Centric Interface 
              </h5>
              <p className="feature-desc">
              Engaging, intuitive, and easy to navigate.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-md-4 text-center my-4 my-md-0">
            <img src="/images/services/web-deisgn/vector-img.png" alt="Digital Person" className="feature-center-image" />
          </div>

          {/* Right side features */}
          <div className="col-md-4 text-md-end text-center">
            <div className="feature-item mb-5">
              <h5 className="feature-title">SEO-Optimized</h5>
              <p className="feature-desc">
              Designed to rank higher on search engines.
              </p>
            </div>
            <div className="feature-item">
              <h5 className="feature-title">Custom Solutions</h5>
              <p className="feature-desc">
              Tailored to reflect brand identity and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewGaruntee;
