"use client"

import React from 'react';
import { useState } from 'react';
import AcademyCourseForm from '../newacademy/AcademyCourseForm';



const AcademyFAQ = ({faqData}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section >
      <div className='container-fluid'>
        <div className='row px-3 px-md-5'>
          <div className='col-12 mx-0 faq-section'>
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-12 col-lg-5 text-white mb-4 d-flex flex-column justify-content-between">
                  <div>
                  <h2 className="faq-heading pt-4 font-48">Explore Frequently<br />Asked Questions</h2>
                  <a href="contact">
                  <button className="faq-btn">Get in Touch</button>
                  </a>
                  
                  </div>
                
                  <div>
                  <img src="/images/services/web-deisgn/4.png" alt="" style={{width:"60%"}}/>
                  </div>
                  
                </div>
                <div className="col-12 col-lg-7">
                  <div className="faq-list pt-3">
                    {faqData.map((faq, index) => (
                      <div
                        key={index}
                        className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        onClick={() => toggleFAQ(index)}
                      >
                        <div className="faq-question font-22">
                          {faq.question}
                          <span className="arrow-icon">↗</span>
                        </div>
                        {openIndex === index && faq.answer && (
                          <div className="faq-answer">
                            {faq.answer}
                          </div>
                        )}
                        <hr className="faq-divider" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <AcademyCourseForm/>
          </div>
        </div>
      </div>

     
      
    </section>
  );
};

export default AcademyFAQ;
