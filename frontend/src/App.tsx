import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let title = "react + typescript";
  let style = { color: "red", fontSize: "30px" };

  return (
    <div className="App">
      <div className="nav">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{title}</div>
      </div>
      <p style={style}>TEST</p>
    </div>
  );
}

export default App;
