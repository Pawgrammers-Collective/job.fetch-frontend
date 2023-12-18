import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

function Login() {

  const {
    isAuthenticated,
    loginWithRedirect,
  } = withAuth0();

  function handleLogin() {
    loginWithRedirect();
  }

  return ! isAuthenticated &&
    <button onClick={handleLogin}>Log in</button>
  ;
}
export default withAuth0(Login);
