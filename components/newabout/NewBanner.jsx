import React from 'react';



const NewBanner = () => {
  return (
    <section className="about-us-hero d-flex flex-column align-items-center justify-content-center text-center">
      <h1 className="about-us-title fw-bold">About Us</h1>
      <div className="breadcrumb text-white-50 mt-3">
        <span className="fw-semibold">Home</span>
        <span className="mx-2 text-white-50">{'>'}</span>
        <span className="text-white fw-semibold">About Us</span>
      </div>
    </section>
  );
};

export default NewBanner;
