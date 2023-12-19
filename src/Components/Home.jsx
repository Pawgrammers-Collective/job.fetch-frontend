/* eslint-disable react/prop-types */
import React from 'react';
import CoverLetter from './CoverLetter';
import JobAccordian from './JobAccordian';
import JobCard from './JobCard';
import { useAuth0 } from '@auth0/auth0-react';

function Home(props) {
  const { isAuthenticated } = useAuth0();
  console.log(props.jobs);

  return (
    <>
      <h1>Home</h1>

      {isAuthenticated && (
        <>
       
          <JobAccordian />

         
          <JobCard />


          <CoverLetter />
        </>
      )}

      {!isAuthenticated && (
        <p>Login to view content</p>
      )}
    </>
  );
}

export default Home;
