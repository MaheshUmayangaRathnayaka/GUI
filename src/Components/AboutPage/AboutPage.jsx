import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to RideRent, your trusted platform for renting vehicles 
          easily and efficiently. We are dedicated to connecting you with the 
          perfect ride for your journey.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            At RideRent, our mission is to provide a seamless and cost-effective 
            vehicle rental experience. We strive to offer an extensive range of 
            vehicles to cater to all your travel needs.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Wide variety of vehicles for all occasions</li>
            <li>Affordable and transparent pricing</li>
            <li>24/7 customer support</li>
            <li>Easy-to-use online booking system</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Our Journey</h2>
          <p>
            Since our inception, we have served thousands of satisfied customers, 
            helping them travel safely and comfortably. Our commitment to 
            excellence drives us to continually improve our services.
          </p>
        </div>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <p>
          Behind RideRent is a passionate team of professionals dedicated to 
          making your vehicle rental experience exceptional.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
