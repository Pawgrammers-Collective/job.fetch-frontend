import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import AuthButtons from './Components/buttons/AuthButtons';
import AboutUs from './Components/AboutUs';
import UserProfile from './Components/UserProfile.jsx';
import Footer from './Footer.jsx'
import Header from './Header.jsx'


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
            exact path="/"
            element={<AuthButtons />}
            >
          </Route>
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