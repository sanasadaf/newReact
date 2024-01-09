import React from "react";
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
    "Accessories"
  ];

  return (
    <div>
      <MenuBar categories={clothingCategories} />
    </div>
  );
};

export default Clothes;
