import React from 'react';

const Footer1 = () => {
  return (
    <footer className="footer-section  text-white footernew">
    <div className="container px-4">
      <div className="row gy-4 justify-content-between">
        <div className="col-6 col-lg-2">
          <h6 className="footer-title">Services</h6>
          <ul className="footer-list">
            <li><a href="/web-design-service">Web Design</a></li>
            <li><a href="/digital-marketing-service">Digital Marketing</a></li>
            <li><a href="/e-commerce-service">E-Commerce</a></li>
           
          </ul>
        </div>

       

        <div className="col-12 col-lg-5 px-4">
       
          <div className='row justify-content-between'>
          <h6 className="footer-title text-start text-md-start px-0 ">Academy</h6>
            <div className='col-5 px-0'>
                  <ul className="footer-list">
                  <li><a href="zing-digital-marketing-mastery">Zing Digital Marketing Mastery</a></li>
                  <li><a href="zing-launchpad-student-internship-program">Zing Launchpad – Student Internship Program</a></li>
                  <li><a href="zing-digital-sprint-essentials-of-marketing">Zing Digital Sprint – Essentials of Marketing</a></li>
                  <li><a href="zing-ai-in-digital-marketing">Zing AI in Digital Marketing</a></li>
                </ul>
            </div>

            <div className='col-5 px-0'>
          <ul className="footer-list">
            <li> <a href="zing-social-media-mastery">Zing Social Media Mastery</a></li>
            <li><a href="zing-seo-supercharger">Zing SEO Supercharger</a></li>
            <li> <a href="zing-adSense-ace">Zing AdSense Ace</a></li>
            <li><a href="zing-copywriting-&-content-mastery">Zing Copywriting & Content Mastery</a></li>
          </ul>
          </div>
          </div>

          
          

          
          {/* <div className="footer-subscribe" style={{borderBottom:"1px sold #ffffff7a"}}>
            <span className="subscribe-text" >Get news & updates</span>
            <span className="subscribe-symbol">@</span>
          </div> */}
          {/* <p className="subscribe-note text-center text-md-start">Subscribe to our newsletter. Be in trends.</p> */}
        </div>

        <div className="col-6 col-lg-2">
          <h6 className="footer-title">Contacts</h6>
          <ul className="footer-list">
            <li>5A-1, 4th Street,</li>
            <li>Chinthamani Nagar, K.K.Pudur,</li>
            <li>Saibaba Colony,</li>
            <li>Coimbatore – 641 038.</li>
            <li>Tamil Nadu, India.</li>
          </ul>
        </div>

        <div className="col-6 col-lg-2">
          <h6 className="footer-title text-center text-md-start">In Socials</h6>
          <div className="footer-socials">
            <button className="footer-social-btn"><a href="https://www.instagram.com/ireputeagency/" target="_blank">Instagram</a></button>
            <button className="footer-social-btn"><a href="https://x.com/ireputeagency" target="_blank">Twitter</a></button>
            <button className="footer-social-btn"><a href="https://www.facebook.com/irepute.agency" target="_blank">Facebook</a></button>
            <button className="footer-social-btn"><a href="https://www.linkedin.com/company/irepute-agency" target="_blank">LinkedIn</a></button>
            <button className="footer-social-btn"><a href="https://www.youtube.com/@ireputeagency" target="_blank">You Tube</a></button>
            <button className="footer-social-btn"><a href="https://in.pinterest.com/ireputeagency/" target="_blank">Pinterest</a></button>
          </div>
          
        </div>
      </div>

      <div className="footer-bottom text-center text-md-start">
        <p>Copyright © 2025 Zing Studio . All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer1;
