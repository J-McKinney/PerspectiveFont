import React from "react";
import "./PerspectiveFont.css";

function PerspectiveFont() {
  return (
    <div className="perspective-text">
      <div className="perspective-line">
        <p></p>
        <p>
          Edit <code>src/App.js</code>
        </p>
      </div>
      <div className="perspective-line">
        <p>
          Edit <code>src/App.js</code>
        </p>
        <p> and save to reload.</p>
      </div>
      <div className="perspective-line">
        <p> and save to reload.</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </div>
      <div className="perspective-line">
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tutorial
          </a>
        </p>
      </div>
      <div className="perspective-line">
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tutorial
          </a>
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default PerspectiveFont;
