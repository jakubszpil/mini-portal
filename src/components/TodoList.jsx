import TodoItem from "./TodoItem";

export default function TodoList({ todos = [], onToggle }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />;
      })}
    </ul>
  );
}
