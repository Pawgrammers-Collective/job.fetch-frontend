import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {

  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  const handleLogin = async ()=>  {
    await loginWithRedirect();
  }

  return ! isAuthenticated &&
    <button onClick={handleLogin}>Log in</button>
  ;
}
export default withAuth0(Login);
