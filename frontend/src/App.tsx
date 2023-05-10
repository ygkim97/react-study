import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let header = "react + typescript";
  let [title, setTitle] = useState(["제목1", "제목2", "제목3"]);
  let [likes, setLikes] = useState(0);

  return (
    <div className="App">
      <div className="nav">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{header}</div>
      </div>

      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "제목변경";
          setTitle(copy);
        }}
      >
        제목수정
      </button>

      <div className="list">
        <h4>{title.at(0)}</h4>
        <p>
          내용
          <span
            onClick={() => {
              setLikes(likes + 1);
            }}
          >
            👍🏻
          </span>
          {likes}
        </p>
      </div>
      <div className="list">
        <h4>{title.at(1)}</h4>
        <p>내용</p>
      </div>
      <div className="list">
        <h4>{title.at(2)}</h4>
        <p>내용</p>
      </div>
    </div>
  );
}

export default App;
