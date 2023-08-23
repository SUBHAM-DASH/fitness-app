import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ExcerciseContextProvider } from "./context/ExcerciseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExcerciseContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExcerciseContextProvider>
  </React.StrictMode>
);
