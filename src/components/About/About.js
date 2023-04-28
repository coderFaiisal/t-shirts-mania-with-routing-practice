import React, { useContext } from "react";
import { CounterContext } from "../../App";

const About = () => {
  const [count] = useContext(CounterContext);
  return (
    <div>
      <h1>This is about page</h1>
      <h2>Counter : {count}</h2>
    </div>
  );
};

export default About;
