import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "../src/navbar/Navbar";
import Clothes from "./pages/clothes/ClothesPage";
import Books from "./pages/books/books";
import Toast from "./common-components/toast/Toast";
import appStore from "./store/Store";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const showSuccessToast = () => {
    appStore.showSuccessToast();
  };

  return (
    <Router>
      <Navbar onSelectCategory={setSelectedTab} selectedTab={selectedTab} />
      <Routes>
        <Route path="/" element={<Homepage showSuccessToast={showSuccessToast} />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Toast />
    </Router>
  );
};

export default App;
