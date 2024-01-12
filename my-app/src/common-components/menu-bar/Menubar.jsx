import React from 'react';
import './Menubar.css';
import appStore from '../../store/Store.jsx';

const MenuBar = ({ categories, onCategoryClick }) => {
  const categoriesToRender = categories;

  return (
    <div className="menu-bar">
      {categoriesToRender.map((category, index) => (
        <div
          key={index}
          className={`menu-item ${
            appStore.selectedCategory === category ? 'active' : ''
          }`}
          onClick={() => {
            appStore.setSelectedCategory(category);
            onCategoryClick(category); 
          }}
        >
          <span className="menu-item-label">{category}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuBar;