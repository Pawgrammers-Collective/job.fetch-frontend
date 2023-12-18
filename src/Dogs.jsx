/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

let SERVER = import.meta.env.VITE_SERVER_URL;

function Dogs(props) {

  console.log(props)

  const [dogs, setDogs] = useState([]);

  // const ProfileComponent = () => {
  //   const {getIdTockenClaims, isAuthenticated} = useAuth0();
  // }

  useEffect( () => {

    async function getDogs() {
      if(props.auth0.isAuthenticated){
        console.log('user was authenticated')
      let claim = await props.auth0.getIdTokenClaims();
      console.log(claim)
      let token = claim.__raw;
      console.log(token)

      const config = {
        headers: { "Authorization": `Bearer ${token}` },
        method: "get",
        url: `${SERVER}/dogs`,
      }

      let response = await axios(config);
      let data = response.data;
      setDogs(data);
    }}

    getDogs();

  }, []);


  return (
    <ul>
     {
      dogs.map( (dog, idx) => 
        <li key={dog._id}>{dog.name}</li>
       )
     }
   </ul>
  )
}

export default withAuth0(Dogs);