
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import "./navbar/NavBar.css";
// import Cards from './common-components/cards/Cards';
// import Menubar from './common-components/menu-bar/Menubar'
import Navbar from './navbar/navbar';
const App = () => {
  return (
    <>

    <Router>
      <Navbar/>
          {/* <Menubar/> */}
          {/* <Cards/> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/clothes" element={<Clothes />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
