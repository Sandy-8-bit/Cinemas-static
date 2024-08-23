import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import sitelogo from "./SiteLogos.svg";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={sitelogo} alt='Site Logo'></img>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movie</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/private-screening">Private Screening</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;