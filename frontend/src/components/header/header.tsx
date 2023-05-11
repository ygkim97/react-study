import logo from "../../logo.svg";
import React from "react";
import "./header.css";

function Header() {
  let header = "react + typescript";

  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>{header}</div>
    </div>
  );
}

export default Header;
