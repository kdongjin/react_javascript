import { useState, useReducer } from "react";

function reducer(count, action) {
  switch (action.type) {
    case "PLUS":
      return count + action.data;
    case "MINUS":
      return count - action.data;
    default:
      return count;
  }
}

const Exam = () => {
  //  const [count, setCount] = useState(3);
  const [count, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({ type: "PLUS", data: 1 });
    //setCount(count + 1);
  };

  const onClickMinus = () => {
    dispatch({ type: "MINUS", data: 1 });
    //setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
