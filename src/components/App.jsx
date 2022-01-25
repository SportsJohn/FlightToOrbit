import React from "react";
import Webshop from "./Webshop";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Crewlibrary from "./Crewlibrary";
import Inventory from "./Inventory";
import Locationtracker from "./Locationtracker";
import Entertainment from "./Entertainment";
import Footer from "./Footer";

// CrewLibrary locationtracker Inventory Entertainment

const App = () => {
  return (
    <div className="siteHolder">
      <Router>
        {/* <Nav /> */}
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/webshop"> Webshop</Link>
          <Link to="/crewlibrary"> Crewlibrary</Link>
          <Link to="/locationtracker"> Locationtracker</Link>
          <Link to="/inventory"> Inventory</Link>
          <Link to="/entertainment"> Entertainment</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Home />} />
          <Route path="/Crewlibrary" element={<Crewlibrary />} />
          <Route path="/locationtracker" element={<Locationtracker />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/webshop" element={<Webshop />} />
          <Route path="*" element={<ErrorPage />} />/
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
