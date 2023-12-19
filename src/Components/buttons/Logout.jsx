function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  function handleLogout() {
    console.log("Logging out...");
    logout();
  }

  console.log("IsAuthenticated:", isAuthenticated);
  return isAuthenticated ? <button onClick={handleLogout}>Log Out</button> : null;
}


export default LogoutButton;