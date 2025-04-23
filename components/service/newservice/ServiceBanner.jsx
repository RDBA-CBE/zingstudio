import React from 'react';

import heroImage from './assets/hero-illustration.png'; // Make sure this path matches your asset location

const ServiceBanner = () => {
  return (
    <div className="container-fluid hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-white text-center text-lg-start mb-4 mb-lg-0">
            <p className="subheading mb-2">Our Mission: Your Online Triumph</p>
            <h1 className="hero-title">
              Transforming <br />
              <span className="highlight">Online Vision</span>
            </h1>
            <p className="hero-description mt-3 mb-4">
              Our Digital agency offers a wide array of services,
              tailored to the unique needs of each client.
            </p>
            <button className="btn btn-light fw-bold px-4 py-2 rounded-pill">
              Discuss a Project
            </button>
          </div>
          <div className="col-lg-6 text-center">
            <img src={heroImage} alt="Illustration" className="img-fluid hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
