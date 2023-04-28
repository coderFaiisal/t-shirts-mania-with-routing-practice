import React, { useContext } from "react";
import { CounterContext } from "../../App";

const Inventory = () => {
  const [count, setCount] = useContext(CounterContext);
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)} className="cart-btn">
        Increase
      </button>
      <button onClick={() => setCount(count - 1)} className="cart-btn">
        Decrease
      </button>
    </div>
  );
};

export default Inventory;
