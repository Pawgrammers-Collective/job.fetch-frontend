

import React, { useState } from "react";
import CoverLetter from "./CoverLetter";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm.jsx";
import { useAuth0 } from "@auth0/auth0-react";

function Home(props) {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <h1>Home</h1>

      {isAuthenticated ? (
        <>
      <div style={{marginLeft: '46%'}}>
          <SearchForm handleSearch={props.handleSearch} />

        </div>
          <div
            style={{
          
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div>
              <JobCard
                job={props.jobs}
                onSaveCoverLetter={props.onSaveCoverLetter}
                handleSave={props.handleSave}
              />
            </div>
            <div>
              <CoverLetter job={props.jobs} coverLetter={props.coverLetters} />
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