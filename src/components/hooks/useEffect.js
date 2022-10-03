import { useEffect, useState } from "react";
import axios from "axios";

function UseEffectTutorial() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   console.log(response.data);
    // });
    console.log("use effect called");
  }, [count]);
  return (
    <div>
      <h2>Use Effect Tutorial</h2>
      <h3>Count value is: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setShowText(!showText)}>Toggle text</button>
      {showText && <p>This is a text</p>}
    </div>
  );
}

export default UseEffectTutorial;
