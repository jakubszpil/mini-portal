import TodoList from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";

export default function Todos() {
  const { todos, todosToDone, toggleTodo } = useTodos();

  const message =
    todosToDone === 0
      ? `Wszystkie zadania zostały wykonane`
      : `Liczba zadań do wykonania: ${todosToDone}`;

  return (
    <div>
      <h2>Lista zadań</h2>
      <p>{message}</p>

      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}
