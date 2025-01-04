import React from 'react';
import './PopularVehicles.css';

const PopularVehicles = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Sedan',
      image: '/images/sedan.jpg',
      description: 'Comfortable and efficient for city drives.',
      price: '$40/day',
    },
    {
      id: 2,
      name: 'SUV',
      image: '/images/suv.jpg',
      description: 'Spacious and perfect for road trips.',
      price: '$80/day',
    },
    {
      id: 3,
      name: 'Convertible',
      image: '/images/convertible.jpg',
      description: 'For those who want to enjoy the open air.',
      price: '$100/day',
    },
    {
      id: 4,
      name: 'Pickup Truck',
      image: '/images/pickup.jpg',
      description: 'Great for moving or carrying heavy loads.',
      price: '$90/day',
    },
  ];

  return (
    <section className="popular-vehicles">
      <div className="container">
        <h2 className="section-title">Popular Vehicles</h2>
        <p className="section-description">
          Choose from our most popular vehicles, offering a great mix of comfort, utility, and performance.
        </p>
        <div className="vehicles-list">
          {vehicles.map((vehicle) => (
            <div className="vehicle-card" key={vehicle.id}>
              <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
              <div className="vehicle-info">
                <h3 className="vehicle-name">{vehicle.name}</h3>
                <p className="vehicle-description">{vehicle.description}</p>
                <p className="vehicle-price">{vehicle.price}</p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVehicles;
