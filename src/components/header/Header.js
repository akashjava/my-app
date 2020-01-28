import React from "react";
import logo from "./../../logo.svg";
import "./Header.css";
export default function Header(params) {
  return (
    <div className="Header">
      <div className="Header-container">
        <img src={logo} className="img-logo" alt="text"></img>
      </div>
    </div>
  );
}
