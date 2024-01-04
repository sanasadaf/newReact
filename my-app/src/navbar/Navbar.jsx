<<<<<<< HEAD

import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import Image from "../assets/homepageImage/images (2).jpg";
import { GrCart } from "react-icons/gr";

const Navbar = ({ onSelectCategory }) => {
=======
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import MenuBar from "../common-components/menu-bar/Menubar";
const Navbar = () => {
  const [isMenuBarVisible, setMenuBarVisibility] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleMenuBar = (category) => {
    setMenuBarVisibility(!isMenuBarVisible);
    setSelectedCategory(category);
  };

  const getCategories = () => {
    switch (selectedCategory) {
      case "Books":
        return ["Fiction", "Suspense", "Mystery", "Science Fiction", "Fantasy", "Romance", "Thriller", "Novels", "Horror"];
      case "Clothes":
        return ["T-Shirts", "Shirts", "Sweaters", "Jeans", "Pants", "Skirts", "Dresses", "Boys' Uniform", "Girls' Uniform", "Accessories"];
      default:
        return [];
    }
  };

>>>>>>> cc8fb1f3094c0197b648307729fdf2deb92221c1
  return (
    <div className="app-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="logo-link">
              <img src={Image} alt="Logo" className="logo" />
            </Link>
          </li>
<<<<<<< HEAD
          <li className="nav-item clothes" onClick={() => onSelectCategory("Clothes")}>
  <Link to="/clothes" className="nav-items">Clothes</Link>
</li>
<li className="nav-item books" onClick={() => onSelectCategory("Books")}>
  <Link to="/books" className="nav-items">Books</Link>
</li>

=======
          <li className="nav-item" onClick={() => toggleMenuBar("Clothes")}>
            <span className="nav-items">Clothes</span>
          </li>
          <li className="nav-item" onClick={() => toggleMenuBar("Books")}>
            <span className="nav-items">Books</span>
          </li>
>>>>>>> cc8fb1f3094c0197b648307729fdf2deb92221c1
          <li className="nav-item">
            <Link to="/cart" className="cart">CART</Link>
          </li>
          <li className="nav-item cart-icon">
            <Link to="/cart-icon" className="cart-icon"><GrCart /></Link>
          </li>
<<<<<<< HEAD
=======
          <MenuBar
            categories={getCategories()}
            isVisible={isMenuBarVisible}
            onToggle={toggleMenuBar}
          />
>>>>>>> cc8fb1f3094c0197b648307729fdf2deb92221c1
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
