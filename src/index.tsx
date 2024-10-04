import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./todo";
import App from "./App.jsx";

import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="34032634943-ggqgo7un4go1g8huoi80o3l13r3sm12j.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
