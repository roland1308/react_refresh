import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App.jsx";
import Header from "./components/Header.jsx";
import Rutes from "./components/Rutes.jsx";
import Refugis from "./components/Refugis.jsx";
import Contacta from "./components/Contacta.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-primary card">
      <Header />
    </div>
    <div>
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="/refugis" className="nav-link">
              Refugis
            </a>
          </li>

          <li className="nav-item">
            <a href="/rutes" className="nav-link">
              Rutes
            </a>
          </li>

          <li className="nav-item">
          <a href="/contacta" className="nav-link">
            Contacta
          </a>
        </li>

        </ul>
      </nav>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rutes" element={<Rutes />} />
        <Route path="/refugis" element={<Refugis />}>
          <Route path=":id" element={<Refugis />} />
        </Route>
        <Route path="/contacta" element={<Contacta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
