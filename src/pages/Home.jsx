import { Link } from "react-router";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div>
      <h2>Strona główna</h2>

      <p>
        Witaj w <Logo />!
      </p>

      <Link to="/todos">Przejdź do listy zadań</Link>
    </div>
  );
}
