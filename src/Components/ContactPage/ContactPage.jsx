import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Reach out to us with any questions or feedback.</p>
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Phone:</strong> +94 123456789</p>
          <p><strong>Email:</strong> support@riderent.com</p>
          <p><strong>Address:</strong> 123, RideRent Lane, Kurunegala, Sri Lanka</p>
        </div>
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
