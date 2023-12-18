import React from 'react'
import ReactDOM from 'react-dom/client'
import {Auth0Provider} from '@auth0/auth0-react'
import App from './src/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain={ import.meta.env.VITE_AUTH_DOMAIN }
    clientId={ import.meta.env.VITE_AUTH_CLIENT_ID}
    redirectUri={ import.meta.env.VITE_AUTH_REDIRECT_URI }
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
