import { increment, decrement, signin, signout } from "./actions";
import { useDispatch } from "react-redux";
function ReduxDemo() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Demo</h1>
      <button onClick={() => dispatch(increment())}>add me</button>
    </div>
  );
}

export default ReduxDemo;
