import React from 'react';

const services = [
  'Product Design', 'SEO', 'Motion Design', 'Digital Marketing', 'UI/UX Design',
  'Illustrations', 'Data Analysis', 'Branding', 'Mobile Development',
  'E-commerce Solutions', 'Web Development', 'Email Marketing', 'Content Marketing', 'SMM'
];

const BubbleServices = () => {
  return (
    <div className="bubble-wrapper">
      <h1 className="bubble-title">
        <span>We Can Help</span><br />
        <span className="bubble-sub">You with...</span>
      </h1>
      <div className="bubble-container">
        {services.map((service, index) => (
          <div key={index} className={`bubble bubble-${index}`}>
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BubbleServices;
