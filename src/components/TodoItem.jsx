import { Link } from "react-router";

import "./TodoItem.css";

export default function TodoItem({ todo, onToggle }) {
  const id = `${todo.id}.completed`;

  return (
    <li className="todo-item">
      <div style={{ display: "flex", gap: 6 }}>
        <label
          className={`
            todo-item-label 
            ${todo.completed ? "todo-item-label--checked" : ""}
          `}
          htmlFor={id}
        >
          {todo.title}
        </label>
        <input
          id={id}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <Link to={`/todos/${todo.id}`}>Edytuj</Link>
      </div>
    </li>
  );
}
