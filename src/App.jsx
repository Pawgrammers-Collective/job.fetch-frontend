/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'
import axios from 'axios';
import AuthButtons from './buttons/AuthButtons.jsx';
import { withAuth0 } from '@auth0/auth0-react';
import Dogs from './Dogs.jsx';



function App(props) {
  console.log(props)



  return (
    <>
      {/* <button onClick={fetchDogs}>Get Some Dogs</button>  */}
      <AuthButtons/>
      <hr />
      {
        props.auth0.isAuthenticated &&
        <>
          <Dogs/>
        </>
      }
      
    </>
  )
}

export default withAuth0(App);
