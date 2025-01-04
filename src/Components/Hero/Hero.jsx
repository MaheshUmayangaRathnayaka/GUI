import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Explore the Roads. Rent Your Ride.</h1>
        <p className="hero-subtitle">Affordable and reliable vehicles at your fingertips.</p>
        <div className="hero-cta">
          <button className="cta-btn">Explore Vehicles</button>
          <button className="cta-btn cta-secondary">Check Availability</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
