import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import CustomCursor from "./Pages/Home/CustomCursor";
import ScrollProgress from "./Pages/Home/ScrollProgress";
import { BackToTop } from "./Pages/Home/ScrollProgress";
import Preloader from "./Pages/Home/Preloader";

function App() {
  return (
    <div className="App">
      <Preloader />
      <CustomCursor />
      <Router>
        <div>
          <ScrollProgress />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          <BackToTop />
        </div>
      </Router>
    </div>
  );
}

export default App;
