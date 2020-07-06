import React from "react";
import "./PerspectiveFont.css";

function PerspectiveFont() {
  return (
    <div className="pWrapper">
      <div className="perspective-text">
        <div className="perspective-line">
          <p></p>
          <p>Pure CSS</p>
        </div>
        <div className="perspective-line">
          <p>Pure CSS</p>
          <p>Perspective</p>
        </div>
        <div className="perspective-line">
          <p>Perspective</p>
          <p>Text Effect</p>
        </div>
        <div className="perspective-line">
          <p>Text Effect</p>
          <p>Tutorial</p>
        </div>
        <div className="perspective-line">
          <p>Tutorial</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default PerspectiveFont;
