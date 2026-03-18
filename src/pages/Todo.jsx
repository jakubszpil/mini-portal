import { Link, Navigate, useParams } from "react-router";

import { useTodos } from "../hooks/useTodos";

export default function Todo() {
  const { id } = useParams();
  const { getTodo } = useTodos();

  const todo = getTodo(id);

  if (!todo) {
    return <Navigate replace to="/todos" />;
  }

  return (
    <div>
      <Link to="/todos">Powrót do listy zadań</Link>

      <h2>{todo.title}</h2>
    </div>
  );
}
