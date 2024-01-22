import React, { useState, useEffect } from "react";
import MenuBar from "../../common-components/menu-bar/Menubar";
import CardsContainer from "../../common-components/cards-container/CardsContainer";
import { useLocation } from "react-router-dom";

const Clothes = () => {
  const clothingCategories = [
    "T-Shirts",
    "Shirts",
    "Sweaters",
    "Jeans",
    "Pants",
    "Skirts",
    "Dresses",
    "Boys' Uniform",
    "Girls' Uniform",
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/");
    setSelectedCategory(path[1] || null);
  }, [location.pathname]);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={{ display: "flex" }}>
      <MenuBar
        categories={clothingCategories}
        onCategoryClick={handleCategorySelect}
        selectedCategory={selectedCategory} 
      />
      {selectedCategory && (
        <CardsContainer selectedCategory={selectedCategory} />
      )}
    </div>
  );
};

export default Clothes;
