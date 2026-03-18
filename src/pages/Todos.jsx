import { Link, useSearchParams } from "react-router";
import TodoList from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";

export default function Todos() {
  const [searchParams] = useSearchParams();

  const { todos, todosToDone, toggleTodo } = useTodos();

  const sortDirection = searchParams.get("sortBy");

  const message =
    todosToDone === 0
      ? `Wszystkie zadania zostały wykonane`
      : `Liczba zadań do wykonania: ${todosToDone}`;

  return (
    <div>
      <h2>Lista zadań</h2>
      <p>{message}</p>

      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="?sortBy=ASC">Sortuj rosnąco</Link>
        <Link to="?sortBy=DESC">Sortuj malejąco</Link>
      </nav>

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        sortDirection={sortDirection}
      />
    </div>
  );
}
