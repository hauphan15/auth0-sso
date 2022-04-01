import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-9dx7co5k.us.auth0.com"
    clientId="Xy10UK1Fzz8FPe2ESInucSnKL5ZYTGG7"
    redirectUri={window.location.origin}
    audience="https://dev-9dx7co5k.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
