import React from 'react';

const NewServicePortfolio = ({portfolioContent,works}) => {

 

  return (
    <section className="our-works-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
          <h2 className="our-works-heading font-48">Our Works</h2>
          <p className="our-works-desc">
          {portfolioContent.description}
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
                <h5 className="work-title font-30">{work.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServicePortfolio;
