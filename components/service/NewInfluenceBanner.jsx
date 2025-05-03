import React from 'react';

const services = [
  'POST', 'TWEET', 'REEL', 'SNAP',
  'VIDEO', 'REVIEW', 'STORY', 'SHOOT'
];

const BubbleServices = () => {
  return (
    <div className="bubble-wrapper">
      <h1 className="bubble-title">
        <span>Monetize Your Social Media Influence Today!</span><br />
        <span style={{fontSize:'2rem'}}> Join a Growing Community of Over 200,000 Influencers and</span><br />
        <span className="bubble-sub">Get Paid for Every</span>
      </h1>
      <div className="bubble-container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bubble bubble-${index}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BubbleServices;
