
import React, { useState } from "react";
import MenuBar from "../../common-components/menu-bar/Menubar";

const Books = () => {
  const BooksCategories = [
    "Fantasy",
    "Fiction",
    "Horror",
    "Mystery",
    "Novels",
    "Romance",
    "Science-Fiction",
    "Suspence",
    "Thriller",
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
        isVisible={selectedCategory !== "Books"}
        categories={BooksCategories}
        onCategoryClick={handleCategorySelect}
      />
    </div>
  );
};

export default Books;
