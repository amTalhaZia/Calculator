import React, { useState } from "react";


function App() {
  const [result, setResult] = useState("");

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult((eval(result) || "") + "");
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className="calculator">
      <input className="input" type="text" value={result} readOnly />
      <div className="keypad">
        <div className="row">
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="/" onClick={handleClick}>&divide;</button>
        </div>
        <div className="row">
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="*" onClick={handleClick}>&times;</button>
        </div>
        <div className="row">
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="-" onClick={handleClick}>&ndash;</button>
        </div>
        <div className="row">
          <button name="." onClick={handleClick}>.</button>
          <button name="0" onClick={handleClick}>0</button>
          <button onClick={calculate} id="equals">=</button>
          <button name="+" onClick={handleClick}>+</button>
        </div>
        <div className="row">
          <button onClick={clear} id="clear">C</button>
          <button onClick={backspace} id="backspace">⌫</button>
        </div>
      </div>
    </div>
  );
}

export default App;
