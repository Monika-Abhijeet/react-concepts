import UpdatedComponent from "./withCounter";

function ClickCounter(props) {
  //   const { count, incrementCount } = props;
  return (
    <div>
      <h1>Click Counter : {props.count}</h1>
      <button onClick={props.incrementCount}>Click </button>
    </div>
  );
}

export default UpdatedComponent(ClickCounter);
