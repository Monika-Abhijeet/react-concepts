import { useState } from "react";

function ReactTest() {
  function sum(a, b) {
    setSumVal(a + b);
  }
  const [buttonColor, setButtonColor] = useState("red");
  const [disableColorButton, setDisableColorButton] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [sumVal, setSumVal] = useState(0);
  return (
    <div>
      <h1>React testing</h1>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disableColorButton}
      >
        Change to Blue
      </button>
      <input
        type="checkbox"
        onChange={(e) => setDisableColorButton(e.target.checked)}
      ></input>
      <button onClick={() => sum(1, 1)}>Sum </button>
      <h2 data-testid="add">The sum is {sumVal}</h2>
    </div>
  );
}

export default ReactTest;
