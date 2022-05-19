import React from "react";
import { Link } from "react-router-dom";
import DocsRouter from "../../Navigator/DocsRouter";

function Documentaion() {
  return (
    <>
      <div className="documentaion">
        <div className="docs-menu">
          <Link to="/Documentaion/Installation">Installation</Link>
          <Link to="/Documentaion/GetStart">Getting Started</Link>
          <Link to="/Documentaion/SetPages">Pages</Link>
          <Link to="/Documentaion/Templates">Templates</Link>
        </div>
        <div className="docs-body">
          <DocsRouter />
        </div>
      </div>
    </>
  );
}

export default Documentaion;
