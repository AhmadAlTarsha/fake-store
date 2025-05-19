// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>Fake Store</h3>
          <p>Best online store for testing and learning purposes.</p>
        </div>
        <div className="footer__section">
          <h4>Contact</h4>
          <p>Email: support@fakestore.com</p>
          <p>Phone: +123 456 789</p>
        </div>
        <div className="footer__section">
          <h4>Links</h4>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div className="footer__bottom">
        © {new Date().getFullYear()} Fake Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
