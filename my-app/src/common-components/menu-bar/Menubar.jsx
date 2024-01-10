import React from "react";
import './Menubar.css';
import { observer } from 'mobx-react';
import categoryStore from "../../store/categoryStore";

const MenuBar = ({ categories }) => {
  const isVisible = categoryStore.selectedCategory !== null;
  const categoriesToRender = isVisible ? categories || [] : [];

  return (
    <div className={`menu-bar ${isVisible ? 'visible' : ''}`}>
      {categoriesToRender.map((category, index) => (
        <div key={index} className="menu-item" onClick={() => categoryStore.setSelectedCategory(category)}>
          <span className="menu-item-label">{category}</span>
        </div>
      ))}
    </div>
  );
};

export default observer(MenuBar);
