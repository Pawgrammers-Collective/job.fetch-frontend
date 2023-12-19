import { useAuth0 } from "@auth0/auth0-react";
import Login from './Login.jsx';
import Logout from './Logout.jsx'

function AuthButtons() {
   const {isAuthenticated} = useAuth0();
   return isAuthenticated ? <Logout /> : <Login />

}

export default AuthButtons;
