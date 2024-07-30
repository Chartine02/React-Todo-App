import React, { useState } from "react";
import TodoEdit from "./TodoEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function TodoShow({ todo, removeTodo, changeTodo }) {
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
    <li className="todo text-white" onDoubleClick={handleDoubleClick}>
      <p className={todo.complete ? "completed" : ""}>{todo.title}</p>

      <div className="actions flex gap-4">
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="" onClick={handleEdit}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    </li>
  );
}
