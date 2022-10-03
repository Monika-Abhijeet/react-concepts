import { useState } from "react";
function UseStateTutorial() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>UseState Tutorial</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
}

export default UseStateTutorial;
