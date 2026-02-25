import Layout from "./components/Layout";
import Home from "./pages/Home";
import Todos from "./pages/Todos";

export default function App() {
  return (
    <Layout>
      <Home />
      <Todos />
    </Layout>
  );
}
