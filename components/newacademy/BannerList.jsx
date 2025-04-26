import React from 'react';


const services = [
  { id: '001', title: 'Course Duration ', description: '3 Months + 3 Months Internship' },
  { id: '002', title: 'Course Fees', description: '₹25,000' },
  {
    id: '003',
    title: 'Application Closes On ',
    description:
      '31/05/2025',
  },
  
];

const BannerList = ({course}) => {
  return (
    <section className="services-list-section  px-3 BannerList mt-3">
      <div className="container">
        {/* <h6 className="text-black text-center mb-5">Our Services</h6> */}
        {services.map((service) => (
          <div key={service.id} className="service-box d-flex justify-content-center align-items-center border-bottom ">
            {/* <div className="service-id text-black-50">{service.id}</div> */}

            <div className="service-content d-flex justify-content-center">
              <h2 className="service-title mb-0 text-black fw-bold">{service.title} <br /> <span className='service-title-p'>{service.description}</span>
              
              </h2>
             
              
              {course && (
                <p className="service-desc mb-0 text-black-50" dangerouslySetInnerHTML={{__html:course}}></p>
              )}
            </div>

           
          </div>

               
        ))}
      </div>
    </section>
  );
};

export default BannerList;
