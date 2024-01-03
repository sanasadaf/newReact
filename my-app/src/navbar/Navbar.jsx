import React from "react";
import { Link } from 'react-router-dom';
import Image from '../assets/homepageImage/images (2).jpg';

const Navbar = () => {
  return (
    <div className="app-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="logo-link">
              <img src={Image} alt="Logo" className="logo" />
            </Link>
          </li>
          <li className="nav-item clothes">
            <Link to="/clothes" className="nav-items">Clothes</Link>
          </li>
          <li className="nav-item books">
            <Link to="/books" className="nav-items">Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="cart">CART</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
