"use client"
import React from 'react';


import { Accordion } from 'react-bootstrap';

const NewSpecialProgram = () => {
  return (
    <div className="how-it-works-section container-fluid py-5 mb-5">
      <div className="row justify-content-center align-items-center">
      
        <div className='col-11'>
            <div className='container-fluid'>
                <div className='row'>
                     {/* Left Section */}
        <div className="col-lg-6 mb-4 px-0" >
          <div className="hiw-card hiw-left" style={{position:"relative",top:"-30px"}}>
            <h2 className="hiw-heading text-black">How it Works</h2>
            <Accordion defaultActiveKey="0" className="hiw-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is a digital agency?</Accordion.Header>
                <Accordion.Body >
                  A digital agency is a company that helps design and build businesses online using strategy, design, and tech services.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What services does a digital agency provide?</Accordion.Header>
                <Accordion.Body>
                  Services include branding, web design, development, SEO, digital marketing, and app development.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Why should I hire a digital agency?</Accordion.Header>
                <Accordion.Body>
                  Digital agencies provide expert support, saving time and boosting your online success with proven strategies.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 px-0">
          <div className="hiw-card hiw-right" style={{position:"relative",top:"50px"}}>
            <img src="/images/Home-Page/vector-img.png" alt="character" className="character-img" />
            <div className="hiw-stats">
              <div>
                <h3>15</h3>
                <p>Years of Experience</p>
              </div>
              <div>
                <h3>1K+</h3>
                <p>Projects Worldwide</p>
              </div>
            </div>
          </div>
        </div>
                </div>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default NewSpecialProgram;
