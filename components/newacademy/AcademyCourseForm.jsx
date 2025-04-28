"use client"

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


const formFields = [
  { label: "Your Name", name: "name", required: true, type: "text", col: "6" },
  { label: "Your Email", name: "email", required: true, type: "email", col: "6" },
  { label: "Website", name: "website", required: false, type: "text", col: "12" },
  { label: "Your Comment...", name: "comment", required: false, type: "textarea", col: "12" },
];

const AcademyCourseForm = () => {

  const [isVerified, setIsVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setIsVerified(!!value); // If value is not null, captcha is completed
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!isVerified) {
  //     alert("Please verify that you're not a robot.");
  //     return;
  //   }
  //   // Proceed with form submission
  //   alert("Form submitted successfully!");
  // };

  return (
    <div className="cf-wrapper container my-5">
      <div className="cf-form p-5 rounded-4 text-white" style={{background:"#f5f6f621"}}>
        <h4 className="cf-title mb-2">Got Questions? Let’s Chat!</h4>
        <p className="cf-note mb-4">
        Fill out the form and get all the info you need to kickstart your digital marketing journey. We're here to help you level up and make your mark in the digital world!
        </p>
        <form>
          <div className="row">
            {formFields.map((field, index) => (
              <div className={`col-md-${field.col} mb-4`} key={index}>
                {field.type === "textarea" ? (
                  <textarea
                    className="form-control cf-input"
                    placeholder={field.label}
                    name={field.name}
                    required={field.required}
                    rows="4"
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    className="form-control cf-input"
                    placeholder={field.label + (field.required ? " *" : "")}
                    name={field.name}
                    required={field.required}
                  />
                )}
              </div>
            ))}
            <div className="col-12 d-flex align-items-center mb-4">
              <input type="checkbox" id="saveInfo" className="me-2" />
              <label htmlFor="saveInfo" className="cf-checkbox-label">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
              onChange={handleCaptchaChange}
            />
            <div className="col-12 mt-4">
              <button type="submit" className="cf-btn btn btn-light rounded-pill px-4 py-2">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AcademyCourseForm;
