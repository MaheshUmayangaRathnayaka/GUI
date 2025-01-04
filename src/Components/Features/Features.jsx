import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="features-title">Why Choose Us?</h2>
        <p className="features-description">
          Our vehicle rental system offers convenience, flexibility, and reliability to make your journey smooth and stress-free.
        </p>
        <div className="features-list">
          <div className="feature-item">
            <h3 className="feature-title">Variety of Vehicles</h3>
            <p className="feature-description">
              Choose from a wide range of cars, bikes, and trucks to fit your needs.
            </p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Easy Booking</h3>
            <p className="feature-description">
              Book your vehicle in just a few clicks with our simple online booking system.
            </p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">24/7 Support</h3>
            <p className="feature-description">
              Get assistance anytime with our round-the-clock customer support team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
