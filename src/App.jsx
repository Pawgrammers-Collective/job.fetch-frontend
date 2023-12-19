import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import NavBarButtons from './Components/buttons/NavBarButtons';
import AboutUs from './Components/AboutUs';
import UserProfile from './Components/UserProfile.jsx';



function App(props) {
  console.log(props)

  return (
    <>
    <Router>
        {/* <Header /> */}
        <Routes>
          <Route
            exact path="/Home"
            element={<Home />}
            >
          </Route>
          <Route 
            exact path="/"
            element={<NavBarButtons />}
            >
          </Route>
          <Route
            exact path="/profile"
            element={<UserProfile />}
            >
          </Route>
          <Route 
            exact path="/about"
            element={<AboutUs />}
            >
          </Route>
        </Routes>
      {/* <Footer /> */}
    </Router>
    </>
  )
}
export default App;