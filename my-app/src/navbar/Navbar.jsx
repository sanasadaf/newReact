import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";
import Image from "../assets/homepageImage/images (2).jpg";
import { GrCart } from "react-icons/gr";
const Navbar = ({ onSelectCategory, selectedCategory }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  React.useEffect(() => {
    const isHomePage = location.pathname === '/';
    const isCartPage = location.pathname === '/cart';
    
    if (isHomePage || isCartPage) {
      onSelectCategory(null);
    }
  }, [location.pathname, onSelectCategory]);
  return (
    <div className="app-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="logo-link">
              <img src={Image} alt="Logo" className="logo" />
            </Link>
          </li>
          <li
            className={`nav-item clothes ${
              selectedCategory === "Clothes" ? "active-tab" : ""
            }`}
            onClick={() => handleCategoryClick("Clothes")}
          >
            <Link to="/clothes" className="nav-items">
              Clothes
            </Link>
          </li>
          <li
            className={`nav-item books ${
              selectedCategory === "Books" ? "active-tab" : ""
            }`}
            onClick={() => onSelectCategory("Books")}
          >
            <Link to="/books" className="nav-items">
              Books
            </Link>
          </li>
          <li className={`nav-item ${selectedCategory === "Cart" ? "active-tab" : ""}`} onClick={() => handleCategoryClick("Cart")}>
            <Link to="/cart" className="cart">CART</Link>
          </li>

          <li className="nav-item cart-icon">
            <Link to="/cart-icon" className="cart-icon">
              <GrCart />
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
