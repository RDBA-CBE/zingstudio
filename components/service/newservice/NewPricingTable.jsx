import React from 'react';



const NewPricingTable = ({pricingPlans ,title}) => {
  return (
    <div className="container-fluid bg-white serviceprice">
      <div className="row px-3 px-md-5">
        <div className="col-12 mx-0 pricing-wrapper">
          <div className="container">
            <div className="row justify-content-center gx-5">
              <div className="col-12 text-center mb-5">
                <h2 className="pricing-heading" dangerouslySetInnerHTML={{__html:title}}>
                  {/* Choose the Plan That <br /> Works for You */}
                
                </h2>
              </div>

              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="col-12 col-lg-6 col-xl-5 col-xxl-4 mb-4"
                >
                  <div className="pricing-card ultra-plan p-4 py-5">
                    <p className="plan-duration">{plan.title}</p>
                    <h3 className="plan-price">
                      <span className="dollar-symbol">₹</span>
                      <span className="price-amount">{plan.price}</span>
                      <span className="plan-name">
                        Start <br /> From
                      </span>
                    </h3>
                    <ul className="plan-features">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <button className="rounded-pill choose-button">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPricingTable;
