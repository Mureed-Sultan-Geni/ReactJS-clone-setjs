import React from "react";
import { Routes, Route } from "react-router-dom";

import Installation from "../pages/documentation/Installation";
import GetStart from "../pages/documentation/GetStart";
import SetPages from "../pages/SetPages";
import Templates from "../pages/Templates";

function DocsRouter() {
  return (
    <>
      <Routes>
        <Route index element={<Installation />} />
        <Route path="/Installation" element={<Installation />} />
        <Route path="/GetStart" element={<GetStart />} />
        <Route path="/SetPages" element={<SetPages />} />
        <Route path="/Templates" element={<Templates />} />
      </Routes>
    </>
  );
}

export default DocsRouter;
