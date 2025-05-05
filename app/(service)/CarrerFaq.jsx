"use client"

import React from 'react';
import { useState } from 'react';

const faqData = [
    {
      id: "faq6",
      question: "Mentorship from Experts",
      answer:
        "Work closely with industry professionals and gain invaluable insights into the digital marketing and branding sectors.",
      background: "#f4f2f2",
    },
    {
      id: "faq7",
      question: "Portfolio Development",
      answer:
        "Contribute to meaningful projects that enhance your portfolio and demonstrate your expertise to future employers.",
    },
    {
      id: "faq8",
      question: "Skill Advancement",
      answer:
        "Sharpen your abilities in web design, digital marketing strategies, and other key areas, positioning yourself for future career success.",
      background: "#f4f2f2",
    },
   
  ];

const CarrerFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section >
      <div className='container-fluid pt-5'>
        <div className='row px-3 px-md-5'>
          <div className='col-12 mx-0 '>
            <div className="container">
              <div className="row justify-content-around " style={{columnGap:"50px"}}>
                <div className="col-12 col-lg-5 text-white mb-4 d-flex flex-column justify-content-between">
                  <div>
                  <h2 className="faq-heading pt-4 font-48 text-black">Internship Opportunities <br/> at Zing Studio</h2>
                  <p className='career-faq-p text-black'>Zing Studio offers exceptional internship opportunities designed for students and recent graduates seeking to gain practical experience in digital marketing, web design, and branding. As an intern with us, you will collaborate with seasoned professionals, contributing to high-impact projects while honing your skills in a dynamic, innovative environment.</p>
                  
                  
                  </div>
                
                  <div>
                  {/* <img src="/images/services/web-deisgn/4.png" alt="" style={{width:"60%"}}/> */}
                  </div>
                  
                </div>
                <div className="col-12 col-lg-6">
                  <div className="faq-list pt-3">
                    {faqData.map((faq, index) => (
                      <div
                        key={index}
                        className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        onClick={() => toggleFAQ(index)}
                      >
                        <div className="faq-question font-30 text-black" style={{fontSize:"30px"}}>
                          {faq.question}
                          <span className="arrow-icon text-black">↗</span>
                        </div>
                        {openIndex === index && faq.answer && (
                          <div className="faq-answer text-black">
                            {faq.answer}
                          </div>
                        )}
                        <hr className="faq-divider" style={{borderColor:"#000"}}/>
                      </div>
                    ))}
                  </div>
                  <p className='mt-3 career-faq-p'>
                  If you are looking to accelerate your career in a collaborative and growth-driven environment, we invite you to apply for an internship at Zing Studio. Gain the experience and knowledge that will set you apart in the competitive digital landscape.
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>

     
      
    </section>
  );
};

export default CarrerFaq;
