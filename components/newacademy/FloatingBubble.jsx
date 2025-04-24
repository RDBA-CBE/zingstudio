
'use client';

import React from "react";
import { motion } from "framer-motion";

const services = [
  "UI/UX Design",
  "Data Analysis",
  "Digital Marketing",
  "Web Development",
  "SEO",
  "Illustrations",
  "Branding",
  "Content Marketing",
  "Motion Design",
  "Mobile Development",
  "SMM",
  "Product Design",
  "Email Marketing",
  "E-commerce Solutions",
];

const FloatingBubble = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-text">
          <motion.h1 
            className="hero-title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            We Create<br />
            <span>World-Class</span><br />
            Digital Products
          </motion.h1>
          <p className="hero-subtext">
            Our Digital agency offers a wide array of services, tailored to the unique needs of each client.
          </p>
        </div>

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