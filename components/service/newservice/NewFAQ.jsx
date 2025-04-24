"use client"

import React from 'react';
import { useState } from 'react';

const faqs = [
  {
    id: "faq6",
    question: "1. What is the typical timeline for a web design project?",
    answer:
      "The timeline varies depending on the complexity and requirements of the project. On average, it takes 2 to 3 weeks to complete a standard website.",
  },
  {
    id: "faq7",
    question: "2. How involved will I be in the design process?",
    answer:
      "We encourage collaboration and will involve you at every major milestone, from concept approval to design review and final testing.",
  },
  {
    id: "faq8",
    question: "3. Will my website be mobile-friendly?",
    answer:
      "Absolutely! All our designs are responsive and optimized to work seamlessly across all devices, including smartphones and tablets.",
  },
  {
    id: "faq9",
    question: "4. Can I request changes once the design is complete?",
    answer:
      "Yes, we offer 1 revision during the design phase to ensure your satisfaction before proceeding to development.",
  },
  {
    id: "faq10",
    question: "5. Do you provide content for the website?",
    answer:
      "Content needs to be shared from client side. If required our team also offers copywriting services if needed at extra cost.",
  },
  {
    id: "faq11",
    question: "6. What platforms do you use for website development?",
    answer:
      "We work with a variety of platforms like WordPress and HTML5/CSS3 - Bootstrap depending on your needs.",
  },
  {
    id: "faq12",
    question: "7. Do you offer website maintenance and support?",
    answer:
      "Yes, we provide ongoing maintenance packages to keep your website updated, secure, and performing at its best at a additional nominal cost.",
  },
  {
    id: "faq13",
    question: "8. Will my website be SEO-friendly?",
    answer:
      "Definitely! We follow best practices for SEO during the design and development stages to enhance your website’s visibility.",
  },
 
  {
    id: "faq15",
    question: "9. How do I get started?",
    answer:
      "Simply contact us to schedule a consultation. We’ll discuss your vision, goals, and how we can bring your website to life!",
  },
];

const NewFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq-section py-5">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-12 col-lg-5 text-white mb-4">
            <h2 className="faq-heading pt-4">Explore Frequently<br />Asked Questions</h2>
            <button className="faq-btn">Get in Touch</button>
          </div>
          <div className="col-12 col-lg-7">
            <div className="faq-list pt-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openIndex === index ? 'open' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question">
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
    </section>
  );
};

export default NewFAQ;
