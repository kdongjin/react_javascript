import { useState, useRef } from "react";

const Register2 = () => {
  //상태값변화 : name, birth, country, bio
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  //const countRef = useRef(0);
  const inputRef = useRef();

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    //name이 입력이 안되었으면 다시 입력요청을 해야한다.
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            name="name"
            ref={inputRef}
            value={input.name}
            onChange={onChangeInput}
            placeholder="홍길동"
          />
        </div>

        <div>
          <input
            type="date"
            name="birth"
            value={input.birth}
            onChange={onChangeInput}
          />
        </div>

        <div>
          <select value={input.country} name="country" onChange={onChangeInput}>
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
          </select>
        </div>

        <div>
          <textarea value={input.bio} name="bio" onChange={onChangeInput} />
        </div>
        <div>
          <button onClick={onSubmit}>스프링부트전송</button>
        </div>
      </div>
    </>
  );
};

export default Register2;
