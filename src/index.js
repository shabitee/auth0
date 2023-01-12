import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-sl0bsa6ayxqnmzry.us.auth0.com"
    clientId="4rGsvgeRLB7KTPBW9aoBcgxxv9uuHLBy"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);