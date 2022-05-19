import React from "react";
import logo from "../images/logo.svg";
import "../styles/index.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header containers">
        <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        </div>
        <div className="menu">
        <Link to="/Documentaion">Documentaion</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
