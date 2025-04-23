import React from 'react';

const NewPricingTable = () => {
  return (
    <div className=" container-fluid bg-white">

        <div className='row px-3 px-md-5'>
            <div className='col-12 mx-0 pricing-wrapper'>
                <div className='container'>
                <div className="row justify-content-center">
        <div className="col-12 text-center mb-5">
          <h2 className="pricing-heading">Choose the Plan That <br /> Works for You</h2>
        </div>

        {/* Standard Plan */}
        <div className="col-md-4 mb-4">
          <div className="pricing-card standard-plan p-4">
            <p className="plan-duration">Per Week</p>
            {/* <h3 className="plan-price">$499 <span className="plan-name">Standard <br /> Plan</span></h3> */}
            <h3 className="plan-price">
                <span className="dollar-symbol">$</span>
                <span className="price-amount">899</span>
                <span className="plan-name">Premium <br /> Plan</span>  
            </h3>
            <ul className="plan-features ">
              <li>Website Design</li>
              <li>Development</li>
              <li>Content Creation</li>
              <li>Graphic Design</li>
              <li>Data Analysis</li>
            </ul>
            <button className="btn btn-dark w-80 rounded-pill choose-button">Choose Pricing Plan</button>
          </div>
        </div>

        {/* Ultra Plan */}
        <div className="col-md-4 mb-4">
          <div className="pricing-card ultra-plan p-4">
            <p className="plan-duration">Per Week</p>
            {/* <h3 className="plan-price text-purple">$699 <span className="plan-name">Ultra <br /> Plan</span></h3> */}
            <h3 className="plan-price">
                <span className="dollar-symbol">$</span>
                <span className="price-amount">899</span>
                <span className="plan-name">Premium <br /> Plan</span>  
            </h3>
            <ul className="plan-features ">
              <li>Website Design</li>
              <li>Development</li>
              <li>Content Creation</li>
              <li>Graphic Design</li>
              <li>Data Analysis</li>
            </ul>
            <button className="btn btn-dark w-80 rounded-pill choose-button">Choose Pricing Plan</button>
        
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col-md-4 mb-4">
          <div className="pricing-card premium-plan p-4">
            <p className="plan-duration">Per Week</p>
            {/* <h3 className="plan-price">$899 <span className="plan-name">Premium <br /> Plan</span></h3> */}
            <h3 className="plan-price">
                <span className="dollar-symbol">$</span>
                <span className="price-amount">899</span>
                <span className="plan-name">Premium <br /> Plan</span>  
            </h3>
            <ul className="plan-features ">
              <li>Website Design</li>
              <li>Development</li>
              <li>Content Creation</li>
              <li>Graphic Design</li>
              <li>Data Analysis</li>
            </ul>
            <button className="btn btn-dark w-80 rounded-pill choose-button">Choose Pricing Plan</button>
          </div>
        </div>
      </div>
                </div>
            </div>
        </div>
     
    </div>
  );
};

export default NewPricingTable;