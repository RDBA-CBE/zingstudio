import React from 'react';

const Footer1 = () => {
  return (
    <footer className="footer-section py-5 text-white footernew">
    <div className="container">
      <div className="row gy-4 justify-content-between">
        <div className="col-6 col-md-3">
          <h6 className="footer-title">Services</h6>
          <ul className="footer-list">
            <li>UI/UX Experience</li>
            <li>Digital Marketing</li>
            <li>Web Development</li>
            <li>Product Design</li>
          </ul>
        </div>

        <div className="col-6 col-md-3">
          <h6 className="footer-title">Contacts</h6>
          <ul className="footer-list">
            <li>27 Division St, New York,</li>
            <li>NY 10002, USA</li>
            <li>+1 800 123 456 789</li>
            <li>odefy@mail.com</li>
          </ul>
        </div>

        <div className="col-12 col-md-3">
          <h6 className="footer-title text-center text-md-start">Subscribe</h6>
          <div className="footer-subscribe" style={{borderBottom:"1px sold #ffffff7a"}}>
            <span className="subscribe-text" >Get news & updates</span>
            <span className="subscribe-symbol">@</span>
          </div>
          <p className="subscribe-note text-center text-md-start">Subscribe to our newsletter. Be in trends.</p>
        </div>

        <div className="col-12 col-md-2">
          <h6 className="footer-title text-center text-md-start">In Socials</h6>
          <div className="footer-socials">
            <button className="footer-social-btn">Instagram</button>
            <button className="footer-social-btn">Twitter</button>
            <button className="footer-social-btn">Facebook</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center text-md-start">
        <p>Copyright © 2024 Odefy by WebGeniusLab. All Rights Reserved</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer1;
