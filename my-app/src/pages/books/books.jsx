import React, { useState } from "react";
import MenuBar from "../../common-components/menu-bar/Menubar";

const Books = () => {
  const booksCategories = [
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

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected category in Books component:", category);
  };

  return (
    <div>
      <MenuBar
        selectedCategory={selectedCategory}
        categories={booksCategories}
        onCategoryClick={handleCategorySelect}
      />
    </div>
  );
};

export default Books;
