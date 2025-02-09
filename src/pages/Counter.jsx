import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement": {
      return { count: state.count - 1 };
    }
    case "reset": {
      return { count: 0 };
    }
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div className="counter-app">
        <h2>Counter app</h2>
        <div>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Decrease
          </button>
          <span>
            <strong>{state.count}</strong>
          </span>
          <button onClick={() => dispatch({ type: "increment" })}>
            Increase
          </button>
        </div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
