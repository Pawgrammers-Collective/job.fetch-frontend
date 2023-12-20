import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LandingPage() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Welcome to Job.fetch()</h1>
      {isAuthenticated ? (
        <p>Get started by clicking Job Search above.</p>
      ) : (
        <p>Please log in to start finding a job!</p>
      )}
    </div>
  );
}

export default LandingPage;
