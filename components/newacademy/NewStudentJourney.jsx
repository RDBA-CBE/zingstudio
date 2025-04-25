import React from "react";

const pricingData = [
  {
    id: 1,
    title: "Standard Plan",
    price: 499,
    duration: "Per Week",
    features: [
      "Website Design",
      "Development",
      "Content Creation",
      "Graphic Design",
      "Data Analysis",
    ],
    bgShape: "bubble1",
  },
  {
    id: 2,
    title: "Ultra Plan",
    price: 699,
    duration: "Per Week",
    features: [
      "Website Design",
      "Development",
      "Content Creation",
      "Graphic Design",
      "Data Analysis",
    ],
    bgShape: "bubble2",
  },
  {
    id: 3,
    title: "Premium Plan",
    price: 899,
    duration: "Per Week",
    features: [
      "Website Design",
      "Development",
      "Content Creation",
      "Graphic Design",
      "Data Analysis",
    ],
    bgShape: "bubble3",
  },
];

const NewStudentJourney = () => {
  return (
    <div className="pricing-section bg-dark text-white py-5">
      <div className="container text-center">
        <h2 className="section-title fw-bold">
          Choose the Plan That <br />
          <span className="highlighted-text">Works for You</span>
        </h2>
        <div className="row justify-content-center mt-5">
          {pricingData.map((plan) => (
            <div
              className="col-md-4 mb-4"
              key={plan.id}
            >
              <div className="pricing-card rounded-4 p-4 h-100 position-relative">
                <div className="badge text-white fw-medium mb-3">{plan.duration}</div>
                <h3 className="price fw-bold display-5 mb-0">${plan.price}</h3>
                <p className="plan-title fw-semibold mt-1 mb-4">{plan.title}</p>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-check-circle-fill me-2"></i> {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-light fw-bold px-4 py-2 rounded-pill">
                  Choose Pricing Plan
                </button>
                <div className={`shape-bg ${plan.bgShape}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewStudentJourney;
