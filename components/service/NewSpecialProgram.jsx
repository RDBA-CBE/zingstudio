"use client"
import React from 'react';


import { Accordion } from 'react-bootstrap';

const NewSpecialProgram = () => {
  return (
    <div className="how-it-works-section container-fluid  mb-5" style={{paddingBottom:"130px"}} >
      <div className="row justify-content-center align-items-center px-3 px-md-5">
      
        <div className='col-12 mx-0'>
            <div className='container-fluid'>
                <div className='row '>
                     {/* Left Section */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 mb-xl-4 px-0 " >
          <div className="hiw-card hiw-left me-2 " style={{position:"relative",top:"0px",display:"flex", flexDirection:"column", justifyItems:"center",justifyContent:"center"}}>
            <h2 className="hiw-heading text-black">Special Program</h2>
            <Accordion defaultActiveKey="0" className="hiw-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header className='font-48'>Influencer Buzz</Accordion.Header>
                <Accordion.Body >
                  A digital agency is a company that helps design and build businesses online using strategy, design, and tech services.  A digital agency is a company that helps design and build businesses online using strategy, design, and tech services.  A digital agency is a company that helps design and build businesses online using strategy, design, and tech services.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className='font-48'>Brand Buzz</Accordion.Header>
                <Accordion.Body>
                  Services include branding, web design, development, SEO, digital marketing, and app development. Services include branding, web design, development, SEO, digital marketing, and app development. Services include branding, web design, development, SEO, digital marketing, and app development.
                </Accordion.Body>
              </Accordion.Item>
              {/* <Accordion.Item eventKey="2">
                <Accordion.Header>Expert Hub</Accordion.Header>
                <Accordion.Body>
                  Digital agencies provide expert support, saving time and boosting your online success with proven strategies.
                </Accordion.Body>
              </Accordion.Item> */}
            </Accordion>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-6 px-0" >
          <div className="hiw-card hiw-right ms-2" style={{position:"relative",top:"120px"}}>
            <img src="/images/Home-Page/vector-img.png" alt="character" className="character-img" />
            <div className="hiw-stats">
              <div className='d-flex align-items-center justify-content-center'>
                <h3>15</h3>
                <p className='text-start mx-3'>Years of <br/>Experience</p>
              </div>
              <div className='d-flex align-items-center justify-content-center'>
                <h3>1K+</h3>
                <p className='text-start mx-3'>Projects <br/> Worldwide</p>
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
