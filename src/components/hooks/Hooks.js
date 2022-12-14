import UseStateTutorial from "./useState";
import UseReducerTutorial from "./useReducer";
import UseEffectTutorial from "./useEffect";
import UseRefTutorial from "./useRef";
import ContextTutorial from "./useContext/useContext";

function Hook() {
  return (
    <div>
      <h1>Introduction to hooks</h1>
      <UseStateTutorial></UseStateTutorial>
      <UseReducerTutorial></UseReducerTutorial>
      <UseEffectTutorial></UseEffectTutorial>
      <UseRefTutorial></UseRefTutorial>
      <ContextTutorial></ContextTutorial>
    </div>
  );
}

export default Hook;
