import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/Footer/footer";
import ListBox from "./components/list/list-box";

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
