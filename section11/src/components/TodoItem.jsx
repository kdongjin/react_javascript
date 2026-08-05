import "../css/TodoItem.css";
import { memo } from "react";
import { useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickBtn = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="data">{new Date(date).toLocaleDateString}</div>
      <button onClick={onClickBtn}>삭제</button>
    </div>
  );
};

//React.memo 문제점은 (props 객체 값이 변동에 대한 작동은 잘된다.
// 핸들러함수는 함수자체 재 생성시키기 문제가 발생한다.)
// 이런방식 고차컴포넌트로 처리를 해야한다. (Higher order Component : HOC)
export default memo(TodoItem);
// export default memo(TodoItem, (prevProps, nextProps) => {
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });
