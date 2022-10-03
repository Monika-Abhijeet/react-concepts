import ClickCounter from "./clickCounter";
import HoverCounter from "./hoverCounter";
import { useSelector } from "react-redux";
function ParentHOC() {
  const isLogged = useSelector((state) => state.isLogged);
  if (!isLogged) {
    <h1>Pls login to view this page</h1>;
  }
  return (
    <div>
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}

export default ParentHOC;
