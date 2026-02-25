import { useState } from "react";

import { TODOS } from "../data/todos";

export function useTodos() {
  const [todos, setTodos] = useState(TODOS);

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

  const createTodo = (title) => {};

  return { todos, todosToDone, toggleTodo, createTodo };
}
