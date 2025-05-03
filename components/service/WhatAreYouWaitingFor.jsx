import React from 'react';


const courses = [
    {
        imgSrc:"/images/Home-Page/Zing-acd/zing-digital-marketing-mastery.jpg",
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
      imgSrc:"/images/Home-Page/Zing-acd/student-internship-program.jpg",
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
      imgSrc:"/images/Home-Page/Zing-acd/essentials-of-marketing.jpg",
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
    imgSrc:"/images/Home-Page/Zing-acd/zing-ai-in-digital-marketing.jpg",
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

]

const WhatAreYouWaitingFor = () => {
  return (
    <section className="section-digital-blog  px-3 mt-5">
      <div className="container-fluid">
        <div className='row px-3 px-lg-5 justify-content-center'>
            <div className='col-12 col-xl-10 mx-0 px-0'>
                <div className='container-fluid'>
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2 className="blog-section-title mb-0 text-black fw-bold font-48" style={{fontSize:"48px"}}>
          What are You waiting For ?
          </h2>
          {/* <a className='p-0 w-auto  rounded-pill ' href="contact" style={{lineHeight:"1", border:"none"}}>
          <button className="btn btn-all-news">All News</button>
          </a> */}
         
          <a className='p-0 w-auto rounded-pill ' href="contact" style={{lineHeight:"1", border:"none"}}>
                  <button className="btn btn-light fw-bold  rounded-pill mt-3 text-white" style={{width:"auto", margin:"auto",padding:"15px 30px",background:"#1a43bf"}}>
                    Connect Us
                    </button>
                  </a>
        </div>

        <div className="row gy-4 mt-4">
          {courses.map((post) => (
            <div key={post.id} className="col-xl-3 col-lg-4 col-md-6">
              <div className="blog-card-wrapper">
                <div className="blog-image-box position-relative">
                  <img src={post.imgSrc} alt={post.title} className="img-fluid blog-image" />
                  {/* <span className="blog-category-label">{post.mode}</span> */}
                </div>
                {/* <div className="blog-content">
                  <p className="blog-date">{post.price}</p>
                  <h5 className="blog-title fw-bold font-22" style={{fontSize:"25px"}}>{post.title}
                  <p className='mb-0' style={{fontSize:"16px"}}>{post.duration}</p>
                  </h5>
                  
                  <a href={post?.link} className="blog-read-more">
                    <span className="read-dot"></span> Read More
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhatAreYouWaitingFor;
