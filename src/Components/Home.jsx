import React, { useState } from 'react';
import CoverLetter from './CoverLetter';
import JobCard from './JobCard';
import { useAuth0 } from '@auth0/auth0-react';

function Home(props) {
  const { isAuthenticated } = useAuth0();
  const [coverLetters, setCoverLetters] = useState({}); 

  const handleSaveCoverLetter = (jobId, coverLetter) => {
    setCoverLetters((prevCoverLetters) => ({
      ...prevCoverLetters,
      [jobId]: coverLetter,
    }));
  };

  return (
    <>
      <h1>Home</h1>

      {isAuthenticated ? (
        <div style={{ maxHeight: '700px', overflowY: 'auto', marginLeft: '40px' }}>
          {props.jobs.map((job, index) => (
            <div key={index}>
              <JobCard job={job} onSaveCoverLetter={handleSaveCoverLetter} />
              <CoverLetter onSave={(coverLetter) => handleSaveCoverLetter(job.id, coverLetter)} coverLetter={coverLetters[job.id]} />
            </div>
          ))}
        </div>
      ) : (
        <p>Login to view content</p>
      )}
    </>
  );
}

export default Home;
