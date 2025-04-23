"use client"

import React from 'react';
import { useState } from 'react';

const faqs = [
  {
    question: "What is a digital agency?",
    answer: "A digital agency is a company that offers a range of services to help businesses establish a strong online presence and achieve their digital marketing goals. These services may include web design, web development.",
  },
  { question: "What services does a digital agency provide?" ,
    answer: "A digital agency is a company that offers a range of services to help businesses establish a strong online presence and achieve their digital marketing goals. These services may include web design, web development.",
  },
  { question: "Why should I hire a digital agency?" ,
    answer: "A digital agency is a company that offers a range of services to help businesses establish a strong online presence and achieve their digital marketing goals. These services may include web design, web development.",
  },
  { question: "How can a digital agency improve my online visibility?",
    answer: "A digital agency is a company that offers a range of services to help businesses establish a strong online presence and achieve their digital marketing goals. These services may include web design, web development.",
   },
  { question: "Can a digital agency help with content creation?",
    answer: "A digital agency is a company that offers a range of services to help businesses establish a strong online presence and achieve their digital marketing goals. These services may include web design, web development.",
   },
  { question: "Do digital agencies work with small businesses as well?" ,
    answer: "A digital agency is a company that offers a range of services to help businesses establish a strong online presence and achieve their digital marketing goals. These services may include web design, web development.",
  },
  { question: "How much does it cost to hire a digital agency?" ,
    answer: "A digital agency is a company that offers a range of services to help businesses establish a strong online presence and achieve their digital marketing goals. These services may include web design, web development.",
  },
  { question: "What industries does a digital agency typically serve?" ,
    answer: "A digital agency is a company that offers a range of services to help businesses establish a strong online presence and achieve their digital marketing goals. These services may include web design, web development.",
  },
  { question: "What is the process of working with an agency?",
    answer: "A digital agency is a company that offers a range of services to help businesses establish a strong online presence and achieve their digital marketing goals. These services may include web design, web development.",
   },
  { question: "Can a digital agency help with branding?",
    answer: "A digital agency is a company that offers a range of services to help businesses establish a strong online presence and achieve their digital marketing goals. These services may include web design, web development.",
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
        <div className="row">
          <div className="col-md-4 text-white mb-4">
            <h2 className="faq-heading">Explore Frequently<br />Asked Questions</h2>
            <button className="faq-btn">Get in Touch</button>
          </div>
          <div className="col-md-8">
            <div className="faq-list">
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
