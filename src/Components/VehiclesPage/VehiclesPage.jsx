import React from 'react';
import './VehiclesPage.css';

const VehiclesPage = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Sedan',
      description: 'Comfortable and fuel-efficient cars for city rides.',
      price: '$50/day',
    },
    {
      id: 2,
      name: 'SUV',
      description: 'Spacious and powerful vehicles for family trips.',
      price: '$80/day',
    },
    {
      id: 3,
      name: 'Convertible',
      description: 'Stylish and fun rides for a luxurious experience.',
      price: '$90/day',
    },
    {
      id: 4,
      name: 'Pickup Truck',
      description: 'Heavy-duty vehicles for transporting goods.',
      price: '$100/day',
    },
  ];

  return (
    <div className="vehicles-container">
      <h1>Our Vehicles</h1>
      <p>Explore a wide range of vehicles available for rent.</p>
      <div className="vehicles-grid">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <h2>{vehicle.name}</h2>
            <p>{vehicle.description}</p>
            <p className="vehicle-price">{vehicle.price}</p>
            <button className="rent-now-btn">Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclesPage;
