import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      vehicle: 'Sedan',
      review:
        'I had an amazing experience with the rental service. The sedan I rented was in great condition, and the booking process was simple and fast. Highly recommend!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      vehicle: 'SUV',
      review:
        'The SUV I rented was perfect for our family road trip. Plenty of space and smooth driving. Great customer support too!',
      rating: 4,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      vehicle: 'Convertible',
      review:
        'Renting a convertible was a dream! The process was easy, and I got the car in great condition. I’ll definitely rent again for my next trip.',
      rating: 5,
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-description">
          Hear from some of our happy customers about their experience with our vehicle rental service.
        </p>
        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-info">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-vehicle">
                  <strong>Vehicle:</strong> {testimonial.vehicle}
                </p>
                <p className="testimonial-review">"{testimonial.review}"</p>
                <div className="testimonial-rating">
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
