import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link to="/" className="navbar-brand">
        Home
      </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Award</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Partners</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Gallary</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
