import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Navbar from './navbar/Navbar';
import Clothes from './pages/clothes/ClothesPage';
import Books from './pages/books/Books';
import { MobxProvider } from 'mobx-react';
import categoryStore from './CategoryStore';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
<Navbar onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/clothes" element={<Clothes />} />
      </Routes>
    </Router>
  );
}

export default App;
