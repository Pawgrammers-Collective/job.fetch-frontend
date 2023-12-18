/* eslint-disable react/prop-types */
import { useState } from 'react'
import axios from 'axios';
import AuthButtons from './Components/buttons/AuthButtons.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/buttons/Login.jsx';
import Logout from './Components/buttons/Logout.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import Dogs from './Dogs.jsx';



function App(props) {
  console.log(props)


  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route 
            exact path="/"
            element={<Home />}
            >
          </Route>
          <Route 
            exact path="/profile"
            element={<AuthButtons />}
            >
          </Route>
          {/* <Route 
            exact path="/login"
            element={<Login />}
            >
          </Route>
          <Route 
            exact path="/logout"
            element={<Logout />}
            >
          </Route> */}
        </Routes>
      <Footer />
    </Router>
      {/* <button onClick={fetchDogs}>Get Some Dogs</button> 
      <AuthButtons/>
      <hr />
      {
        props.auth0.isAuthenticated &&
        <>
          <Dogs/>
        </>
      }
       */}
    </>
  )
}

export default useAuth0(App);
