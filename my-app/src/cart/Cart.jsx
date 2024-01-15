import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import appStore from "../store/Store";
import Modal from "../common-components/Modal/modal";
import "./Cart.css";

const Cart = observer(({ onClose }) => {
  const cartItems = appStore.getCartItems();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      appStore.clearCart();
    };
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    appStore.clearCart();
    onClose(); 
    navigate("/"); 
  };

  return (
    <Modal onClose={onClose}>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <table className="cart-table">
              <thead>
                <tr className="cart-columns">
                  <th className="cart-column">Item Title</th>
                  <th className="cart-column">Quantity</th>
                  <th className="cart-column">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr className="cart-li" key={item.id}>
                    <td className="cart-column">{item.title}</td>
                    <td className="cart-column">{item.quantity}</td>
                    <td className="cart-column">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-total">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
});

export default Cart;
