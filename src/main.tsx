import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { initTracking } from "./track";

initTracking();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
