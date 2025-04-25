import React from "react";

const pricingData = [
  {
    id: 1,
    title: "(Day 1-2)",
    price: "Orientation & Icebreaker",
    duration: "Per Week",
    features: [
      "Welcome session with an introduction to Zing Studio’s mission & goals",
      "Fun icebreaker activities & networking games",
      "Overview of the course structure, expectations, and outcomes",
      "Access to LMS (Learning Management System) and student portal"
    ],
    bgShape: "bubble1",
  },
  {
    id: 2,
    title: "(Week 1 - Ongoing)",
    price: "Module-Based Practical Learning",
    duration: "Per Week",
    features: [
      "Engaging video lessons, live masterclasses & hands-on workshops",
        "Real-world applications & industry insights",
        "Interactive Q&A sessions after every module",
    ],
    bgShape: "bubble2",
  },
  {
    id: 3,
    title: "(Every Weekend)",
    price: "Doubt Clearing & Weekly Q&A",
    duration: "Per Week",
    features: [
      "Dedicated live doubt-clearing sessions with mentors",
      "Discussion forums & peer-to-peer learning groups", 
    ],
    bgShape: "bubble3",
  },
  {
    id: 4,
    title: "(Mid-Course)",
    price: "Assignments & Case Studies",
    duration: "Per Week",
    features: [
      "Individual & group assignments with real-world scenarios",
        "Case studies on successful digital campaigns & business strategies", 
        "Feedback & improvement sessions"
    ],
    bgShape: "bubble3",
  },
  {
    id: 5,
    title: "",
    price: "Group Projects & Presentations",
    duration: "Per Week",
    features: [
      "Collaborative projects to apply learning",
        "Live presentations with expert feedback", 
        "Team-based problem-solving & innovation challenges"
    ],
    bgShape: "bubble3",
  },

  {
    id: 6,
    title: " ",
    price: "Guest Lectures & Industry Talks",
    duration: "Per Week",
    features: [
      "Sessions with industry leaders, influencers & successful entrepreneurs",
        "AMA (Ask Me Anything) sessions for deep insights", 
    ],
    bgShape: "bubble3",
  },
  {
    id: 7,
    title: " ",
    price: "Internship & Real-World Application",
    duration: "Per Week",
    features: [
     "Live internship opportunities for top students",
        "Shadowing real businesses & executing digital strategies", 
    ],
    bgShape: "bubble3",
  },
  {
    id: 8,
    title: " ",
    price: "Placement Assistance & Graduation",
    duration: "Per Week",
    features: [
     "Resume building & mock interviews",
        "Placement drives & networking events", 
        "Certification ceremony & alumni community access"
    ],
    bgShape: "bubble3",
  },
];

const NewStudentJourney = () => {
  return (
    <div className="pricing-section  text-white py-5 NewStudentJourney">
      <div className="container text-center">
        <h2 className="section-title fw-bold">
          Lorem ipsum dolor sit amet <br />
          <span className="highlighted-text">eum neque commodi</span>
        </h2>
        <div className="row justify-content-center mt-5">
          {pricingData.map((plan) => (
            <div
              className="col-12 col-md-6 col-lg-4 mb-4"
              key={plan.id}
            >
              <div className="pricing-card rounded-lg p-4 h-100 position-relative">
                {/* <div className="badge text-white fw-medium mb-3">{plan.duration}</div> */}
                <h3 className="price fw-bold display-5 mb-0">{plan.price}</h3>
                <p className="plan-title fw-semibold mt-1 mb-4">{plan.title}</p>
                <ul className="list-check mb-0 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                    {feature}
                    </li>
                  ))}
                </ul>
                {/* <button className="btn btn-light fw-bold px-4 py-2 rounded-pill">
                  Choose Pricing Plan
                </button> */}
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
