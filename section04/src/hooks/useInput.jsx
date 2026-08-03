import { useState } from "react";

function useInput(value) {
  const [input, setInput] = useState(value);
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange];
}

export default useInput;
