import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Opportunities from "./Opportunities";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Opportunities />
    </React.StrictMode>
);
