import { useRef } from "react";

function UseRefTutorial() {
  const inputRef = useRef(null);

  function printMyInput() {
    inputRef.current.focus();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <div>
      <h2>Use Ref tutorial</h2>
      <input type="text" ref={inputRef} />
      <button onClick={() => printMyInput()}>Click me</button>
    </div>
  );
}

export default UseRefTutorial;
