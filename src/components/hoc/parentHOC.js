import ClickCounter from "./clickCounter";
import HoverCounter from "./hoverCounter";

function ParentHOC() {
  return (
    <div>
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}

export default ParentHOC;
