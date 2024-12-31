import React, { useState } from "react";

const Counter = ({ initial }) => {
  let [count, setCount] = useState(initial);
  const remove = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={remove}>-</button>
      <button>{count}</button>
      <button onClick={add}>+</button>
    </div>
  );
};

export default Counter;
