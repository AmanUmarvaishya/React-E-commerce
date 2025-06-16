import React from 'react';
import './ContactPage.css'
import Animation from './Animation';
import Services from './Services';
const ContactPage = () => {
  return (
    <div className="contact-wrapper" data-aos="fade-down-left">
      <div className="contact-hero">
        <h1>Contact Tripti Electronics</h1>
        <p>We're here to answer your questions and provide support.</p>
      </div>

      <div className="contact-card" data-aos="fade-down-right">
        <form className="contact-form" >
          <h2>Get In Touch</h2>

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email address" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5" placeholder="Type your message here..." required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <Services/>
    </div>
  );
};

export default ContactPage;
