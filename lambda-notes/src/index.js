import React from "react";
import ReactDOM from "react-dom";
//css reset
import "../src/index.css";
//app styling
import "../src/Styles/index.css";
import App from "./Components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
