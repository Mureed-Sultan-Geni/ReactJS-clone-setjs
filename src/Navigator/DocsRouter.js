import React from "react";
import { Routes, Route } from "react-router-dom";

import Installation from "../pages/documentation/Installation";
import GetStart from "../pages/documentation/GetStart";

function DocsRouter() {
  return (
    <>
      <Routes>
        <Route index element={<Installation />} />
        <Route path="/Installation" element={<Installation />} />
        <Route path="/GetStart" element={<GetStart />} />
      </Routes>
    </>
  );
}

export default DocsRouter;
