import { useState } from "react";

export default function TodoEdit({ todo, onSubmit }) {
  const [title, setTitle] = useState(todo.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <form className="todo-edit">
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        <img src={CheckIcon} title="Save" />
      </button>
    </form>
  );
}
