import React from "react";
import './Menubar.css'
const MenuBar = ({ selectedCategory, isVisible, categories, onCategoryClick }) => {
    console.log("Is Visible:", isVisible);
  const categoriesToRender = isVisible ? categories || [] : [];
  return (
    <div className={`menu-bar ${isVisible ? "visible" : ""}`}>
      {categoriesToRender.map((category, index) => (
        <div key={index} className="menu-item" onClick={() => onCategoryClick(category)}>
          <span className="menu-item-label">{category}</span>
        </div>
      ))}
    </div>
  );
};
export default MenuBar;