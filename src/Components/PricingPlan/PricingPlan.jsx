import React from 'react';
import './PricingPlan.css';

const PricingPlan = () => {
  const plans = [
    {
      id: 1,
      name: 'Economy',
      price: '$30/day',
      features: [
        'Compact and fuel-efficient',
        'Ideal for city drives',
        'Includes basic insurance',
      ],
    },
    {
      id: 2,
      name: 'Standard',
      price: '$50/day',
      features: [
        'Comfortable and spacious',
        'Great for family trips',
        'Includes GPS and roadside assistance',
      ],
    },
    {
      id: 3,
      name: 'Premium',
      price: '$80/day',
      features: [
        'Luxury and style',
        'Perfect for business and leisure',
        'Full insurance coverage included',
      ],
    },
  ];

  return (
    <section className="pricing-plan">
      <div className="container">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="section-description">
          Choose a pricing plan that fits your budget and needs. All plans come with flexible options and great benefits.
        </p>
        <div className="plans-list">
          {plans.map((plan) => (
            <div className="plan-card" key={plan.id}>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-price">{plan.price}</p>
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="plan-feature">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="select-plan-btn">Select Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
