import React from "react";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser as faRegularUser } from "@fortawesome/free-regular-svg-icons";
import Nexamart_logo from "../assets/Nexamart_logo.png";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <header>
      <div className="head-logo">
        <div className="logo">
          <img src={Nexamart_logo} alt="Logo" />
        </div>
        <h1>NexaMart</h1>
        <div className="nav-icons">
          <a href="#" className="search-head">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
          <Link to="/wishlist">
            <FontAwesomeIcon icon={faRegularHeart} className="nav-icon wishlist-icon" />
          </Link>
          <a href="#" className="cart-head">
            <FontAwesomeIcon icon={faBagShopping} />
          </a>
          <Link to="/login">
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
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
