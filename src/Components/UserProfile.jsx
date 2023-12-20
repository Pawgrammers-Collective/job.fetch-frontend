// UserProfile.jsx

import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import CoverLetter from "./CoverLetter";

function UserProfile({ coverLetter }) {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Your Profile</h1>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.name}!</p>

          <CoverLetter coverLetter={coverLetter} />
        </>
      ) : (
        <p>Login to view your profile</p>
      )}
    </div>
  );
}

export default UserProfile;
