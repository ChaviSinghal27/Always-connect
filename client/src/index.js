import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthContextProvider } from "./context/authContext";
import { PostProvider } from "./context/postContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
