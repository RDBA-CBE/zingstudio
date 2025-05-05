import React from 'react';



const BubbleServices = ({banner}) => {
  return (
    <div className="bubble-wrapper">
      <h1 className="bubble-title">
        <span className='font-60 fw-bold' style={{fontSize:"60px"}} dangerouslySetInnerHTML={{__html:banner?.title}}></span><br />
        <span className='bubble-subtitle font-30' dangerouslySetInnerHTML={{__html:banner?.subtitle}} style={{fontSize:"30px"}}></span><br />
        <span className="bubble-sub font-22">{banner?.desc}</span>
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
