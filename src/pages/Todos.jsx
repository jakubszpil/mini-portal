import { lazy, Suspense, useCallback } from "react";
import { Link, useSearchParams } from "react-router";

const TodoList = lazy(() => import("../components/TodoList"));

export default function Todos({ todosHook }) {
  const [searchParams] = useSearchParams();

  const { todos, todosToDone, toggleTodo, createTodo } = todosHook;

  const sortDirection = searchParams.get("sortBy") || "DESC";

  const message =
    todosToDone === 0
      ? `Wszystkie zadania zostały wykonane`
      : `Liczba zadań do wykonania: ${todosToDone}`;

  const handleCreate = useCallback(
    (formValues) => {
      const title = formValues.get("title");

      createTodo(title);
    },
    [createTodo],
  );

  return (
    <div>
      <h2>Lista zadań</h2>
      <p>{message}</p>

      <form action={handleCreate}>
        <input type="text" name="title" required />
        <button type="submit">Utwórz nowe zadanie</button>
      </form>

      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="?sortBy=DESC">Sortuj od najnowszych</Link>
        <Link to="?sortBy=ASC">Sortuj od najstarszych</Link>
      </nav>

      <Suspense fallback="Trwa ładowanie listy...">
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          sortDirection={sortDirection}
        />
      </Suspense>
    </div>
  );
}
