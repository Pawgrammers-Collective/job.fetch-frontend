import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import UserProfile from './Components/UserProfile.jsx';
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import LandingPage from './Components/LandingPage'; 


function App(props) {
  console.log(props)

  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route
            exact path="/Home"
            element={<Home />}
            >
          </Route>
          <Route
            exact
            path="/"
            element={<LandingPage />} 
          />
          <Route
            exact path="/profile"
            element={<UserProfile />}
            >
          </Route>
          <Route 
            exact path="/about-us"
            element={<AboutUs />}
            >
          </Route>
        </Routes>
      <Footer />
    </Router>
    </>
  )
}
export default App;