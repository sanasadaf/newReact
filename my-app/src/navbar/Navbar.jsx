import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";
import Image from "../assets/homepageImage/images (2).jpg";
import { GrCart } from "react-icons/gr";
import appStore from "../store/Store";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
 
  
  const handleCategoryClick = (category) => {
    if (appStore.selectedCategory === category) {
      appStore.setSelectedCategory(null);
    } else {
      appStore.setSelectedTab(category);
      appStore.setSelectedCategory(category);
    }
  };
  // const handleCategoryClick = (category) => {
  //   appStore.setSelectedTab(category);
  //   appStore.setSelectedCategory(category);
  // };

  useEffect(() => {
    const isHomePage = location.pathname === "/";
    const isCartPage = location.pathname === "/cart";

    if (isHomePage) {
      appStore.setSelectedTab("home");
    } else if (isCartPage) {
      appStore.setSelectedTab("cart");
    }
  }, [location.pathname]);

  useEffect(() => {
    const isClothesPage = location.pathname === "/clothes";
    const isBooksPage = location.pathname === "/books";

    if (isClothesPage && appStore.selectedTab !== "clothes") {
      appStore.setSelectedTab(null);
    } else if (isBooksPage && appStore.selectedTab !== "books") {
      appStore.setSelectedTab(null);
    }
  }, [location.pathname]);
console.log("Selected Tab:", appStore.selectedTab);
console.log("Selected Category:", appStore.selectedCategory);

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
              appStore.selectedTab === "clothes" ? "active-tab" : ""
            }`}
            onClick={() => handleCategoryClick("clothes")}
          >
            <Link to="/clothes" className="nav-items">
              Clothes
            </Link>
          </li>
          <li
            className={`nav-item books ${
              appStore.selectedTab === "books" ? "active-tab" : ""
            }`}
            onClick={() => handleCategoryClick("books")}
          >
            <Link to="/books" className="nav-items">
              Books
            </Link>
          </li>
          <li className="nav-item cart-icon">
            <Link to="/cart-icon" className="cart-icon">
              <GrCart />
            </Link>
          </li>
          <li
            className={`nav-item ${
              appStore.selectedTab === "cart" ? "active-tab" : ""
            }`}
            onClick={() => handleCategoryClick("cart")}
          >
            <Link to="/cart" className="cart">
              CART
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
