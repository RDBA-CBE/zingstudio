import React from 'react';

const NewServicePortfolio = () => {
  const works = [
    {
      image: '/images/services/web-deisgn/mockup-1.jpg',
      title: 'GMAK Fiber Laser',
      tags: "Static"
    },
    {
      image: '/images/services/web-deisgn/mockup-2.jpg',
      title: 'SKD Finedecor',
      tags: "CMS",
    },
    {
      image: '/images/services/web-deisgn/mockup-3.jpg',
      title: 'NVM Lifestyle Clinic',
      tags: "Static",
    },
  ];

  return (
    <section className="our-works-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
          <h2 className="our-works-heading">Our Works</h2>
          <p className="our-works-desc">
          Check out our lineup of stunning websites that pop, perform, and leave a mark! At Zing Studio, we blend bold designs with smooth vibes to craft digital spaces that turn clicks into customers. 
          From trendy business sites to vibrant online stores, our creations are all about making your brand shine.
          </p>
          
        </div>
        <div className="row gy-4">
          {works.map((work, index) => (
            <div className="col-md-4" key={index}>
              <div className="work-card">
                <img src={work.image} alt={work.title} className="img-fluid work-image" />
                <div className="work-tags">
                  
                    <span className="work-tag">{work.tags}</span>
                 
                </div>
                <h5 className="work-title">{work.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServicePortfolio;
