/* eslint-disable react/prop-types */
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
import { withAuth0 } from '@auth0/auth0-react';

const url = import.meta.env.VITE_SERVER_URL;

function App(props) {
  const [city, setCity] = useState('');
  const [jobs, setJobs] = useState([]);
  const [newsJob, setNewsJob] = useState('');
  const [savedJobs, setSavedJobs] = useState([]);

  const [coverLetters, setCoverLetters] = useState([]);
  const [savedCoverLetters, setSaveCoverLetters] = useState([]);
  const [interviewQuestion, setInterviewQuestion] = useState('');

  async function handleSaveCoverLetter(jobTitle, jobDescription) {
    if (props.auth0.isAuthenticated) {
      let claim = await props.auth0.getIdTokenClaims();
      console.log(claim)
      let token = claim.__raw;
      const config = {
        headers: { "Authorization": `Bearer ${token}` },
        method: "get",
        url: `${url}/cover`,
        // If this doesn't work prob the params
        params: {
          jobTitle,
          jobDescription,
        }
      }
      try {
        const response = await axios(config);
        setCoverLetters(response.data);
        console.log('Cover letter get', response);

      } catch (error) {
        console.error('Error generating cover letter:', error);
      }
    }}

    async function getInterviewQuestions(request, response) {
      if (props.auth0.isAuthenticated) {
        let claim = await props.auth0.getIdTokenClaims();
        console.log(claim)
        let token = claim.__raw;
        const config = {
          headers: { "Authorization": `Bearer ${token}` },
          method: "get",
          url: `${url}/interview`,
        }
        try {
          response = await axios(config);
          console.log(response.data);
          // setInterviewQuestion(response.data)
        } catch (e) {
          console.log('frontend interview questions no worky :(', e)
        }
      }
    }



  function handleSearch(searchInput) {
    console.log(searchInput);
    setCity(searchInput);
    getJobs(searchInput);
  }


    async function getJobs(city) {
      console.log(url);
      if (props.auth0.isAuthenticated) {
        let claim = await props.auth0.getIdTokenClaims();
        console.log(claim)
        let token = claim.__raw;
        const config = {
          headers: { "Authorization": `Bearer ${token}` },
          method: "get",
          url: `${url}/jobs?location=${city}`
        }
        try {
          let response = await axios(config);
          console.log(response.data);
          setJobs(response.data);
        } catch (error) {
          console.error('Error getting jobs:', error.message);
        }
      }
    }


    function handleSave(job) {
      console.log(job);
      // setSavedJobs(job);
      saveJob(job);
    }

    async function saveJob(job) {
      console.log(job);
      if (props.auth0.isAuthenticated) {
        let claim = await props.auth0.getIdTokenClaims();
        console.log(claim)
        let token = claim.__raw;
        const config = {
          headers: { "Authorization": `Bearer ${token}` },
          method: "post",
          url: `${url}/jobs`,
          data: job
        }
        try {
          let response = await axios(config);
          console.log("Server Response", response.data);
          // setSavedJobs(... savedJobs , response.data);
        } catch (error) {
          console.error(error.message);
        }
      }
    }

    async function getSavedJobs() {
      if (props.auth0.isAuthenticated) {
        let claim = await props.auth0.getIdTokenClaims();
        console.log(claim)
        let token = claim.__raw;
        const config = {
          headers: { "Authorization": `Bearer ${token}` },
          method: "get",
          url: `${url}/jobs/saved`,
        }
        try {
          let response = await axios(config);
          console.log(response.data);
          setSavedJobs(response.data);
        } catch (error) {
          console.error('Error getting jobs:', error.message);
        }
      }
    }


    async function deleteSavedJob(job) {
      console.log('deleting ', { job });
      if (props.auth0.isAuthenticated) {
        let claim = await props.auth0.getIdTokenClaims();
        console.log(claim)
        let token = claim.__raw;
        const config = {
          headers: { "Authorization": `Bearer ${token}` },
          method: "delete",
          url: `${url}/jobs/${job._id}`,
        }
        try {
          let response = await axios(config);
          console.log(response.data);
          getSavedJobs();
        } catch (error) {
          console.error('Error deleting jobs:', error.message);
        }
      }
    }


  async function deleteSavedCL(cover){ 
    console.log('deleting ',{cover});
    try {
      let response = await axios.delete(`${url}/jobs/${cover._id}`);
      console.log(response.data);
      getSavedJobs();
    } catch(error) {
        console.error('Error deleting Cover Letter:', error.message);
    }
  }

  async function getNews(company) {
    let claim = await props.auth0.getIdTokenClaims();
    console.log(claim)
    let token = claim.__raw;
    const config = {
      headers: { "Authorization": `Bearer ${token}` },
      method: "get",
      url: `${url}/news`,
      data: company,
    }
    console.log(config);
    try {
      let response = await axios.get(config);
      console.log(response);
    } catch(e) {
      console.log("no news for you :(", e);
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

              element={<Home
                jobs={jobs}

                onSaveCoverLetter={handleSaveCoverLetter} coverLetters={coverLetters} handleSave={handleSave} handleSearch={handleSearch} getQuestions={getInterviewQuestions} getNews={getNews}


              />}
            />
            <Route
              exact path="/profile"
              element={<UserProfile
                getSavedJobs={getSavedJobs}
                savedJobs={savedJobs}
                deleteSavedJob={deleteSavedJob} />}
            />

            <Route exact path ="/news" />

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

  export default withAuth0(App);

