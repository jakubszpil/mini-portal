import { Link } from "react-router";

export default function TodoItem({ todo, onToggle }) {
  const id = `${todo.id}.completed`;

  return (
    <li style={{ accentColor: "greenyellow" }}>
      <div style={{ display: "flex", gap: 6 }}>
        <label
          style={{
            textDecorationLine: todo.completed && "line-through",
            textDecorationColor: todo.completed && "greenyellow",
            textDecorationThickness: "4px",
          }}
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
