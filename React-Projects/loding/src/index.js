import React from "react";
import ReactDOM from "react-dom/client"; 
import  '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import { LodingImage } from "./Components/LodingImage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LodingImage />
  </React.StrictMode>
);
