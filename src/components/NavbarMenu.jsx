import { Link } from "react-router";

export default function NavbarMenu() {
  return (
    <nav style={{ display: "flex", gap: 12 }}>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/albums">Albums</Link>
      <Link to="/users">Users</Link>
      <Link to="/todos">Todos</Link>
    </nav>
  );
}
