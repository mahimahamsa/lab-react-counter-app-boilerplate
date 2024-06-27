import React, { useState } from 'react';
import './App.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2> Counter </h2>
      <h2><button onClick={decrement}>-</button> <span>{count}</span> <button onClick={increment}>+</button> <button onClick={reset}>Reset</button> </h2>
    </div>
  );
}

export default Counter;
