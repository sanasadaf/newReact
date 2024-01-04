import React, { useState } from "react";
import Books from "../../pages/books/books";

const Menubar = () => {
  const [isBooksVisible, setBooksVisibility] = useState(false);

  const toggleBooksVisibility = () => {
    setBooksVisibility(!isBooksVisible);
  };

  return (
    <div>
      <button onClick={toggleBooksVisibility}>Show Books</button>
      <Menubar isVisible={isBooksVisible} 
      categories={["Fiction", "Non-Fiction", "Mystery", "Science Fiction",
       "Fantasy", "Romance", "Thriller", "Novels", "Horror"]} onToggle={() => {}} />
    </div>
  );
};

export default Menubar;
