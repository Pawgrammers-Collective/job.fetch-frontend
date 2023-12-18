

import { useContext } from "react";
import userContext from "./userContext";

function Home() {
  const { currUser } = useContext(userContext);

  return (
    <div className="home">

      <h1>Job.fetch( )</h1>
      <h3> Welcome to job.fetch ( )! Log in to find jobs.
</h3>
      {currUser && <h3>Welcome, {currUser.username}!</h3>}
      {!currUser && (
      <div>
        <p>
          <a className="btn fw-bold m-1 btn-outline-dark" href="/login">
            Log in
          </a>
          <a className="btn fw-bold m-1 btn-outline-dark" href="/signup">
            Sign up
          </a>
        </p>
      </div>
      )}
    </div>
  );
}

export default Home;