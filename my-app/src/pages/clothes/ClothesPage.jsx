import React from "react";
import MenuBar from "../../common-components/menu-bar/Menubar";
import CardsContainer from "../../common-components/cards-container/CardsContainer"; 

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

  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={{ display: 'flex' }}>
    <MenuBar categories={clothingCategories} onCategoryClick={handleCategorySelect} />
    {selectedCategory && <CardsContainer selectedCategory={selectedCategory} />}
  </div>
  );
};

export default Clothes;