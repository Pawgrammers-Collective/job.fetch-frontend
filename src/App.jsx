/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import NavBarButtons from './Components/buttons/NavBarButtons';
// import Footer from './Footer';
// import AboutUs from './Components/AboutUs';
// import Login from './Components/buttons/Login.jsx';
// import Logout from './Components/buttons/Logout.jsx';
import axios from 'axios';
// import Profile from './Components/Profile';



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
            exact path="/profile"
            element={<NavBarButtons />}
            >
          </Route>
        </Routes>
      {/* <Footer /> */}
    </Router>
      {/* <button onClick={fetchDogs}>Get Some Dogs</button>
      <AuthButtons/>
      <hr />
      {
        props.auth0.isAuthenticated &&
        <>
          <Dogs/>
        </>
      }
       */}
    </>
  );
}
export default App;