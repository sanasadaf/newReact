import React from "react";
import { observer } from 'mobx-react';
import categoryStore from "../../store/categoryStore";
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
    "Suspense",
    "Thriller",
  ];

  const handleCategorySelect = (category) => {
    categoryStore.setSelectedCategory(category);
  };

  const images = categoryStore.getCategoryImages(categoryStore.selectedCategory);

  return (
    <div>
      <MenuBar
        selectedCategory={categoryStore.selectedCategory}
        isVisible={categoryStore.selectedCategory !== "Books"}
        categories={BooksCategories}
        onCategoryClick={handleCategorySelect}
      />
      {images.map((imageName, index) => (
        <img
          key={index}
          // src={require(`./assets/BooksImages/${imageName}`)}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default observer(Books);
