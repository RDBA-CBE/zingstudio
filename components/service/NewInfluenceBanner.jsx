import React from 'react';



const BubbleServices = ({banner}) => {
  return (
    <div className="bubble-wrapper">
      <h1 className="bubble-title">
        <span className='font-48 fw-bold' style={{fontSize:"48px"}}>{banner?.title}</span><br />
        <span className='bubble-subtitle' >{banner?.subtitle}</span><br />
        <span className="bubble-sub">{banner?.desc}</span>
      </h1>
      <div className="bubble-container">
        {banner?.services?.map((service, index) => (
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
