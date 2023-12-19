import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return isAuthenticated && (
    <button className="button__logout" onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
