import TodoItem from "./TodoItem";

function sortTodos(sortDirection) {
  return function (first, second) {
    if (sortDirection === "DESC") {
      return second.id - first.id;
    }

    return first.id - second.id;
  };
}

export default function TodoList({ todos = [], onToggle, sortDirection }) {
  const sortedTodos = [...todos].sort(sortTodos(sortDirection));

  return (
    <ul>
      {sortedTodos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />;
      })}
    </ul>
  );
}
