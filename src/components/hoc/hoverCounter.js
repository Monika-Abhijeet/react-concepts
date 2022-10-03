import UpdatedComponent from "./withCounter";
function HoverCounter(props) {
  const { count, incrementCount } = props;
  return (
    <div>
      <h1> Hover count: {count}</h1>
      <h1 onMouseEnter={incrementCount}>Hover Counter</h1>
    </div>
  );
}
export default UpdatedComponent(HoverCounter);
