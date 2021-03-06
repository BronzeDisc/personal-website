import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Layout></Layout>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
