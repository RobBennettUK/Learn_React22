import React, { useState } from "react";

function App() {
  // const state = React.useState(123);
  // Thus we get what is shown below instead by deconstruction (so we don't need to use state[0] and state[1])
  // We can define the names ourselves
  // It assigns the value of count to the first element of state (i.e. 123) and the second element (a function which determines what the state is changed to) is named setCount
  const [count, setCount] = React.useState(123);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

// Whenever the value of state (the first element of the array state[0]), it will re-render
// This will only update the parts that change

// Destructuring (objects and arrays)
// This helps you make complex things simple. See below:
// const rgb = [41, 128, 185];
// const [red, green, blue] = [41, 128, 185];
// console.log(blue);
// console.log(rgb[2]);
