import { Link, useSearchParams } from "react-router";

import TodoList from "../components/TodoList";

export default function Todos({ todosHook }) {
  const [searchParams] = useSearchParams();

  const { todos, todosToDone, toggleTodo, createTodo } = todosHook;

  const sortDirection = searchParams.get("sortBy") || "DESC";

  const message =
    todosToDone === 0
      ? `Wszystkie zadania zostały wykonane`
      : `Liczba zadań do wykonania: ${todosToDone}`;

  const handleCreate = (formValues) => {
    const title = formValues.get("title");

    createTodo(title);
  };

  return (
    <div>
      <h2>Lista zadań</h2>
      <p>{message}</p>

      <form action={handleCreate}>
        <input type="text" name="title" />
        <button type="submit">Utwórz nowe zadanie</button>
      </form>

      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="?sortBy=DESC">Sortuj od najnowszych</Link>
        <Link to="?sortBy=ASC">Sortuj od najstarszych</Link>
      </nav>

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        sortDirection={sortDirection}
      />
    </div>
  );
}
