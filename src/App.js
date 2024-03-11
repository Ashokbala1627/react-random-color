import React, { useState } from "react";
import "../src/App.css";

const App = () => {
  const [displayColor, setDisplayColor] = useState("#FFFFFF");
  const [text, setText] = useState("color");

  // Function to generate a random color
  const generateRandomColor = () => {
    function getRandomColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
    setDisplayColor(getRandomColor);
    setText(" ");
  };

  return (
    <main className="main">
      <div className="box">
        <h5 className="Head">Random color Generator</h5>
        <div className="display" style={{ backgroundColor: displayColor }}>
          <h6 className="content">{text}</h6>
        </div>
        <button onClick={generateRandomColor}>Change Color</button>
      </div>
    </main>
  );
};

export default App;
