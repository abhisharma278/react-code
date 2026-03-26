import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter((prev) => prev + 1);
  };

  const removeValue = () => {
    if (counter === 0) {
        alert("Counter value cannot be less than 0");
        return;
    }
    setCounter((prev) => prev - 1);
  };

  const resetValue = () => {
    setCounter(5);
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Counter App</h1>
        <p className="subtitle">React + Vite Simple Project</p>

        <div className="counter-box">
          <span className="counter-number">{counter}</span>
        </div>

        <div className="btn-group">
          <button className="btn increment" onClick={addValue}>
            + Increment
          </button>

          <button className="btn decrement" onClick={removeValue}>
            - Decrement
          </button>

          <button className="btn reset" onClick={resetValue}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
