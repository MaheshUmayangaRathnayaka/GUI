import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        RideRent
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/vehicles">Vehicles</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
