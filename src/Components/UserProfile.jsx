/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SavedJobsAccordian from "./SavedJobsAccordian";
function UserProfile(props) {
  const { user, isAuthenticated } = useAuth0();
  console.log(props);
  let getSavedJobs = props.getSavedJobs;

  useEffect(() => {
    console.log("Mount up");
    getSavedJobs();
    return () => {
      console.log("Unmount");
    };
  }, []);

  return (
    <>
      <h1>Your Profile</h1>

      {isAuthenticated ? (
        <>
          <p>Welcome, {user.name}!</p>
          <SavedJobsAccordian 
          savedJobs={props.savedJobs}
          deleteSavedJob={props.deleteSavedJob} />
        </>
      ) : (
        <p>Login to view your profile</p>
      )}
    </>
  );
}

export default UserProfile;
