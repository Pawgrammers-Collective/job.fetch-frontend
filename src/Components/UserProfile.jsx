/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SavedJobsAccordian from "./SavedJobsAccordian";

function UserProfile(props) {
  const { user, isAuthenticated} = useAuth0();
  console.log(props.savedJobs);
  let getSavedJobs = props.getSavedJobs;

  useEffect(() => {
    console.log("Mount up");
    getSavedJobs();
    return () => {
      console.log("Unmount");
    };
  },[]);
  
  return (
    <>
      <h1>Your Profile</h1>

      {isAuthenticated && (
        <>
          <h3>Welcome ${user.name}!</h3>
          <SavedJobsAccordian savedJobs = {props.savedJobs} />
        </>
      )}

      {!isAuthenticated && (
        <p>Login to view content</p>
      )}
    </>
  );
}

export default UserProfile;
