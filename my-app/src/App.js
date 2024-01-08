import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Navbar from './navbar/Navbar';
import Clothes from './pages/clothes/clothes';
import { useState } from 'react';
import Books from './pages/books/books';
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <Router>
      <Navbar onSelectCategory={handleCategorySelect} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/clothes" element={<Clothes />} />
<Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}
export default App;