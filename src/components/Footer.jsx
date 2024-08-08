import React from 'react';
import '../css/Footer.css'
import masterCadr from '../assets/mastercard.png'
import amaxpay from '../assets/applepay.png'
import paypal from '../assets/paypal.png'
import Instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.webp'


const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-col">
          <p>Artistic Haven
          </p>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-col">
          <p>QUICK LINKS</p>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-col">
          <p>FOLLOW US</p>
          <div className="social-icons">
            <a href="#">
              <img className='social-icon' src={Instagram} alt="instagram" />
            </a>
            <a href="#">
              <img className='social-icon '  src={linkedin} alt="linkedin" />
            </a>
          </div>
          <p>mettä muse ACCEPTS</p>
          <div className="payment-icons">
            <img className='pay_img' src={masterCadr} alt="mastercard" />
            <img className='pay_img' src={paypal} alt="paypal" />
            <img className='pay_img' src={amaxpay} alt="amaxpay" />
        
          </div>
        </div>
        <div className="footer-col">
          <p>CONTACT US</p>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
