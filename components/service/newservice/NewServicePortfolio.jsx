import React from 'react';

const NewServicePortfolio = () => {
  const works = [
    {
      image: '/images/services/web-deisgn/mockup-1.jpg',
      title: 'Art of Graphic',
      tags: ['Branding', 'Design'],
    },
    {
      image: '/images/services/web-deisgn/mockup-2.jpg',
      title: 'Product Design',
      tags: ['Design', 'Development'],
    },
    {
      image: '/images/services/web-deisgn/mockup-3.jpg',
      title: 'Motion Integration',
      tags: ['Development', 'Marketing'],
    },
  ];

  return (
    <section className="our-works-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
          <h2 className="our-works-heading">Our Works</h2>
          <p className="our-works-desc">
            They delve into market research and audience insights,
            helping clients refine their digital strategies.
          </p>
        </div>
        <div className="row gy-4">
          {works.map((work, index) => (
            <div className="col-md-4" key={index}>
              <div className="work-card">
                <img src={work.image} alt={work.title} className="img-fluid work-image" />
                <div className="work-tags">
                  {work.tags.map((tag, i) => (
                    <span key={i} className="work-tag">{tag}</span>
                  ))}
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
