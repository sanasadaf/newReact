import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Image from "../assets/homepageImage/images (2).jpg";
import { GrCart } from "react-icons/gr";

const Navbar = ({ onSelectCategory, selectedCategory }) => {
  return (
    <div className="app-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="logo-link">
              <img src={Image} alt="Logo" className="logo" />
            </Link>
          </li>
          <li className={`nav-item clothes ${selectedCategory === "Clothes" ? "active-tab" : ""}`} onClick={() => onSelectCategory("Clothes")}>
            <Link to="/clothes" className="nav-items">Clothes</Link>
          </li>
          <li className={`nav-item books ${selectedCategory === "Books" ? "active-tab" : ""}`} onClick={() => onSelectCategory("Books")}>
            <Link to="/books" className="nav-items">Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="cart">CART</Link>
          </li>
          <li className="nav-item cart-icon">
            <Link to="/cart-icon" className="cart-icon"><GrCart /></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
