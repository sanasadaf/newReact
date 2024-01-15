import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "../src/navbar/Navbar";
import Clothes from "./pages/clothes/ClothesPage";
import Books from "./pages/books/books";
const App = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
      <>
        <Navbar
          onSelectCategory={setSelectedTab}
          selectedTab={selectedTab}
        />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/books" element={<Books />} />
        
        </Routes>
      </>
  );
};

export default App;
