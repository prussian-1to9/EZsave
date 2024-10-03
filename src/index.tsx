import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@styles/index.css";
import reportWebVitals from "./reportWebVitals";

import App from "@components/App";

// render component (react version: 18.3.1)
const body = document.body;
createRoot(body).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals(console.log);
