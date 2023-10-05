import React, { useState } from "react";

function Counter({ counterLabel, count, setCount }) {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h5 className="counter-label">{counterLabel}</h5>
      <div className="counter-container">
        <h3 className="counter">{count}</h3>
        <div className="counter-buttons-container">
          <button className="counter-button" onClick={increment}>
            <i class="fa-solid fa-angle-up"></i>
          </button>
          <button className="counter-button" onClick={decrement}>
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
