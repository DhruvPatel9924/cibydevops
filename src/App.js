import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(null);

  const handleSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Simple Calculator</h1>
        <div className="calculator">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
          <span> + </span>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
          <button onClick={handleSum}>Calculate</button>
          {sum !== null && <h2>Result: {sum}</h2>}
        </div>
      </header>
    </div>
  );
}

export default App;

