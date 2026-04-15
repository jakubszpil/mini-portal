import { Link, Navigate, useParams } from "react-router";

export default function Todo({ todosHook }) {
  const { id } = useParams();
  const { getTodo, updateTodoTitle } = todosHook;

  const todo = getTodo(id);

  const submitAction = (values) => {
    const title = values.get("title");

    updateTodoTitle(todo.id, title);
  };

  if (!todo) {
    return <Navigate replace to="/todos" />;
  }

  return (
    <div>
      <Link to="/todos">Powrót do listy zadań</Link>

      <form action={submitAction}>
        <input type="text" name="title" defaultValue={todo.title} />

        <button type="submit">Zaktualizuj</button>
      </form>

      <h2>{todo.title}</h2>
    </div>
  );
}
