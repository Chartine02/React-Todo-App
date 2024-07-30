import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function TodoEdit({ todo, onSubmit }) {
  const [title, setTitle] = useState(todo.title);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <form className="todo-edit">
      <input
        type="text"
        className=" text-black"
        value={title}
        onChange={handleChange}
        ref={inputRef}
      />
      <button type="submit" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </form>
  );
}
