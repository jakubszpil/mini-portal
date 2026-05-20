import { useEffect, useState, useMemo, useCallback } from "react";

import { fetchData } from "../utils/fetchData";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [lastKnownId, setLastKnownId] = useState(null);

  const [fetching, setFetching] = useState(true);

  const fetchTodos = useCallback(async () => {
    setFetching(true);

    const results = await fetchData("/todos.json");

    setFetching(false);
    setLastKnownId(results.at(-1).id);
    setTodos(results);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed),
    [todos],
  );

  const todosToDone = todos.length - completedTodos.length;

  const toggleTodo = useCallback(
    (todoId) =>
      setTodos((prevTodos) => {
        const nextTodos = [...prevTodos];

        const index = nextTodos.findIndex((todo) => todo.id === todoId);

        if (index >= 0) {
          const todo = nextTodos[index];
          nextTodos[index] = { ...todo, completed: !todo.completed };
        }

        return nextTodos;
      }),
    [],
  );

  const createTodo = useCallback(
    (title) => {
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
    },
    [lastKnownId],
  );

  const updateTodoTitle = useCallback((id, title) => {
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
  }, []);

  const getTodo = useCallback(
    (id) => {
      const idAsNumber = parseInt(id, 10);

      return todos.find((todo) => todo.id === idAsNumber);
    },
    [todos],
  );

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
