import React from "react";
import TodoShow from "./TodoShow";

export default function TodoList({ todo, removeTodo, changeTodo }) {
  const renderedTodos = todo.map((todo) => {
    return (
      <TodoShow
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
        changeTodo={changeTodo}
      />
    );
  });

  return (
    <div>
      <ul className="todo-list text-white">{renderedTodos}</ul>
    </div>
  );
}
