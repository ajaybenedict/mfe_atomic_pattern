import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "shared-css-package/dist/index.css";

import App from "./App";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="/microfrontend1">
        <App />
    </BrowserRouter>
  </StrictMode>
);