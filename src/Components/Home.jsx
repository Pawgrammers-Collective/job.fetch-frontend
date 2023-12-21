import React, { useState } from "react";
import CoverLetter from "./CoverLetter";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './styles/Home.module.css';

function Home(props) {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <h1 style={{margin: '0', textAlign: 'center', background: 'black'}}>Home</h1>

      {isAuthenticated ? (
        <>
      <div style={{marginLeft: '46%'}}>
          <SearchForm handleSearch={props.handleSearch} />
        </div>
          <div
          className={styles.HomeDiv}
            style={{
              // maxHeight: "700px",
              // overflowY: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: 'center',
              gap: '10px',
              marginTop: '45px',
              postion: 'relative'
            }}
          >
            <div>
            {/* <h4 style={{background: 'white', display: 'inline-block'}}>Jobs near you!</h4> */}
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
