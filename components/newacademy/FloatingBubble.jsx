
'use client';

import React from "react";
import { motion } from "framer-motion";
import Textalign from "./Textalign";

const services = [
  "UI/UX Design",
  "Data Analysis",
  "Digital Marketing",
  "Web Development",
  "SEO",
  "Illustrations",
  "Branding",
  
];

const FloatingBubble = () => {
  return (
    <section className="digital-intro-section mb-5 pb-5">
      <div className="container ">
        <Textalign/>
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
    </section>
  );
};

export default FloatingBubble;