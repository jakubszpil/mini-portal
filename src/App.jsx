import { Route, Routes } from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";
import { useTodos } from "./hooks/useTodos";
import Gallery from "./pages/Gallery";

export default function App() {
  const todosHook = useTodos();

  if (todosHook.fetching) {
    return null;
  }

  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />

        <Route path="todos" element={<Todos todosHook={todosHook} />} />

        <Route path="todos/:id" element={<Todo todosHook={todosHook} />} />

        <Route path="albums" element={<Gallery />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
