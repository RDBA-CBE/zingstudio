'use client';
import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const NewITeach = () => {
  const images = [
    '/images/Home-Page/iteach-img-1.png',
    '/images/Home-Page/iteach-img-1.png',
    '/images/Home-Page/iteach-img-1.png',
    '/images/Home-Page/iteach-img-1.png',
    '/images/Home-Page/iteach-img-1.png',
  ];

  const course = [
    {
        // imgSrc:"/images/Home-Page/Zing-acd/zing-digital-marketing-mastery.jpg",
        imgSrc:"/images/Home-Page/iteach-img-1.png",
        title:"Zing Digital Marketing Mastery",
        mode:"online",
        list:[
          'Lorem ipsum dolor sit amet',
          'Lorem ipsum dolor sit amet',
          'Lorem ipsum dolor sit amet'
        ],
        description:" A comprehensive, hands-on program covering advanced digital marketing strategies. From SEO to paid ads and content marketing, this course is designed to equip you with real-world expertise.",
        duration:"3 Months + 3 Months Internship",
        price:"₹25,000",
        link:"zing-digital-marketing-mastery"
        
    },
    {
      // imgSrc:"/images/Home-Page/Zing-acd/student-internship-program.jpg",
      imgSrc:"/images/Home-Page/iteach-img-2.png",
      title:" Zing Launchpad – Student Internship Program",
      mode:"online",
      list:[
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet'
      ],
      description:"A power-packed internship experience tailored for college students. Work on live projects, apply digital marketing concepts, and build your portfolio.",
      price:"₹3,000",
      duration:" 10 Days",
       link:"zing-launchpad-student-internship-program"

      
    },
    {
      // imgSrc:"/images/Home-Page/Zing-acd/essentials-of-marketing.jpg",
      imgSrc:"/images/Home-Page/iteach-img-3.png",
      title:"Zing Digital Sprint – Essentials of Marketing",
      mode:"online",
      list:[
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet'
      ],
      description:"A fast-track, beginner-friendly program covering the core aspects of digital marketing. Perfect for those looking to get a strong foundation in the field.",
      duration:" 15 Days",
      price:"₹7,000",
       link:"zing-digital-sprint-essentials-of-marketing"

      
  },
  {
    // imgSrc:"/images/Home-Page/Zing-acd/zing-ai-in-digital-marketing.jpg",
    imgSrc:"/images/Home-Page/iteach-img-1.png",
    title:"Zing AI in Digital Marketing",
    mode:"online",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Discover how AI is revolutionizing digital marketing! Learn to use AI-powered tools for better decision-making, automation, and campaign optimization.",
    duration:"5 Days",
    price:"₹7,000",
     link:"zing-ai-in-digital-marketing"


  },

  {
    // imgSrc:"/images/Home-Page/Zing-acd/zing-social-media-mastery.jpg",
    imgSrc:"/images/Home-Page/iteach-img-2.png",
    title:"Zing Social Media Mastery",
    mode:"online",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Learn how to turn followers into fans and likes into leads with a strategic social media approach. Master Instagram, LinkedIn, Facebook, and YouTube while uncovering monetization secrets.",
    duration:" 4 Weeks",
    price:"₹10,000",
     link:"zing-social-media-mastery"

    
  },
  {
    // imgSrc:"/images/Home-Page/Zing-acd/zing-seo-spercharger.jpg",
    imgSrc:"/images/Home-Page/iteach-img-3.png",
    title:"Zing SEO Supercharger ",
    mode:"online",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Unlock the power of SEO and get your content ranking at the top of Google! From keyword research to technical SEO and e-commerce optimization, this course is your ultimate guide to search success.",
    duration:"4 Weeks",
    price:"₹5,000",
     link:"zing-seo-supercharger"

    
  },  
  {
    // imgSrc:"/images/Home-Page/Zing-acd/zing-adSense-ace.jpg",
    imgSrc:"/images/Home-Page/iteach-img-1.png",
    title:" Zing AdSense Ace ",
    mode:"online",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Master the science of paid ads and learn how to maximize ROI from your campaigns. Cover Google, Facebook, Instagram, and LinkedIn ads while mastering conversion tracking and budget optimization.",
    duration:"8 Weeks",
    price:"₹15,000",
     link:"zing-adSense-ace"

    
  },
  {
    // imgSrc:"/images/Home-Page/Zing-acd/zing-copywriting-content-mastery.jpg",
    imgSrc:"/images/Home-Page/iteach-img-2.png",
    title:"Zing Copywriting & Content Mastery",
    mode:"online",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:" Create words that sell, stories that engage, and content that converts! Learn content psychology, persuasive writing, SEO blogging, and email marketing to craft compelling narratives.",
    duration:"4 Weeks",
    price:"₹10,000",
     link:"zing-copywriting-&-content-mastery"

    
  },
]

  return (
    <div className='container-fluid pb-5 newIteach'>
        <div className='row justify-content-center px-3 px-md-5'>
            <div className='col-12 mx-0'>
            <div className="custom-team-section py-5 NewITeach" style={{background:"#1a43bf"}}>
      <Container >
        <Row className="">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <div className="custom-team-title">
              {/* <span className="custom-sparkle">✦</span> */}
              <h2 className="fw-bold text-white font-48"> Lorem ipsum dolor sit<br />consectetur adipis</h2>
        
              <button className="btn btn-outline-light mb-3 mb-md-5 mt-3 custom-about-btn" style={{background:"none",border:"1px solid #fff"}}>
            <a href="/services" style={{textDecoration:"none"}}>
            All Services</a> 
          </button>
            </div>
          </Col>
          <Col md={6}>
            <p className="custom-team-text text-white">
            I teach digital marketing practicaly with hands-on training oppurtunity to work on live projects, internships. 
            </p>
            <p className="custom-team-text text-white">
            Join a thriviing community for continuous learing.
            </p>
          </Col>
        </Row>

        <div className="section-content box-sort-in m-b30 button-example ">
                  <div className="blog-carousel owl-loaded owl-theme owl-carousel mfp-gallery gallery owl-btn-center-lr owl-btn-2">
                    <Swiper
                      slidesPerView={6}
                      spaceBetween={30}
                      slidesPerGroup={1}
                      loop
                      autoplay={{
                        delay: 4000,
                      }}
                      // style={{ height: '100%' }}
                      speed={2500}
                      modules={[Pagination, Autoplay, Navigation]}
                      navigation={{
                        prevEl: ".snbp35",
                        nextEl: ".snbn35",
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        991: {
                          slidesPerView: 2,
                        },
                        1200: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {course.map((elm, i) => (
                        <SwiperSlide key={i}>
                        <div className="item h-100 w-100">
                          <div className="ow-event-post date-style-2 d-flex flex-column h-100 w-100">
                            <div className="ow-event-media dlab-img-effect zoom-slow">
                              <Image
                                alt=""
                                src={elm?.imgSrc}
                                width="700"
                                height="500"
                                // style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                              />
                            </div>
                            <div className="ow-event-info d-flex flex-column flex-grow-1 justify-content-between" style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" , height:"180px"}}>
                              {/* <p className="mb-0" style={{ color: "#4b4848" }}>Fees @ {elm.price}</p> */}

                              <div className="ow-event-title">
                                <h4 className="event-title">
                                  <a href="#" title="Video post" style={{textDecoration:"none"}}>{elm.title}</a>
                                </h4>

                                <p className='mb-0' style={{fontSize:"14px"}}>{elm?.duration}</p>
                              </div>
                              
                              <div className="ow-event-readmore mt-auto d-flex  justify-content-between flex-wrap">
                              <p className="mb-0 pb-0 mt-1" style={{ color: "#4b4848" }}> {elm.price}</p>
                                <a
                                  href={elm?.link}
                                  title="READ MORE"
                                  rel="bookmark"
                                  className="site-button-link mb-0 "
                                  style={{fontSize:"18px"}}
                                >
                                  View More <i className="fas fa-arrow-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>


                     


                      
                      ))}
                    </Swiper>
                   
                  </div>
                </div>
      </Container>
    </div>
            </div>
        </div>
    </div>
  );
};

export default NewITeach;
