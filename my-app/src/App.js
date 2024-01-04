import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
<<<<<<< HEAD
import Navbar from './navbar/navbar';
import Clothes from './pages/clothes/Clothes';
import { useState } from 'react';
=======
import "./navbar/NavBar.css";
import Cards from './common-components/cards/Cards';
import Menubar from './common-components/menu-bar/Menubar';
const App = () => {
  return (
    <>
>>>>>>> cc8fb1f3094c0197b648307729fdf2deb92221c1

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
<<<<<<< HEAD
      <Navbar onSelectCategory={handleCategorySelect} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/clothes" element={<Clothes />} />
{/* <Route path="/books" element={<Books />} /> */}
=======
          <Navbar/>
          <Menubar/>
           <Books />

          <Cards/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/clothes" element={<Clothes />} />
>>>>>>> cc8fb1f3094c0197b648307729fdf2deb92221c1
      </Routes>
    </Router>
  );
}

export default App;

