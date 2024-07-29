import React, { useState } from "react";
import TodoEdit from "./TodoEdit";

export default function TodoShow(todo, removeTodo, changeTodo) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = (e) => {
    removeTodo(todo.id);
  };
  const handleEdit = (e) => {
    setShowEdit(true);
  };

  const handleDoubleClick = (e) => {
    changeTodo(todo.id, todo.title, !todo.complete);
  };

  const handleSubmit = (id, title) => {
    changeTodo(id, title);
    setShowEdit(false);
  };

  if (showEdit) {
    return (
      <li>
        <TodoEdit todo={todo} onSubmit={handleSubmit} />
      </li>
    );
  }
  return (
    <li
      className="todo flex content-between mx-1 p-1 cursor-pointer"
      onDoubleClick={handleDoubleClick}
    >
      <p className={todo.completed && "completed"}>{todo.title}</p>
      <div className="actions flex gap-1">
        <button onClick={handleDelete}>
          {/* <img src="" title="Delete" /> */}
          <FontAwesomeIcon icon="fa-solid fa-trash" />
        </button>
        <button className="cursor-pointer border-0 p-1" onClick={handleEdit}>
          {/* <img src="" title="Edit" /> */}
          <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
          git
        </button>
      </div>
    </li>
  );
}
