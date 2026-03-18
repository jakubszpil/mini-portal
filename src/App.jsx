import { Route, Routes } from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="todos" element={<Todos />} />
        <Route path="todos/:id" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
