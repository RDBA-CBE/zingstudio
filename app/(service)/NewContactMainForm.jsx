import React from "react";


const NewContactMainForm = () =>  {
    return (
      <section className="cf-section container">
        <div className="cf-heading">
          <div className="cf-marker">
            <span className="cf-dot" />
            <div className="cf-line" />
          </div>
          <h2 className="cf-title">
            Let's Bring Your Vision <br className="cf-title-break" /> Into Reality
          </h2>
          <p className="cf-subtext">
            Your email address will not be published. Required fields are marked *
          </p>
        </div>
  
        <form className="cf-form-contact">
          <div className="cf-row">
            <input
              type="text"
              className="cf-input"
              placeholder="First Name *"
              required
            />
            <input
              type="tel"
              className="cf-input"
              placeholder="Phone *"
              required
            />
          </div>
          <div className="cf-row">
            <input
              type="email"
              className="cf-input"
              placeholder="Email *"
              required
            />
            <input
              type="file"
              className="cf-input cf-upload"
            />
          </div>
          <div className="cf-row">
            <textarea
              rows="4"
              className="cf-textarea"
              placeholder="Project Details *"
              required
            ></textarea>
          </div>
  
          <div className="cf-submit-wrapper mt-4">
            <button type="submit" className="cf-submit">
              Get a quote
            </button>
          </div>
        </form>
      </section>
    );
  };

export default NewContactMainForm;
