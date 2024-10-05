import React from 'react';


import usa from '../../assets/image/usa.svg';
import gpay from '../../assets/image/gpay.svg';
import opay from '../../assets/image/opay.svg';
import paypal from '../../assets/image/paypal.svg';
import apple from '../../assets/image/applepay.svg';
import amex from '../../assets/image/amex.svg';
import insta from '../../assets/image/insta.svg';
import linkden from '../../assets/image/linkden.svg';
import master from '../../assets/image/voda.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <span>BE THE FIRST TO KNOW</span>
          <p>Sign up for updates from mettä muse.</p>
          <div className="newsletter-signup">
            <input type="email" placeholder="Enter your email..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-info">
          <span>CONTACT US</span>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <div className='currency'>CURRENCY</div>
          <div className='img-usa' >
            <img src={usa} alt="USA Flag" className="currency-icon"/>
            USD
          </div>
          <div className='transaction'>Transactions will be completed in Euros and a currency reference is available on hover.</div>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <div>mettā muse</div>
          <div className='list'>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
          </div>
        </div>
        <div className="footer-section">
          <div className='list' >QUICK LINKS</div>
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
        <div className="footer-section">
          <span>FOLLOW US</span>
          <div className="social-icons">
            <img src={insta} alt="Instagram" />
            <img src={linkden} alt="LinkedIn" />
          </div>
          <span>mettā muse ACCEPTS</span>
          <div className="payment-icons">
            <img src={gpay} alt="Google Pay" />
            <img src={master} alt="MasterCard" />
            <img src={paypal} alt="Paypal" />
            <img src={amex} alt="Amex" />
            <img src={apple} alt="Apple Pay" />
            <img src={opay} alt="Opay" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>Copyright © 2023 mettamuse. All rights reserved.</div>
      </div>
    </footer>

  );
}

export default Footer;
