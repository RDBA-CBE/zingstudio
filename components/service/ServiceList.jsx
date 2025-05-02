import React from 'react';
// import codingImg from './coding-image.jpg'; 

const ServiceList = () => {

    

    
  const items = [
    { id: '01', title: 'Web Design',image: "/images/Home-Page/who-iam1.jpg",link:"web-design-service"  },
    { id: '02', title: 'Digital Marketing', image: "/images/Home-Page/who-iam1.jpg",link:"digital-marketing-service" },
    { id: '03', title: 'E-Commerce',image: "/images/Home-Page/who-iam1.jpg" ,link:"e-commerce-service" },
  
  ];

  return (
    <div className="container-fluid creative-feature-section py-5 my-5">
        <div className='row px-2 px-lg-5 justify-content-center'>
            <div className='col-12 col-xl-10 px-0 px-xl-4 col-class'>
                <div className='container-fluid'>
                <div className="row justify-content-center " >
        {items.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-4 text-center mt-2 mt-lg-0">
            <div
              className={`creative-box-wrapper position-relative ${
                item.image ? 'hover-image-wrapper' : ''
              }`}
            >
              {item.image && (
                <div
                  className="hover-image-layer position-absolute w-100 h-100"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
              )}
              <div className="creative-box-content position-relative z-2">
                <div className="creative-box-id mb-2">{item.id}</div>
                <div className=" creative-box-title "><a href={item.link}><h2>{item.title}</h2></a></div>
                <div className="creative-box-arrow mt-2"><a href={item.link}>→</a></div>
              </div>
            </div>
          </div>
        ))}
      </div>
                </div>
            
            </div>
        </div>
     
    </div>
  );
};

export default ServiceList;
