
import React, { useState } from "react";
import MenuBar from "../../common-components/menu-bar/Menubar";

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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected category in Clothes component:", category);

  };

  return (
    <div>
      <MenuBar
        selectedCategory={selectedCategory}
        isVisible={selectedCategory !== "Clothes"}
        categories={clothingCategories}
        onCategoryClick={handleCategorySelect}
      />
    </div>
  );
};

export default Clothes;