import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import Animation from './Animation';
const Footer = () => {
  return (
    <>
      {/* Contact Form Overlapping */}
      <div className="position-relative mt-3" data-aos="fade-left" style={{ backgroundColor: '#0d6efd', height: '120px' }}>
        <div className="position-absolute top-100 start-50 translate-middle w-75 bg-white p-4 rounded shadow-lg z-3">
          <h4 className="text-center mb-3 text-dark">Contact Us</h4>
          <form className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="col-12">
              <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary px-5">Send</button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-white pt-5 mt-5">
        <div className="container py-5">
          <div className="row">

            {/* About Section */}
            <div className="col-md-4 mb-4">
             <img src={logo} alt="" />
              <p className="small text-muted">
                We offer premium electronic components with a commitment to quality and service.
              </p>
              <div className="d-flex gap-3 fs-5">
                <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled small text-muted">
                <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
                <li><Link to= "/contact" className="text-white text-decoration-none">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-4">
              <h5>Contact Info</h5>
              <ul className="list-unstyled small text-muted">
                <li><i className="bi bi-geo-alt-fill me-2"></i> Delhi, India</li>
                <li><i className="bi bi-telephone-fill me-2"></i> +91-9876543210</li>
                <li><i className="bi bi-envelope-fill me-2"></i> contact@triptielectronic.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bg-secondary text-center py-3">
          <small>&copy; {new Date().getFullYear()} Tripti Electronic. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
