import React from "react";
import TodoShow from "./TodoShow";

export default function TodoList({ todo, removeTodo, changeTodo }) {
  console.log("hh", todo);
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
      <ul className="todo-list list-none overflow-y-auto max-h-[400px] scroll ">
        {renderedTodos}
      </ul>
    </div>
  );
}
