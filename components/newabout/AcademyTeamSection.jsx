"use client"
import React from 'react';
import { motion } from "framer-motion";


const teamIntroData = {
  title: "Who can apply for <br/> this course?",
  description1:
    "Students, professionals, entrepreneurs, or content creators—this course is for anyone ready to boost their digital skills. No experience needed, just a passion to learn and grow!",
  description2:
    "Through our years of experience, we’ve also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels.",
  buttonText: "About Company",
  stats: [
    { id: 1, value: "15", label: "Years of Experience" },
    { id: 2, value: "1K+", label: "Projects Worldwide" },
  ],
};

const services = [
  "Students Studying In College",
  "Working Proffesionals",
  "Business Owners",
  "Home Makers",
 
  
];

const AcademyTeamSection = () => {
  const { title, description1, description2, buttonText, stats } = teamIntroData;

  return (
    <section className="team-intro-section py-5 px-4  text-white mb-5">
      <div className="container">
        <div className="row align-items-center gx-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="team-intro-title fw-bold" dangerouslySetInnerHTML={{__html:title}}></h2>
            <button className=" mt-2 rounded-pill team-intro-btn">
              {buttonText}
            </button>
          </div>
          <div className="col-md-6">
            <p className="team-intro-desc mb-3">{description1}</p>
            
            {/* <div className="d-flex gap-5 mt-4">
              {stats.map((stat) => (
                <div key={stat.id} className="team-intro-stat">
                  <h3 className="mb-0 fw-bold display-6">{stat.value}</h3>
                  <small className="text-white-50">{stat.label}</small>
                </div>
              ))}
            </div> */}
          </div>
        </div>
        <div className='row mt-5'>
        <div className="services-bubble-wrapper">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-bubble"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              {service}
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyTeamSection;
