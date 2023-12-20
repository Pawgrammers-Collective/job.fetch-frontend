// App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  const [city, setCity] = useState('');
  const [jobs, setJobs] = useState([]);
  const [coverLetters, setCoverLetters] = useState({});

  async function handleSaveCoverLetter(jobId, jobTitle, jobDescription) {
    try {
      const response = await axios.get(`${url}/cover`, {
        params: {
          jobTitle,
          jobDescription,
        },
      });

      const coverLetter = response.data.coverLetter;
      setCoverLetters((prevCoverLetters) => ({
        ...prevCoverLetters,
        [jobId]: coverLetter,
      }));
    } catch (error) {
      console.error('Error generating cover letter:', error);
    }
  }

  function handleSearch(searchInput) {
    console.log(searchInput);
    setCity(searchInput);
    getJobs(city);
  }

  async function getJobs(city) {
    console.log(url);
    try {
      let response = await axios.get(`${url}/jobs?location=${city}`);
      console.log(response.data);
      setJobs(response.data);
    } catch (error) {
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
            element={<Home jobs={jobs} onSaveCoverLetter={handleSaveCoverLetter} coverLetters={coverLetters} />}
          />
          <Route
            exact
            path="/search"
            element={<SearchForm handleSearch={handleSearch} />}
          />
          <Route
            exact path="/profile"
            element={<UserProfile />}
          />
          <Route
            exact path="/about-us"
            element={<AboutUs />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
