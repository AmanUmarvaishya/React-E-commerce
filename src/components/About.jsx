import React from 'react';
import './AboutPage.css';
import electronicsImage from '../assets/electronics.jpg'; // Place your image in /src/assets
import Animation from './Animation';
import Services from './Services';
const AboutPage = () => {
  return (
    <div className="about-wrapper" >
      <div className="about-hero" data-aos="fade-left">
        <h1>About Tripti Electronics</h1>
        <p>Delivering Innovation, Powering Technology</p>
      </div>

      <div className="about-card">
        <div className="about-image"  >
          <img src={electronicsImage} alt="Electronic Products" />
        </div>

        <div className="about-content"  data-aos="fade-down ">
          <h2>Who We Are</h2>
          <p>
            Tripti Electronics is a trusted name in the world of electronics. With years of experience, we provide a wide range of quality-tested electronic components and industrial solutions tailored to meet the demands of modern industries and individuals alike.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to empower innovation by supplying reliable and advanced electronics with unmatched customer service.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li>✅ Consumer & Industrial Electronics</li>
            <li>✅ Embedded Systems Components</li>
            <li>✅ Automation & Control Devices</li>
            <li>✅ Technical Support & Consultation</li>
          </ul>

          <h2>Our Vision</h2>
          <p>
            To be India’s most trusted electronics supplier, bridging the gap between innovation and everyday life.
          </p>
        </div>
      </div>
      <Services/>
    </div>
  );
};

export default AboutPage;
