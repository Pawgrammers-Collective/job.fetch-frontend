import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import UserProfile from './Components/UserProfile.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import LandingPage from './Components/LandingPage';
import SearchForm from './Components/SearchForm.jsx';
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0

const url = import.meta.env.VITE_SERVER_URL;

function App(props) {
  const [city, setCity] = useState('');
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [coverLetters, setCoverLetters] = useState([]);
  const [savedCoverLetters, setSaveCoverLetters] = useState([]);

  const { getIdTokenClaims } = useAuth0(); // Destructure useAuth0 to get getIdTokenClaims

  async function handleSaveCoverLetter(jobTitle, jobDescription) {
    try {
      const tokenClaims = await props.auth0.getIdTokenClaims(); // Get the token using getIdTokenClaims
      const token = tokenClaims.__raw;

      const response = await axios.get(`${url}/cover`, {
        params: {
          jobTitle,
          jobDescription,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCoverLetters(response.data);
      console.log('Cover letter get', response);
    } catch (error) {
      console.error('Error generating cover letter:', error);
    }
  }

  async function getJobs(city) {
    try {
      const tokenClaims = await getIdTokenClaims(); // Get the token using getIdTokenClaims
      const token = tokenClaims.__raw;

      const response = await axios.get(`${url}/jobs?location=${city}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setJobs(response.data);
    } catch (error) {
      console.error('Error getting jobs:', error.message);
    }
  }

  function handleSave(job) {
    console.log(job);
    setSavedJobs(job);
    saveJob(job);
  }

  async function saveJob(job) {
    console.log(job);
    try {
      const tokenClaims = await getIdTokenClaims(); // Get the token using getIdTokenClaims
      const token = tokenClaims.__raw;

      let response = await axios.post(
        `${url}/jobs`,
        job,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Server Response', response.data);
      setSavedJobs([...savedJobs, response.data]);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getSavedJobs() {
    try {
      const tokenClaims = await getIdTokenClaims(); // Get the token using getIdTokenClaims
      const token = tokenClaims.__raw;

      let response = await axios.get(`${url}/jobs/saved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setSavedJobs(response.data);
    } catch (error) {
      console.error('Error getting jobs:', error.message);
    }
  }
  function handleSearch(searchInput) {
    setCity(searchInput);
    getJobs(searchInput);
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exacts path="/" element={<LandingPage />} />
          <Route
            exact
            path="/Home"
            element={
              <Home
                jobs={jobs}
                onSaveCoverLetter={handleSaveCoverLetter}
                coverLetters={coverLetters}
                handleSave={handleSave}
              />
            }
          />
          <Route
            exact
            path="/search"
            element={<SearchForm handleSearch={handleSearch} />}
          />
          <Route
            exact
            path="/profile"
            element={<UserProfile getSavedJobs={getSavedJobs} savedJobs={savedJobs} />}
          />
          <Route exact path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
