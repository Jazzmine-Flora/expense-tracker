import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create a root for rendering

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
