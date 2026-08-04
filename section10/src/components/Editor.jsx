import "../css/Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = (e) => {
    if (content === "") {
      inputRef.current.focus(); //inputRef.current = <input />
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onkeyDownContent = (e) => {
    //엔터를 입력했는지 점검
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        type="text"
        ref={inputRef}
        value={content}
        placeholder="오늘의 할일을 입력"
        onChange={onChangeContent}
        onKeyDown={onkeyDownContent}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
