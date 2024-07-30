import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import "./App.css";

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
    <div className="main ">
      <div>
        <h1 className=" text-center text-xl font-semibold ">
          Todo App <br />
          <span className="">Plan your day, This Way</span>
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
