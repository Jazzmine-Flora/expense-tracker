import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import createRoot from react-dom/client
import "./index.css";
import App from "./App/App";
import "@fortawesome/fontawesome-free/css/all.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create a root for rendering

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
