import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(null);
  const [divisor, setDivisor] = useState(1);
  const [isDivisible, setIsDivisible] = useState(null);

  const handleSum = () => {
    const calculatedSum = Number(num1) + Number(num2);
    setSum(calculatedSum);
    checkDivisibility(calculatedSum, divisor);
  };

  const checkDivisibility = (sum, divisor) => {
    setIsDivisible(sum % divisor === 0);
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
          <h1>git push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin maingit push origin main</h1>
          <button onClick={handleSum}>Calculate</button>
          {sum !== null && <h2>Result: {sum}</h2>}

          <input
            type="number"
            value={divisor}
            onChange={(e) => setDivisor(e.target.value)}
            placeholder="Enter divisor"
          />
          {isDivisible !== null && (
            <h3>
              The sum is {isDivisible ? "divisible" : "not divisible"} by {divisor}.
            </h3>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
