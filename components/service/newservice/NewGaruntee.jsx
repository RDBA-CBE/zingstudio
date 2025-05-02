import React from "react";

const NewGaruntee = ({Performance}) => {

  

  return (
    <section className="features-section py-5">
      <div className="container text-center">
        <p className="features-subtitle">{Performance.head}
        </p>
        <h2 className="features-title font-48" dangerouslySetInnerHTML={{__html:Performance.description}}>
        </h2>

        <div className="row align-items-center mt-5">
          {/* Left side features */}
          <div className="col-md-4 text-md-start text-center" >
            <div className="feature-item mb-5">
              <h5 className="feature-title font-30">{Performance?.guarantee[0]?.title}
              </h5>
              <p className="feature-desc">
              {Performance?.guarantee[0]?.caption}
              </p>
            </div>
            <div className="feature-item">
              <h5 className="feature-title font-30">{Performance?.guarantee[1]?.title}
              </h5>
              <p className="feature-desc">
              {Performance?.guarantee[1]?.caption}
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-md-4 text-center my-4 my-md-0">
            <img src={Performance?.src} alt={Performance?.head} className="feature-center-image" />
          </div>

          {/* Right side features */}
          <div className="col-md-4 text-md-end text-center">
            <div className="feature-item mb-5">
              <h5 className="feature-title font-30">{Performance?.guarantee[2]?.title}</h5>
              <p className="feature-desc">
              {Performance?.guarantee[2]?.caption}
              </p>
            </div>
            <div className="feature-item">
              <h5 className="feature-title font-30" dangerouslySetInnerHTML={{__html:Performance?.guarantee[3]?.title}}></h5>
              <p className="feature-desc">
              {Performance?.guarantee[3]?.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewGaruntee;
