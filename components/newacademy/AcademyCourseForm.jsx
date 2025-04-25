import React from "react";


const formFields = [
  { label: "Your Name", name: "name", required: true, type: "text", col: "6" },
  { label: "Your Email", name: "email", required: true, type: "email", col: "6" },
  { label: "Website", name: "website", required: false, type: "text", col: "12" },
  { label: "Your Comment...", name: "comment", required: false, type: "textarea", col: "12" },
];

const AcademyCourseForm = () => {
  return (
    <div className="cf-wrapper container my-5">
      <div className="cf-form p-5 rounded-4 text-white" style={{background:"#1a43bf"}}>
        <h4 className="cf-title mb-2">Leave a Reply</h4>
        <p className="cf-note mb-4">
          Your email address will not be published. Required fields are marked <span className="text-danger">*</span>
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
            <div className="col-12">
              <button type="submit" className="cf-btn btn btn-light rounded-pill px-4 py-2">
                Post Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AcademyCourseForm;
