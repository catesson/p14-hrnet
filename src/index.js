import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MyRoute } from "./router/Router";
import "./styles/global.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <MyRoute />
    </Router>
  </React.StrictMode>
);
