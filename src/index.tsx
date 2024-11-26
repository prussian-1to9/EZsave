import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import App from "@components/App";
import RegisterPage from "./pages/RegisterPage";
import CalendarPage from "./pages/CalendarPage";

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
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<RegisterPage />} />
          <Route path="calendar" element={<CalendarPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
