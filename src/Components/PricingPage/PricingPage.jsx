import React from 'react';
import './PricingPage.css';

const PricingPage = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic Plan',
      price: '$25/day',
      features: ['Economy vehicles', 'Basic insurance', '24/7 support'],
    },
    {
      id: 2,
      name: 'Standard Plan',
      price: '$50/day',
      features: ['Sedan and SUVs', 'Standard insurance', 'Free cancellations'],
    },
    {
      id: 3,
      name: 'Premium Plan',
      price: '$100/day',
      features: [
        'Luxury vehicles',
        'Full insurance coverage',
        'Priority support',
        'Free pick-up and delivery',
      ],
    },
  ];

  return (
    <div className="pricing-container">
      <h1>Pricing Plans</h1>
      <p>Choose the perfect plan for your travel needs.</p>
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="pricing-card">
            <h2>{plan.name}</h2>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="choose-plan-btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
