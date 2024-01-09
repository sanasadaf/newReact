import React from "react";
import './Menubar.css';

const MenuBar = ({ categories }) => {
  return (
    <div className="menu-bar">
      {categories.map((category, index) => (
        <div key={index} className="menu-item">
          <span className="menu-item-label">{category}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
