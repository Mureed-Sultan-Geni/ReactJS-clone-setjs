import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Documentaion from "../pages/documentation/index";
import "../styles/index.css";
function Routers() {
  return (
    <>
      <div className="body-main containers">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="Documentaion/*" element={<Documentaion />}/>
        </Routes>
      </div>
    </>
  );
}

export default Routers;
