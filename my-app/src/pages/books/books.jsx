import React, { useState } from "react";
import MenuBar from "../../common-components/menu-bar/Menubar";
import CardsContainer from "../../common-components/cards-container/CardsContainer"; 

const Books = () => {

  const BooksCategories = [
    "Fantasy",
    "Fiction",
    "Horror",
    "Mystery",
    "Novels",
    "Romance",
    "Science-Fiction",
    "Suspense",
    "Thriller",
  ];

  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected category in  component:", category);
  };


  return (
    <div style={{ display: 'flex' }}>
        <MenuBar
          selectedCategory={selectedCategory}
          categories={BooksCategories}
          onCategoryClick={handleCategorySelect}
        />
        {selectedCategory && <CardsContainer selectedCategory={selectedCategory} />}

    </div>
  );
};

export default Books;