
// import Navbar from "./navbar/navbar";
// import React from "react";
// import Homepage from "./pages/homepage/Homepage";

// function App() {
//   return (
//     <>
//   <Navbar/>
//     <Homepage/>
//     </>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './navbar/navbar';
import Navbar from './navbar/Navbar'
import Homepage from './pages/homepage/Homepage';
// import Clothes from './pages/clothes'; // Adjust the path based on your project structure
import "./navbar/NavBar.css";
import Cards from './common-components/cards/Cards';
const App = () => {
  return (
    <>
    {/* <Navbar /> */}

    <Router>
          <Navbar />
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
