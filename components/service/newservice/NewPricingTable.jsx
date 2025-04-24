import React from 'react';

const NewPricingTable = () => {
  return (
    <div className=" container-fluid bg-white">

        <div className='row px-3 px-md-5'>
            <div className='col-12 mx-0 pricing-wrapper'>
                <div className='container'>
                <div className="row justify-content-center gx-5">
        <div className="col-12 text-center mb-5">
          <h2 className="pricing-heading">Choose the Plan That <br /> Works for You</h2>
        </div>

        {/* Standard Plan */}
        <div className="col-md-4 mb-4">
          <div className="pricing-card ultra-plan p-4 py-5">
            <p className="plan-duration">Static Website Design</p>
            {/* <h3 className="plan-price">$499 <span className="plan-name">Standard <br /> Plan</span></h3> */}
            <h3 className="plan-price">
                <span className="dollar-symbol">₹</span>
                <span className="price-amount">15,000</span>
                <span className="plan-name">Premium <br /> Plan</span>  
            </h3>
            <ul className="plan-features ">
              <li>10 Page Static Website Design </li>
              <li>SEO Ready Website</li>
              <li>100% Mobile Friendly Website</li>
              <li>Quick Enquiry Form</li>
              <li>Map Listing & Social Media Integration</li>
              <li>Stock Images</li>
              <li>1st Year Hosting/SSL & Domain Free</li>
              <li>1 Revision</li>
            </ul>
            <button className=" rounded-pill choose-button ">Choose Pricing Plan</button>
          </div>
        </div>

       
        {/* <div className="col-md-4 mb-4">
          <div className="pricing-card premium-plan p-4">
            <p className="plan-duration">Per Week</p>
            
            <h3 className="plan-price">
                <span className="dollar-symbol">$</span>
                <span className="price-amount">30,000</span>
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
        </div> */}

        {/* Premium Plan */}
        <div className="col-md-4 mb-4">
          <div className="pricing-card ultra-plan p-4 py-5">
            <p className="plan-duration">CMS Website Design</p>
            {/* <h3 className="plan-price">$899 <span className="plan-name">Premium <br /> Plan</span></h3> */}
            <h3 className="plan-price">
                <span className="dollar-symbol">₹</span>
                <span className="price-amount">30,000</span>
                <span className="plan-name">Premium <br /> Plan</span>  
            </h3>
            <ul className="plan-features ">
            <li>10 Page Static Website Design </li>
              <li>SEO Ready Website</li>
              <li>100% Mobile Friendly Website</li>
              <li>Quick Enquiry Form</li>
              <li>Map Listing & Social Media Integration</li>
              <li>Stock Images</li>
              <li>1st Year Hosting/SSL & Domain Free</li>
              <li>1 Revision</li>
            </ul>
            <button className="rounded-pill choose-button">Choose Pricing Plan</button>
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