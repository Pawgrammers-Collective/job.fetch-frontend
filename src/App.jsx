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
  const [savedJobs, setSavedJobs] = useState([]);

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

  function handleSave(job) {
    console.log(job);
    setSavedJobs(job);
    saveJob(job);
  }

  async function saveJob(job){
    console.log(job);
      try {
        let response = await axios.post(`${url}/jobs`, job);
        console.log("Server Response", response.data);
        setSavedJobs(... savedJobs , response.data);
      } catch (error) {
        console.error(error.message);
      }
    }

  async function getSavedJobs(){
    try {
      let response = await axios.get(`${url}/jobs/saved`);
      console.log(response.data);
      setSavedJobs(response.data);
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
            exacts
            path="/"
            element={<LandingPage />} 
          />
          <Route
            exact path="/Home"
            element={<Home jobs = {jobs} handleSave = {handleSave} />}
            >
          </Route>
          <Route
            exact
            path="/search"
            element={<SearchForm handleSearch = {handleSearch} />} 
          />
          <Route
            exact path="/profile"
            element={<UserProfile getSavedJobs = {getSavedJobs} savedJobs = {savedJobs} />}
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