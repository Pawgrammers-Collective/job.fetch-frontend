/* eslint-disable react/prop-types */
import React, { useState } from "react";
import CoverLetter from "./CoverLetter";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm.jsx";
import { useAuth0 } from "@auth0/auth0-react";

function Home(props) {
  const { isAuthenticated } = useAuth0();
  console.log(props);
  return (
    <>
      <h1 style={{margin: '0', textAlign: 'center'}}>Home</h1>

      {isAuthenticated ? (
        <>
      <div style={{marginLeft: '46%'}}>
          <SearchForm handleSearch={props.handleSearch} />
        </div>
          <div
            style={{
              maxHeight: "700px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div>
              <JobCard
                job={props.jobs}
                generateCL={props.generateCL}
                handleSave={props.handleSave}
              />
            </div>
            <div>
              <CoverLetter 
                job={props.jobs}
                coverLetter={props.coverLetters}
                genCLJobDesc={props.genCLJobDesc}
                saveCL={props.saveCL}/>
            </div>
          </div>
        </>
      ) : (
        <p>Login to view content</p>
      )}
    </>
  );
}

export default Home;
