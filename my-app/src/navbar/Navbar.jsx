import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Image from '../assets/homepageImage/images (2).jpg';
import { GrCart } from "react-icons/gr";
import CommonMenuBar from "../common-components/menu-bar/Menubar";

const Navbar = () => {
  const [isCommonMenuBarVisible, setCommonMenuBarVisibility] = useState(false);
  const toggleCommonMenuBar = () => {
    setCommonMenuBarVisibility(!isCommonMenuBarVisible);
  };
  return (
    <div className="app-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="logo-link">
              <img src={Image} alt="Logo" className="logo" />
            </Link>
          </li>
          <li className="nav-item clothes" onClick={toggleCommonMenuBar}>
            <Link to="/clothes" className="nav-items">Clothes</Link>
          </li>
          <li className="nav-item books">
            <Link to="/books" className="nav-items">Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="cart">CART</Link>
            </li>
         <li className="nav-item cart-icon">
            <Link to="/cart-icon" className="cart"><GrCart />
            </Link>

          </li>
          <CommonMenuBar categories={["T-Shirts", "Shirts", "Sweaters", "Jeans",
           "Pants", "Skirts", "Dresses", "Boys' Uniform", "Girls' Uniform", "Accessories"]}
            isVisible={isCommonMenuBarVisible} onToggle={() => {}} />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
