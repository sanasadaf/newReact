import React from "react";
import './modal.css'
const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-container">
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        {children}
      </div>
    </div>
    </div>
  );
};

export default Modal;
