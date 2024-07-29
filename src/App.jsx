import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

export default function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (title) => {
    const newTodo = { id: crypto.randomUUID(), title: title, complete: false };
    const updateTodo = [...todos, newTodo];
    setTodos(updateTodo);
  };

  const removeTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  const changeTodo = (id, title, complete) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, complete };
      }
      return todo;
    });

    setTodos(updateTodo);
  };

  return (
    <div className="bg-zinc-800 h-[100vh] flex flex-col items-center justify-center p-40 text-white">
      <div>
        <h1 className=" text-center">
          React Todo <br />
          <span className="text-amber-500 block py-4">
            Streamline Your day, React Way
          </span>
        </h1>
        <hr />
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todo={todos}
          removeTodo={removeTodo}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
}
