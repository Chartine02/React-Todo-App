import React, { useState } from "react";

export default function TodoCreate({ createTodo }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };

  return (
    <form action="" className="todo-create text-black" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id=""
        placeholder="Enter your task...."
        value={title}
        onChange={handleChange}
      />
    </form>
  );
}
