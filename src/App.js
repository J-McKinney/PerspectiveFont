import React from "react";
import PerspectiveFont from "./PerspectiveFont/PerspectiveFont";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PerspectiveFont />
      </header>
    </div>
  );
}

export default App;
