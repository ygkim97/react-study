import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListBox from "./components/ListBox/ListBox";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <ListBox></ListBox>

      <Footer></Footer>
    </div>
  );
}

export default App;
