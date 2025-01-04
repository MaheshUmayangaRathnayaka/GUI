import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose Your Vehicle',
      description:
        'Browse our wide range of vehicles and select the one that suits your needs.',
      icon: '/images/choose-vehicle-icon.png',
    },
    {
      id: 2,
      title: 'Book Online',
      description:
        'Use our easy-to-use online booking system to reserve your vehicle in just a few clicks.',
      icon: '/images/book-online-icon.png',
    },
    {
      id: 3,
      title: 'Pick Up Your Vehicle',
      description:
        'Visit the nearest location and pick up your vehicle at the scheduled time.',
      icon: '/images/pickup-vehicle-icon.png',
    },
    {
      id: 4,
      title: 'Enjoy Your Journey',
      description:
        'Drive and enjoy your trip with the comfort of a reliable vehicle.',
      icon: '/images/enjoy-journey-icon.png',
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-description">
          Renting a vehicle is simple and hassle-free. Here’s how our process works in just 4 easy steps.
        </p>
        <div className="steps-list">
          {steps.map((step) => (
            <div className="step-card" key={step.id}>
              <img src={step.icon} alt={step.title} className="step-icon" />
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
