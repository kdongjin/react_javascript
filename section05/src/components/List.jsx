import TodoItem from "./TodoItem";
import "../css/List.css";
import { useState } from "react";

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

  return (
    <div className="List">
      <h4>Todo List</h4>
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
