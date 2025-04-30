import React from "react";


const NewStudentJourney = ({title,pricingData}) => {
  return (
    <div className="pricing-section  text-white py-5 NewStudentJourney">
      <div className="container text-center">
        <h2 className="section-title fw-bold font-48" dangerouslySetInnerHTML={{__html:title}}>
         
          {/* Lorem ipsum dolor sit amet <br />
          <span className="highlighted-text">eum neque commodi</span> */}
        </h2>
        <div className="row justify-content-center mt-5">
          {pricingData.map((plan) => (
            <div
              className="col-12 col-md-6 col-lg-4 mb-4"
              key={plan.id}
            >
              <div className="pricing-card rounded-lg p-4 h-100 position-relative">
                <div className="" 
                style={{
                  backgroundImage: `url(${plan.src})`, 
                  // backgroundImage : "url(https://wgl-dsites.net/odefy/wp-content/uploads/2024/03/unnamed.webp)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "230px auto",
                  zIndex: -100,
                  opacity: 1,
                }}
                ></div>
                {/* <div className="badge text-white fw-medium mb-3">{plan.duration}</div> */}
                <h3 className="price fw-bold display-5 mb-0 font-30" dangerouslySetInnerHTML={{__html:plan.price}}></h3>
                <p className="plan-title fw-semibold mt-1 mb-4">{plan.title}</p>
                <ul className="list-check mb-0 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                    {feature}
                    </li>
                  ))}
                </ul>
             
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewStudentJourney;
