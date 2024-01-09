import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Navbar from '../src/navbar/Navbar';
import Clothes from './pages/clothes/ClothesPage';
import { useState } from 'react';
import Books from './pages/books/books';
import Toast from './common-components/toast/Toast';
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
        <Route path="/clothes" element={<Clothes />} />
<Route path="/books" element={<Books />} />
      </Routes>
      <Toast/>

    </Router>

  );
}
export default App;