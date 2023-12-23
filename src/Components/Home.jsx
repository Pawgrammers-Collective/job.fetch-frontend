/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoverLetter from "./CoverLetter";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm.jsx";
import styles from "./styles/Home.module.css";

function Home(props) {
  const { isAuthenticated } = useAuth0();
  console.log(props);
  return (
    <>
      <h1>Home</h1>
      {isAuthenticated ? (
        <>
        <div style={{marginLeft: '46%'}}>
          <SearchForm handleSearch={props.handleSearch} />
        </div>
        <Container>
        <Row className={styles.homeContainer}>
          <Col className={styles.cardsContainer}>
            <h3 className={styles.cardsHeader}> Fetched Jobs &#x1F436; </h3>
            <JobCard
              jobs={props.jobs}
              generateCL={props.generateCL}
              saveJob={props.saveJob}
              newsArticle={props.newsArticle}
              getNews={props.getNews}
            />
          </Col>
          <Col className={styles.letterContainer}>
            <h3 className={styles.letterHeader}> Coverletter &#128195; </h3>
            <CoverLetter 
              job={props.jobs}
              coverLetter={props.coverLetter}
              genCLJobDesc={props.genCLJobDesc}
              saveCL={props.saveCL}
            />
          </Col>
        </Row>
        </Container>

        </>
      ) : (
        <p>Login to view content</p>
        )}
    </>
  );
}

export default Home;
