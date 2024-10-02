import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./components/App";

// render component (react version: 18.3.1)
const body = document.body;
createRoot(body).render(<App />);

reportWebVitals(console.log);
