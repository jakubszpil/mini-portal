import { useEffect, useState } from "react";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [lastKnownId, setLastKnownId] = useState(null);

  const [fetching, setFetching] = useState(true);

  const fetchTodos = async () => {
    setFetching(true);

    const response = await fetch("/todos.json");
    const results = await response.json();

    setFetching(false);
    setLastKnownId(results.at(-1).id);
    setTodos(results);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const completedTodos = todos.filter((todo) => todo.completed);

  const todosToDone = todos.length - completedTodos.length;

  const toggleTodo = (todoId) =>
    setTodos((prevTodos) => {
      const nextTodos = [...prevTodos];

      const index = nextTodos.findIndex((todo) => todo.id === todoId);

      if (index >= 0) {
        const todo = nextTodos[index];
        nextTodos[index] = { ...todo, completed: !todo.completed };
      }

      return nextTodos;
    });

  const createTodo = (title) => {
    const id = lastKnownId + 1;

    setTodos(function (prevTodos) {
      const nextTodos = [...prevTodos];

      nextTodos.push({
        userId: 1,
        id,
        title,
        completed: false,
      });

      return nextTodos;
    });

    setLastKnownId(id);
  };

  const updateTodoTitle = (id, title) => {
    setTodos(function (prevTodos) {
      const nextTodos = [...prevTodos];

      const index = nextTodos.findIndex((todo) => todo.id === id);

      if (index !== -1) {
        const todo = nextTodos[index];

        nextTodos[index] = {
          ...todo,
          title: title,
        };
      }

      return nextTodos;
    });
  };

  const getTodo = (id) => {
    const idAsNumber = parseInt(id, 10);

    return todos.find((todo) => todo.id === idAsNumber);
  };

  return {
    todos,
    todosToDone,
    toggleTodo,
    createTodo,
    getTodo,
    updateTodoTitle,
    fetching,
  };
}
