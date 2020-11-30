import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router className= 'body'>
        <App />
    </Router>, 
    document.querySelector("#root")
);
