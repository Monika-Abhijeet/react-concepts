import { useReducer } from "react";

function UseReducerTutorial() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "ToggleShowText":
        return {
          count: state.count,
          showText: !state.showText,
        };
      case "DECREMENT":
        if (state.count <= 0) {
          return {
            count: 0,
          };
        }
        return {
          count: state.count - 1,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
  return (
    <div>
      <h2>Use Reducer Tutorial</h2>
      <h3>Count: {state.count}</h3>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "ToggleShowText" });
        }}
      >
        Toggle
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
}

export default UseReducerTutorial;
