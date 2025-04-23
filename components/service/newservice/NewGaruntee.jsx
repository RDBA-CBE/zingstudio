import React from "react";

const NewGaruntee = () => {
  return (
    <section className="features-section py-5">
      <div className="container text-center">
        <p className="features-subtitle">Our Features</p>
        <h2 className="features-title">
          We Specialize in Crafting <br />
          Digital Experiences and Solutions <br />
          for Businesses
        </h2>

        <div className="row align-items-center mt-5">
          {/* Left side features */}
          <div className="col-md-4 text-md-start text-center" >
            <div className="feature-item mb-5">
              <h5 className="feature-title">Digital Mastery</h5>
              <p className="feature-desc">
                With a deep understanding of online platforms, emerging technologies, and shifting consumer behaviors.
              </p>
            </div>
            <div className="feature-item">
              <h5 className="feature-title">Strategic Prowess</h5>
              <p className="feature-desc">
                They delve into market research and audience insights, helping clients refine their digital strategies.
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
              <h5 className="feature-title">Partners in Success</h5>
              <p className="feature-desc">
                Digital agencies are not just service providers; they're partners in their clients' success stories.
              </p>
            </div>
            <div className="feature-item">
              <h5 className="feature-title">Design Excellence</h5>
              <p className="feature-desc">
                Their creative teams sculpt eye-catching, user-friendly websites and digital assets that leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewGaruntee;
