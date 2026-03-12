import React from "react";
import ReactDOM from "react-dom/client";
import { MovieProvider } from "./context/MovieContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <App />
  </MovieProvider>
);