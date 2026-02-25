export default function TodoItem({ todo, onToggle }) {
  const id = `${todo.id}.completed`;

  return (
    <li style={{ accentColor: "greenyellow" }}>
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
    </li>
  );
}
