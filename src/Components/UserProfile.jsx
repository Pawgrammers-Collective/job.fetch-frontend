/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SavedJobsAccordian from "./SavedJobsAccordian";
function UserProfile(props) {
  const { user, isAuthenticated } = useAuth0();
  console.log(props);
  let getSavedJobs = props.getSavedJobs;
  let getSavedCLs = props.getSavedCLs;

  useEffect(() => {
    console.log("Mount up Jobs");
    getSavedJobs();
    return () => {
      console.log("Unmount Jobs");
    };
  }, []);

  useEffect(() => {
    console.log("Mount up CLs");
    getSavedCLs();
    return () => {
      console.log("Unmount CLs");
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
          deleteSavedJob={props.deleteSavedJob}
          generateCL={props.generateCL}
          saveCL={props.saveCL}
          savedCLs={props.savedCLs}
          getSavedCLs={props.getSavedCLs}
          deleteSavedCL={props.deleteSavedCL} />
        </>
      ) : (
        <p>Login to view your profile</p>
      )}
    </>
  );
}

export default UserProfile;
