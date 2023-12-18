import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Login from "./Login";
import Logout from "./Logout";

function AuthButtons() {

  const {
    isAuthenticated,
  } = withAuth0();

  return isAuthenticated ? <Logout /> : <Login />
}

export default withAuth0(AuthButtons);
