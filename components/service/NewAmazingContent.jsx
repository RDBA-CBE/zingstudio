"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/data/testimonials";

import Link from "next/link";
import Image from "next/image";
import { Accordion } from 'react-bootstrap';
export default function About() {
   const galleryItems = [
    {
      id: 1,
      imgSrc: "/images/Am-a-Zing/am-zing-imgae-1.jpg",
      // imgSrc: "/images/Home-Page/amazing/am-a-zing-img-1.jpg",
      altText: "Gallery Image 1",
    },
    {
      id: 2,
      imgSrc: "/images/Am-a-Zing/am-zing-imgae-2.jpg",
      // imgSrc: "/images/Home-Page/amazing/am-a-zing-img-3.jpg",
      altText: "Gallery Image 2",
    },
    {
      id: 3,
      imgSrc: "/images/Am-a-Zing/am-zing-imgae-3.jpg",
      // imgSrc: "/images/Home-Page/amazing/am-a-zing-img-4.jpg",
      altText: "Gallery Image 3",
    },
    // {
    //   id: 4,
    //   imgSrc: "/images/Am-a-Zing/am-zing-imgae-4.jpg",
    //   altText: "Gallery Image 4",
    // },
  ];
  
  return (
    <>
      

      <div className="container-fluid visually-appealing-section p-0 pb-5">
        <div className='row justify-content-center px-2 px-lg-5'>
          <div className='col-10 mx-0 px-0'>
            <div className='container-fluid mx-0 px-0'>
              <div className="row w-100  mx-0 px-0 justify-content-center align-items-center" >
                <div className="col-12 col-lg-6 text-dark content-block" >
                  <h1 className="main-heading mb-4 font-48">
                    <img src="/images/Home-Page/am-text-black.png" alt="" />
                                <br />
                      Empowering women to <br/> lead the future 
                  </h1>
                                {/* <h2 className="sub-heading mb-4">
                                    We work closely with clients to understand
                                    their goals, and unique challenges.
                                </h2>*/}
                  <p className="description text-dark mt-4 ">
                    At Zing Studio, we strive to create opportunities to uplift women, enabling them to realize their potential and take control of the decisions that shape their lives. We do this through leadership capacity building, digital literacy, skills development and employment, ensuring equal access to opportunities for women to thrive and succeed.
                  </p> 
                </div>
                <div className=" col-12 col-lg-6 h-100 d-flex justify-content-center align-items-center"  >
                  <img src="/images/about-us/Zingo-1.jpeg" alt="3D Spiral" className="spiral-img img-fluid"  style={{width:"70%"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="how-it-works-section container-fluid  mb-5" style={{paddingBottom:"130px"}} >
        <div className="row justify-content-center align-items-center px-3 px-md-5">
      
          <div className='col-12 mx-0'>
            <div className='container-fluid'>
                <div className='row '>
                     {/* Left Section */}
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0 mb-xl-4 px-0 " >
                    <div className="hiw-card hiw-left me-2 " style={{position:"relative",top:"0px",display:"flex", flexDirection:"column", justifyItems:"center",justifyContent:"center"}}>
           
                      <Accordion defaultActiveKey="0" className="hiw-accordion">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className='font-48'>10% disounted cost for Women Entrepreneurs:</Accordion.Header>
                            <Accordion.Body >
                              We believe in supporting women entrepreneurs on their
                              journey to success, that’s why we offer a 10% discount on
                              our services to help them grow their businesses with ease
                              and confidence.
                            </Accordion.Body>
                          </Accordion.Item>
                        <Accordion.Item eventKey="1">
                        <Accordion.Header className='font-48'>Turning Career Breaks into Breakthroughs for Women:</Accordion.Header>
                          <Accordion.Body>
                            We prioritize hiring and providing a supportive platform for
                            women and encouraging those who have taken a career break to
                            restart and thrive in their professional journey.
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




      
    </>
  );
}