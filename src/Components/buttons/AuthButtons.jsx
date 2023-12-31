import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";

const AuthButtons = () => {
  const { isAuthenticated } = useAuth0();

  console.log(isAuthenticated);

  return (
    <div className="authbuttons">
      {!isAuthenticated && (
        <>
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default AuthButtons;