import React, { useEffect } from "react";
import MenuBar from "../../common-components/menu-bar/Menubar";
import CardsContainer from "../../common-components/cards-container/CardsContainer";
import { useLocation } from "react-router-dom";

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
        selectedCategory={selectedCategory}
        categories={BooksCategories}
        onCategoryClick={handleCategorySelect}
      />
      {selectedCategory && (
        <CardsContainer selectedCategory={selectedCategory} />
      )}
    </div>
  );
};

export default Books;