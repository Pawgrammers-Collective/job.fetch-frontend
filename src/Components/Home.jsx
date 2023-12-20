import React, { useState } from "react";
import CoverLetter from "./CoverLetter";
import JobCard from "./JobCard";
import { useAuth0 } from "@auth0/auth0-react";

function Home(props) {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <h1>Home</h1>

      {isAuthenticated ? (
        <div
          style={{ maxHeight: "700px", overflowY: "auto", marginLeft: "40px" }}
        >
          <JobCard
            job={props.jobs}
            onSaveCoverLetter={props.onSaveCoverLetter}
          />

          <CoverLetter 
          job={props.jobs}
           coverLetter={props.coverLetters} />
        </div>
      ) : (
        <p>Login to view content</p>
      )}
    </>
  );
}

export default Home;
