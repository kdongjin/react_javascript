import Header from "./components/Heder";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import "./css/App.css";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {
  //상태값 훅
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false); //isMount.current = false

  //마운트 훅
  useEffect(() => {
    console.log(`mount  isMount=${isMount.current}`);
  }, []);

  //마운트, 모든상태값이 업데이트될때
  //마운트 콜하는것은 막을수 없다. => 일은안하게 처리하자
  //업데이트 될때만 작동하게 하자
  useEffect(() => {
    if (isMount.current === false) {
      isMount.current = true;
      return;
    }
    console.log(`update`);
  });

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        {count % 2 === 0 ? <Even /> : null}
        <section>
          <input
            type="text"
            name="desc"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </section>
        <section>
          <Viewer count={count} />
        </section>
        <section>
          <Controller onClickBtn={(value) => setCount(count + value)} />
        </section>
      </div>
    </>
  );
}

export default App;
