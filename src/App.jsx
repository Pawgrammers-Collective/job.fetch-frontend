import React, { useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Profile from "./Components/Profile";


function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>


          <Route exact path="/profile" element={<Profile />}></Route>


          <Route exact path="/about-us" element={<AboutUs />}></Route>







        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
