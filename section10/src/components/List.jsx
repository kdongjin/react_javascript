import TodoItem from "./TodoItem";
import "../css/List.css";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  //search 없다 1번방식 todos, search 있다 2번방식 todos = filter 작업
  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    //search 있다면 filter
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filterTodos = getFilteredData();

  //랜더링이 일어날때 마다. 투두리스트 등록된 전체갯수, 완료된갯수, 미완료된 개수 연산
  //useMemo => useEffect
  const [totalCount, doneCount, notDoneCount] = useMemo(() => {
    //전체갯수
    const totalCount = todos.length;
    //완료된갯수
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    console.log(
      `getAnalyzeData 호출 ${totalCount}  ${doneCount} ${notDoneCount}`,
    );
    return [totalCount, doneCount, notDoneCount];
  }, [todos]);

  // const getAnalyzeData = () => {
  //   //전체갯수
  //   const totalCount = todos.length;
  //   //완료된갯수
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   console.log(
  //     `getAnalyzeData 호출 ${totalCount}  ${doneCount} ${notDoneCount}`,
  //   );
  //   return [totalCount, doneCount, notDoneCount];
  // };

  //const [totalCount, doneCount, notDoneCount] = getAnalyzeData();

  return (
    <div className="List">
      <h4>Todo List</h4>
      <div>
        <div>total:{totalCount}</div>
        <div>done:{doneCount}</div>
        <div>notDone:{notDoneCount}</div>
      </div>
      <input
        type="text"
        value={search}
        placeholder="검색어을 입력해주세요"
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filterTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
