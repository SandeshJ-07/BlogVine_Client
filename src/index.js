import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Stylesheets
import "../src/assets/stylesheet/index.css";
import "../src/assets/stylesheet/style.css";
import Discover from "./Pages/Discover";

// Landing Page
import Landing from "./Pages/Landing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/discover" element={ <Discover/> }/>
      </Routes>
    </Router>
  </React.StrictMode>
);
