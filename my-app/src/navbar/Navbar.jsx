import React, { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react";
import "./NavBar.css";
import Image from "../assets/homepageImage/images (2).jpg";
import { GrCart} from "react-icons/gr"; 
import appStore from "../store/Store";
import Cart from "../cart/Cart";
import Toast from "../common-components/toast/Toast";

const NavBar = observer(() => {
  const location = useLocation();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [toastShow,setToastShow] = useState(false)

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);
  useEffect(() => {
    const isHomePage = location.pathname === "/";
    const isClothesPage = location.pathname === "/clothes";
    const isBooksPage = location.pathname === "/books";

    if (isHomePage) {
      appStore.setSelectedTab("home");
    } else if (isClothesPage) {
      appStore.setSelectedTab("clothes");
    } else if (isBooksPage) {
      appStore.setSelectedTab("books");
    } else {
      appStore.setSelectedTab(null);
    }
  }, [location.pathname]);
  useEffect(() => {
    if(toastShow && location.pathname == "/"){
      setTimeout(() => {
        setToastShow(false)
      },4000)
    }
  },[toastShow])

  return (
    <>
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
          >
            <Link to="/clothes" className="nav-items">
              Clothes
            </Link>
          </li>
          <li
            className={`nav-item books ${
              appStore.selectedTab === "books" ? "active-tab" : ""
            }`}
          >
            <Link to="/books" className="nav-items">
              Books
            </Link>
          </li>
          <li className="nav-item cart-icon">
          <div className="cart-link" onClick={openCartModal}>
            <div className="cart-icon-wrapper">
              <GrCart className="cart-icon" />
              <span className="cart-count">{appStore.cartItems.length}</span>
            </div>
          </div>
        </li>
         
        </ul>
        {isCartModalOpen && <Cart
         onClose={closeCartModal} 
         setToastShow={setToastShow}
         />}

      </nav>
    </div>
    {toastShow && <Toast showSuccess={toastShow} setShowSuccess={setToastShow} />}
         </>
  );
});

export default NavBar;