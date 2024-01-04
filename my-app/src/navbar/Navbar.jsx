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

  return (
    <div className="app-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="logo-link">
              <img src={Image} alt="Logo" className="logo" />
            </Link>
          </li>
          <li className="nav-item" onClick={() => toggleMenuBar("Clothes")}>
            <span className="nav-items">Clothes</span>
          </li>
          <li className="nav-item" onClick={() => toggleMenuBar("Books")}>
            <span className="nav-items">Books</span>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="cart">CART</Link>
          </li>
          <li className="nav-item cart-icon">
            <Link to="/cart-icon" className="cart-icon"><GrCart /></Link>
          </li>
          <MenuBar
            categories={getCategories()}
            isVisible={isMenuBarVisible}
            onToggle={toggleMenuBar}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
