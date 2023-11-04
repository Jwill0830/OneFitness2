import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Make sure to create a corresponding CSS file to style your navbar

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={handleLogoClick}>
          <img src="/path-to-your-logo.png" alt="OneFitness logo" /> {/* Replace with your actual logo path */}
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/gym-portal" className="navbar-links">Gym Portal</Link>
            {/* Dropdown Menu Here if needed */}
          </li>
          <li className="navbar-item">
            <Link to="/equipment-marketplace" className="navbar-links">Equipment Marketplace</Link>
            {/* Dropdown Menu Here if needed */}
          </li>
          <li className="navbar-item">
            <Link to="/content-portal" className="navbar-links">Content Portal</Link>
            {/* Dropdown Menu Here if needed */}
          </li>
          {/* ... other navbar items ... */}
          <li className="navbar-item">
            <Link to="/nutrition-shop" className="navbar-links">Nutrition Shop</Link>
            {/* Dropdown Menu Here if needed */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

