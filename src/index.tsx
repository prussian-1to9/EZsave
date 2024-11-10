import React from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.css";

import reportWebVitals from "./reportWebVitals";

import App from "@components/App";
import { BrowserRouter } from "react-router-dom";

// render component (react version: 18.3.1)
const container =
  document.getElementById("EZsave") || document.createElement("div");
if (!container.id) {
  container.id = "EZsave";
  document.body.appendChild(container);
}

createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
