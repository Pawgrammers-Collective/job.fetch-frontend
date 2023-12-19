import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import UserProfile from './Components/UserProfile.jsx';
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import LandingPage from './Components/LandingPage'; 
import SearchForm from './Components/SearchForm.jsx';

const url = import.meta.env.VITE_SERVER_URL;

function App(props) {
  // console.log(props)
  const [city, setCity] = useState('');
  const [jobs, setJobs] = useState([]);

  function handleSearch(searchInput) {
    console.log(searchInput);
    setCity(searchInput);
    getJobs(city);
  }

  async function getJobs(city){
    console.log(url);
    try {
      let response = await axios.get(`${url}/jobs?location=${city}`);
      console.log(response.data);
      setJobs(response.data);
    } catch(error) {
        console.error('Error getting jobs:', error.message);
    }
  }
  
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<LandingPage />} 
          />
          <Route
            exact path="/Home"
            element={<Home jobs = {jobs} />}
            >
          </Route>
          <Route
            exact
            path="/search"
            element={<SearchForm handleSearch = {handleSearch} />} 
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