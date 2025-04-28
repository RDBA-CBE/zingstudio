"use client"
import React from 'react';
import { motion } from "framer-motion";
import PhysicsCircles from './AcademyTeamSection-1';


const teamIntroData = {
  title: "Who can apply <br/>  for this course?",
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
    <section className="team-intro-section py-5 px-4  text-white mb-5 ">
      <div className="container">
        <div className="row align-items-center gx-5">
          <div className="col-xl-4 col-lg-5 mb-4 mb-md-0">
            <h2 className="team-intro-title fw-bold" dangerouslySetInnerHTML={{__html:title}}></h2>
            <p className="team-intro-desc mb-3 mt-4">{description1}</p>
            {/* <a href="about"><button className=" mt-2 rounded-pill team-intro-btn">
              {buttonText}
            </button>
            </a> */}
          </div>
          <div className="col-xl-8 col-lg-7 new-why-me h-100" style={{position:"relative", top:"-10px"}} >
            {/* <p className="team-intro-desc mb-3">{description1}</p> */}

            <div className="container-fluid ">
                                <div className="row gy-4">
                                    {[
                                        { number: '01', title: 'Students Studying In College' },
                                        { number: '02', title: 'Working Proffesionals' },
                                        { number: '03', title: 'Business Owners' },
                                        { number: '04', title: 'Home Makers' },
                                       
                                    ].map((item, index) => (
                                        <div className="col-md-6 px-0" key={index}>
                                            <div className="service-box">
                                                {/* <span className="service-number text-white" style={{fontSize:"18px"}}>{item.number}</span> */}
                                                <h5 className="service-name text-white mt-2 pt-4 pb-3" style={{fontSize:"23px",fontWeight:"400", borderBottom:"1px solid #97969b7a",width:"90%" ,borderTop:"none"}} >→ {item.title}</h5>
                                               
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
            
          
          </div>
        </div>
        {/* <div className='row mt-5'>
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
        </div> */}
      </div>
          
    </section>
  );
};

export default AcademyTeamSection;
