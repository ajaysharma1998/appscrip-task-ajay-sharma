import React, { useState } from "react";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart, faUser as faRegularUser } from "@fortawesome/free-regular-svg-icons";
import Nexamart_logo from "../assets/Nexamart_logo.png";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="head-logo">
        <div className="logo">
          <img src={Nexamart_logo} alt="NexaMart Logo" />
        </div>
        <h1>NexaMart</h1>
        <div className="nav-icons">
          <button className="search-head" aria-label="Search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <Link to="/wishlist" aria-label="Wishlist">
            <FontAwesomeIcon icon={faRegularHeart} className="nav-icon wishlist-icon" />
          </Link>
          <button className="cart-head" aria-label="Cart">
            <FontAwesomeIcon icon={faBagShopping} />
          </button>
          <Link to="/login" aria-label="Login">
            <FontAwesomeIcon icon={faRegularUser} />
          </Link>
          <div className="language-selector">
            <select name="language" id="language">
              <option value="Eng">ENG</option>
              <option value="Hin">HIN</option> 
              <option value="Mar">MAR</option>
            </select>
          </div>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle Menu">
          
        </div>
      </div>
      <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
